import { expect, test } from "@playwright/test"

/**
 * Regression tests for content that shipped invisible.
 *
 * Sections were rendered at opacity 0 and revealed by an IntersectionObserver.
 * That is a bet the callback always fires, and it does not: jump the scroll
 * position — a fragment link, a restored position, a fast flick, a reload
 * partway down — and every section passed over stays hidden permanently. What
 * a visitor saw was a section heading above a completely empty grid.
 *
 * These drive the page the way that failure actually happened.
 */

/** Effective opacity, multiplied up the ancestor chain. */
const EFFECTIVE = (root: string, child: string) => {
  const el = document.querySelector(root)
  if (!el) return { found: 0, hidden: 0, reached: false }
  // A section still below the fold is *supposed* to be hidden; the invariant
  // is about sections the visitor has actually reached or scrolled past.
  const kids = [...el.querySelectorAll(child)]
  const reached = (n: Element) => n.getBoundingClientRect().top < window.innerHeight * 0.9
  const opacity = (n: Element | null) => {
    let o = 1
    let node: Element | null = n
    while (node && node !== document.body) {
      o *= Number.parseFloat(getComputedStyle(node).opacity)
      node = node.parentElement
    }
    return o
  }
  // Only elements the visitor has actually reached are required to be visible.
  const arrived = kids.filter(reached)
  return { found: kids.length, reached: arrived.length, hidden: arrived.filter((k) => opacity(k) < 0.9).length }
}

const SECTIONS = [
  { id: "#problem", child: ".tg-reveal" },
  { id: "#services", child: ".tg-reveal" },
  { id: "#work", child: ".tg-reveal" },
  { id: "#notes", child: ".tg-reveal" },
]

async function assertAllVisible(page: import("@playwright/test").Page, context: string) {
  for (const { id, child } of SECTIONS) {
    const result = await page.evaluate(([r, c]) => EFFECTIVE_PLACEHOLDER(r, c), [id, child] as const)
    expect(result.found, `${context}: ${id} rendered nothing`).toBeGreaterThan(0)
    expect(
      result.hidden,
      `${context}: ${result.hidden} of the ${result.reached} reached elements in ${id} are invisible`,
    ).toBe(0)
  }
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(`window.EFFECTIVE_PLACEHOLDER = ${EFFECTIVE.toString()}`)
})

test("content is visible after jumping straight past a section", async ({ page }) => {
  await page.goto("/")
  // The exact failure: teleport to the middle of the page. Everything above is
  // scrolled past without ever "entering" the viewport.
  await page.evaluate(() => window.scrollTo(0, 2000))
  await page.waitForTimeout(2500)
  await assertAllVisible(page, "after a jump to 2000px")
})

test("content is visible after landing on a deep fragment", async ({ page }) => {
  await page.goto("/#contact")
  await page.waitForTimeout(2500)
  await assertAllVisible(page, "after loading /#contact")
})

test("content is visible when scrolling starts before the page settles", async ({ page }) => {
  await page.goto("/", { waitUntil: "commit" })
  await page.evaluate(() => window.scrollTo(0, 1800)).catch(() => {})
  await page.waitForTimeout(2500)
  await assertAllVisible(page, "after scrolling immediately")
})

test("content is visible after a fast flick down the page", async ({ page }) => {
  await page.goto("/")
  await page.waitForTimeout(400)
  for (let i = 0; i < 20; i++) await page.mouse.wheel(0, 600)
  await page.waitForTimeout(2500)
  await assertAllVisible(page, "after a fast flick")
})

test("content is visible with JavaScript animation never running", async ({ page }) => {
  // The strongest guarantee: with reduced motion, nothing is ever hidden in
  // the first place.
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  await page.evaluate(() => window.scrollTo(0, 3000))
  await page.waitForTimeout(1200)
  await assertAllVisible(page, "with motion off")
})
