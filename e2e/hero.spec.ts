import { expect, test } from "@playwright/test"

import { LANGUAGES } from "../src/i18n/languages"

/**
 * The first screen, which is the one every visitor sees and the one that was
 * most broken: a headline whose rotating slot rendered blank under a starved
 * GPU, a pause button living inside the <h1>, and CTAs that faded and blurred
 * as a phone user scrolled toward them.
 */

/**
 * Opacity multiplied up the ancestor chain, plus any filter inherited from an
 * ancestor — what the eye actually receives, which is not what the element’s
 * own computed style reports when a parent is mid-transition.
 */
function effectiveStyle(selector: string) {
  const el = document.querySelector(selector)
  if (!el) return null
  let opacity = 1
  let filter = "none"
  let node: Element | null = el
  while (node && node !== document.body) {
    const cs = getComputedStyle(node)
    opacity *= Number.parseFloat(cs.opacity)
    if (cs.filter && cs.filter !== "none") filter = cs.filter
    node = node.parentElement
  }
  return { opacity: Math.round(opacity * 100) / 100, filter }
}

const PRIMARY_CTA = 'a[href="#work"].inline-flex'

test.describe("hero", () => {
  test("the headline is fully painted, with no empty rotating slot", async ({ page }) => {
    await page.goto("/")
    // The rotating phrase used to depend on a JS animation completing. On a
    // starved GPU that animation never finished, so the sentence rendered as
    // "Custom software that works day and night — built for" and stopped.
    const rotating = page.getByTestId("rotating-current").first()
    await expect(rotating).not.toBeEmpty()
    await expect(page.locator("h1")).toContainText(/\S/)

    // Still true several seconds later, i.e. across a rotation.
    await page.waitForTimeout(4000)
    await expect(page.getByTestId("rotating-current").first()).not.toBeEmpty()
  })

  test("no interactive control lives inside the heading", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1 button")).toHaveCount(0)
  })

  test("the primary CTA never fades or blurs while it is being scrolled to", async ({ page }) => {
    await page.goto("/")
    // Let the entrance choreography finish first — the CTA row starts at
    // opacity 0 and is revealed on a 0.75s delay. (That delay is itself a
    // finding, tracked separately; this test is about what happens *after*
    // the visitor can see the button.)
    await expect
      .poll(async () => (await page.evaluate(effectiveStyle, PRIMARY_CTA))?.opacity, { timeout: 8000 })
      .toBe(1)

    for (const y of [0, 100, 200, 300, 400, 500]) {
      await page.evaluate((value) => window.scrollTo(0, value), y)
      await page.waitForTimeout(350)
      const state = await page.evaluate(effectiveStyle, PRIMARY_CTA)
      expect(state, `no CTA at scrollY ${y}`).not.toBeNull()
      // Was ~0.35 opacity behind a 5.5px blur by the time a phone user had
      // scrolled far enough to read it.
      expect(state!.opacity, `CTA opacity at scrollY ${y}`).toBe(1)
      expect(state!.filter, `CTA filter at scrollY ${y}`).toBe("none")
    }
  })

  test("the sector chips are never blurred either", async ({ page }) => {
    await page.goto("/")
    const chip = "[data-testid=sector-chip]"
    await expect.poll(async () => (await page.evaluate(effectiveStyle, chip))?.opacity, { timeout: 8000 }).toBe(1)

    await page.evaluate(() => window.scrollTo(0, 300))
    await page.waitForTimeout(350)
    const state = await page.evaluate(effectiveStyle, chip)
    expect(state!.filter).toBe("none")
    expect(state!.opacity).toBe(1)
  })

  test("the rotation control is a real target, outside the heading", async ({ page }) => {
    await page.goto("/")
    const control = page.locator("button[aria-pressed]").first()
    if ((await control.count()) === 0) test.skip(true, "no rotation control under reduced motion")
    const box = await control.boundingBox()
    expect(box!.width, "WCAG 2.5.8 minimum target size").toBeGreaterThanOrEqual(44)
    expect(box!.height).toBeGreaterThanOrEqual(44)
  })

  test("nothing overflows horizontally, in any language", async ({ page }) => {
    for (const { code } of LANGUAGES) {
      await page.goto("/")
      await page.evaluate((c) => localStorage.setItem("turbodevs:lang", c), code)
      await page.reload()
      await page.waitForTimeout(600)
      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        lang: document.documentElement.lang,
      }))
      expect(overflow.lang).toBe(code)
      expect(overflow.scrollWidth, `horizontal overflow in "${code}"`).toBeLessThanOrEqual(overflow.innerWidth)
    }
  })
})

test.describe("header", () => {
  test("shows exactly one navigation affordance and fits at this width", async ({ page }) => {
    for (const { code } of LANGUAGES) {
      await page.goto("/")
      await page.evaluate((c) => localStorage.setItem("turbodevs:lang", c), code)
      await page.reload()
      await page.waitForTimeout(400)

      const nav = await page.evaluate(() => {
        const header = document.querySelector("header")!
        const list = header.querySelector("ul")
        // Structural, not label-based: the drawer toggle is the only header
        // button with aria-expanded that is not the language listbox. Matching
        // on /menu/i missed Spanish ("Abrir menú") and German ("Menü").
        const burger = header.querySelector("button[aria-expanded]:not([aria-haspopup])")
        return {
          desktopRow: !!list && list.getBoundingClientRect().width > 0,
          hamburger: !!burger && burger.getBoundingClientRect().width > 0,
          overflows: header.scrollWidth > header.clientWidth,
        }
      })
      // The desktop row used to switch on at 768px but not actually fit until
      // ~900px in English and ~1000px in French/Spanish/Portuguese.
      expect(nav.desktopRow, `"${code}": both nav styles visible at once`).not.toBe(nav.hamburger)
      expect(nav.overflows, `"${code}": header overflows its own width`).toBe(false)
    }
  })
})

test.describe("the WhatsApp button yields the corner it used to own", () => {
  test("sits below the header and hides over the sections whose controls it covered", async ({ page }) => {
    await page.goto("/")
    const fab = 'a[href^="https://wa.me"]'
    expect(await page.evaluate((s) => getComputedStyle(document.querySelector(s)!).zIndex, fab)).toBe("40")

    for (const section of ["#demo", "#contact"]) {
      await page.evaluate((s) => document.querySelector(s)!.scrollIntoView({ block: "center" }), section)
      // Poll rather than sleep: the observer fires when the scroll settles and
      // the button then takes 300ms to translate away, so a fixed wait races.
      await expect
        .poll(
          async () =>
            page.evaluate((s) => {
              const cs = getComputedStyle(document.querySelector(s)!)
              return { opacity: Number.parseFloat(cs.opacity), pointerEvents: cs.pointerEvents }
            }, fab),
          { timeout: 5000, message: `WhatsApp button still covering ${section}` },
        )
        .toEqual({ opacity: 0, pointerEvents: "none" })
    }
  })
})
