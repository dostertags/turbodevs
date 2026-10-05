import { expect, test } from "@playwright/test"

import { LANGUAGES } from "../src/i18n/languages"

/**
 * The first screen. It is static now — no rotating words, no entrance
 * choreography, no background graph — so the checks are about it staying
 * that way: painted on arrival, never fading or blurring, and fitting in
 * every language.
 */

/** Opacity multiplied up the ancestor chain, plus any inherited filter. */
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

const PRIMARY_CTA = '#top a[href="#contact"]'

test.describe("hero", () => {
  test("the headline and both calls to action are painted on arrival", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1")).toContainText(/\S/)
    expect((await page.evaluate(effectiveStyle, "h1"))?.opacity).toBe(1)
    expect((await page.evaluate(effectiveStyle, PRIMARY_CTA))?.opacity).toBe(1)
    expect((await page.evaluate(effectiveStyle, '#top a[href="#work"]'))?.opacity).toBe(1)
  })

  test("the headline does not change while it is being read", async ({ page }) => {
    await page.goto("/")
    const before = await page.locator("h1").textContent()
    await page.waitForTimeout(4000)
    expect(await page.locator("h1").textContent()).toBe(before)
  })

  test("no interactive control lives inside the heading", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1 button, h1 a")).toHaveCount(0)
  })

  test("the primary CTA never fades or blurs while it is being scrolled to", async ({ page }) => {
    await page.goto("/")
    for (const y of [0, 150, 300, 450, 600]) {
      await page.evaluate((value) => window.scrollTo(0, value), y)
      await page.waitForTimeout(250)
      const state = await page.evaluate(effectiveStyle, PRIMARY_CTA)
      expect(state!.opacity, `CTA opacity at scrollY ${y}`).toBe(1)
      expect(state!.filter, `CTA filter at scrollY ${y}`).toBe("none")
    }
  })

  test("the page draws nothing with WebGL and fetches no 3D code", async ({ page }) => {
    const heavy: string[] = []
    page.on("request", (request) => {
      if (/three|postprocessing|drei|Scene-/i.test(request.url())) heavy.push(request.url())
    })
    await page.goto("/")
    await page.waitForTimeout(2000)
    expect(heavy).toEqual([])
    expect(await page.locator("canvas").count()).toBe(0)
  })

  test("nothing overflows horizontally, in any language", async ({ page }) => {
    for (const { code } of LANGUAGES) {
      await page.goto("/")
      await page.evaluate((c) => localStorage.setItem("turbodevs:lang", c), code)
      await page.reload()
      await page.waitForTimeout(500)
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
        // The drawer toggle is the only header button with aria-expanded that
        // is not the language listbox.
        const burger = header.querySelector("button[aria-expanded]:not([aria-haspopup])")
        return {
          desktopRow: !!list && list.getBoundingClientRect().width > 0,
          hamburger: !!burger && burger.getBoundingClientRect().width > 0,
          overflows: header.scrollWidth > header.clientWidth,
        }
      })
      expect(nav.desktopRow, `"${code}": both nav styles visible at once`).not.toBe(nav.hamburger)
      expect(nav.overflows, `"${code}": header overflows its own width`).toBe(false)
    }
  })

  test("there is no floating button covering the page", async ({ page }) => {
    await page.goto("/")
    const floating = await page.evaluate(
      () =>
        [...document.querySelectorAll("body *")].filter((el) => {
          const cs = getComputedStyle(el)
          return cs.position === "fixed" && !el.closest("header") && el.getBoundingClientRect().width > 0
        }).length,
    )
    expect(floating).toBe(0)
  })
})
