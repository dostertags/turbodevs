import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

/**
 * Keyboard operability and the automated slice of WCAG. Axe catches perhaps a
 * third of real barriers, so the explicit keyboard walks below matter at least
 * as much as the scan.
 */

test("no serious or critical axe violations on the page", async ({ page }) => {
  // Scan the page at rest. With animation running, an element caught halfway
  // through a fade reports the contrast of its half-faded colour, which makes
  // the whole scan non-deterministic — it passed alone and failed under load.
  // Turning motion off through the site's own control is also the honest thing
  // to scan: it is the state an assistive-tech user is most likely in.
  await page.addInitScript(() => localStorage.setItem("turbodevs:motion", "off"))
  await page.goto("/")

  // Walk the page so every scroll-revealed section has rendered before the scan.
  await page.evaluate(async () => {
    const step = window.innerHeight
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 60))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(500)

  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze()

  const serious = violations.filter((v) => v.impact === "serious" || v.impact === "critical")
  const summary = serious.map((v) => `${v.id} (${v.impact}) × ${v.nodes.length}: ${v.help}`).join("\n")
  expect(serious, `axe violations:\n${summary}`).toEqual([])
})

test("the first Tab reaches a skip link that moves focus into the content", async ({ page }) => {
  await page.goto("/")
  // Everything on this page is client-rendered, so wait for the link to exist
  // before pressing a key — otherwise under parallel load the keystroke lands
  // on an empty document and focus stays on <body>.
  await page.locator('a[href="#main"]').waitFor({ state: "attached" })
  await page.keyboard.press("Tab")

  const link = await page.evaluate(() => {
    const el = document.activeElement as HTMLAnchorElement | null
    const rect = el?.getBoundingClientRect()
    return { href: el?.getAttribute("href"), visible: !!rect && rect.width > 0 && rect.height > 0 }
  })
  expect(link.href).toBe("#main")
  // sr-only until focused — it must actually become visible, or a sighted
  // keyboard user cannot tell where they are.
  expect(link.visible, "skip link is not visible while focused").toBe(true)

  await page.keyboard.press("Enter")
  await page.waitForTimeout(400)
  expect(await page.evaluate(() => document.activeElement?.id)).toBe("main")
})

test("activating a nav link by keyboard moves focus, updates the hash, and scrolls", async ({ page }) => {
  await page.goto("/")
  // The smooth-scroll handler used to call preventDefault on every activation,
  // including keyboard ones: the page slid to the section, but focus stayed on
  // the link and the URL never gained the hash, so the next Tab resumed from
  // the header and the section could not be linked to.
  // Any visible in-page anchor exercises the same handler; the header row is
  // inside a closed drawer on phones, so pick whichever one is on screen.
  await page.locator('a[href="#work"]').first().waitFor({ state: "attached" })
  await page.evaluate(() => {
    const link = [...document.querySelectorAll<HTMLAnchorElement>('a[href="#work"]')].find(
      (a) => a.getBoundingClientRect().width > 0,
    )
    link?.focus()
  })
  await page.keyboard.press("Enter")
  await page.waitForTimeout(1200)

  const state = await page.evaluate(() => ({
    hash: location.hash,
    focused: document.activeElement?.id,
    scrolled: window.scrollY,
  }))
  expect(state.hash).toBe("#work")
  expect(state.focused).toBe("work")
  expect(state.scrolled).toBeGreaterThan(200)
})

test("every control keeps a visible focus indicator", async ({ page }) => {
  await page.goto("/")
  const deployButton = page.locator("#demo button.bg-accent").first()
  await deployButton.focus()

  const outline = await deployButton.evaluate((el) => {
    const cs = getComputedStyle(el)
    return { width: Number.parseFloat(cs.outlineWidth), style: cs.outlineStyle }
  })
  // This button had `focus-visible:outline-none` with nothing replacing it.
  expect(outline.style).not.toBe("none")
  expect(outline.width).toBeGreaterThan(0)
})

test("no fixed element covers a focusable control", async ({ page }) => {
  await page.goto("/")
  const sections = ["#top", "#work", "#demo", "#contact"]

  for (const section of sections) {
    await page.evaluate((s) => document.querySelector(s)!.scrollIntoView({ block: "center" }), section)
    await page.waitForTimeout(700)

    const obscured = await page.evaluate(() => {
      const focusable = [...document.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input, textarea")]
      const covered: string[] = []
      for (const el of focusable) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        if (r.top < 64 || r.bottom > window.innerHeight) continue // off screen or under the header
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const top = document.elementFromPoint(cx, cy)
        if (top && !el.contains(top) && !top.contains(el)) {
          covered.push(`${el.tagName}.${el.className.toString().slice(0, 40)} covered by ${top.tagName}`)
        }
      }
      return covered
    })
    expect(obscured, `controls obscured in ${section}`).toEqual([])
  }
})
