import { expect, test } from "@playwright/test"

/**
 * The background is decoration. It is allowed to look good; it is not allowed
 * to cost the visitor the page.
 */

test("no WebGL machinery is downloaded, on any device", async ({ page }) => {
  const heavy: string[] = []
  page.on("request", (request) => {
    const url = request.url()
    if (/three|postprocessing|drei|Scene-/i.test(url)) heavy.push(url.split("/").pop() ?? url)
  })

  await page.goto("/")
  // Well past the load event and any idle callback that could pull it in.
  await page.waitForTimeout(4000)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
  await page.waitForTimeout(1500)

  expect(heavy, "the 312KB three.js chunk was fetched").toEqual([])
  expect(await page.locator("canvas").count(), "a WebGL context was created").toBe(0)
})

test("the constellation still renders, and is the same graph", async ({ page }) => {
  await page.goto("/")
  const svg = page.locator("svg[viewBox='0 0 1000 640']")
  await expect(svg).toBeAttached()

  const shape = await svg.evaluate((el) => ({
    nodes: el.querySelectorAll("g[class], g:not([stroke])").length,
    cores: el.querySelectorAll("circle").length,
    verified: el.querySelectorAll("g.tg-node-verified").length,
    edges: el.querySelectorAll("line").length,
  }))
  // Same seeded graph the canvas drew: 46 nodes, 7 of them ivory.
  expect(shape.cores).toBe(46 * 2) // a halo and a core per node
  expect(shape.verified).toBe(7)
  expect(shape.edges).toBeGreaterThan(40)
})

test("the background is hidden from assistive technology and never interactive", async ({ page }) => {
  await page.goto("/")
  const backdrop = page.locator("svg[viewBox='0 0 1000 640']").locator("xpath=..")
  await expect(backdrop).toHaveAttribute("aria-hidden", "true")
  expect(await backdrop.evaluate((el) => getComputedStyle(el).pointerEvents)).toBe("none")
})
