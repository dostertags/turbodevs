import { defineConfig, devices } from "@playwright/test"

/**
 * End-to-end gates for the things unit tests structurally cannot see: what a
 * real engine computes for opacity mid-scroll, whether a fixed element covers
 * a control, whether the header fits at a given width in a given language, and
 * whether the headline is actually painted when the GPU is starved.
 *
 * Every project runs against the production build (`vite preview`), not the dev
 * server, so what is measured is what ships. To smoke-test the deployed site
 * instead, set a base URL:
 *
 *     PLAYWRIGHT_BASE_URL=https://turbodevs.web.app npm run test:e2e
 *
 * CI leaves it unset and tests the build it just produced.
 */
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:4173"

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  timeout: 45_000,
  expect: { timeout: 10_000 },

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run preview",
        url: "http://localhost:4173",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },

  projects: [
    { name: "desktop-1440", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "tablet-820", use: { ...devices["Desktop Chrome"], viewport: { width: 820, height: 1180 } } },
    { name: "mobile-390", use: { ...devices["Pixel 7"] } },
    // The narrowest phone still in wide use; several layout bugs only appear here.
    { name: "mobile-360", use: { ...devices["Desktop Chrome"], viewport: { width: 360, height: 780 }, isMobile: false } },
    {
      name: "reduced-motion",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" },
    },
  ],
})
