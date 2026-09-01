import { chromium } from "playwright"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const source = path.join(__dirname, "og-image.html")
const out = path.join(__dirname, "..", "public", "og-image.png")

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(`file://${source}`)
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(150)
await page.screenshot({ path: out })
await browser.close()
console.log("wrote", out)
