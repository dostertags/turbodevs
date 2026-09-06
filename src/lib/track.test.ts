import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { track } from "@/lib/track"

/**
 * The beacon is the one thing on this site that sends anything anywhere, so
 * what it may and may not carry is pinned here rather than left to review.
 */

function stubHost(hostname: string) {
  Object.defineProperty(window, "location", {
    value: { ...window.location, hostname, pathname: "/" },
    writable: true,
    configurable: true,
  })
}

describe("track", () => {
  const sendBeacon = vi.fn(() => true)

  beforeEach(() => {
    sendBeacon.mockClear()
    vi.stubGlobal("navigator", { ...navigator, sendBeacon })
    document.documentElement.lang = "es"
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("sends nothing at all from a local build", async () => {
    // `vite preview` and `npm run dev` have no function behind /api/e, and a
    // developer reloading the page should never pollute the field data.
    stubHost("localhost")
    track("page_view")
    expect(sendBeacon).not.toHaveBeenCalled()
  })

  it("posts a same-origin beacon in production", async () => {
    stubHost("turbodevs.web.app")
    track("cta_click", { id: "hero_primary" })

    expect(sendBeacon).toHaveBeenCalledOnce()
    const [url, blob] = sendBeacon.mock.calls[0] as unknown as [string, Blob]
    // Same-origin: it must work under `connect-src 'self'` with no third party.
    expect(url).toBe("/api/e")

    const body = JSON.parse(await blob.text())
    expect(body).toMatchObject({ event: "cta_click", props: { id: "hero_primary" }, lang: "es", path: "/" })
  })

  it("carries nothing that identifies a person", async () => {
    stubHost("turbodevs.web.app")
    track("form_sent")

    const [, blob] = sendBeacon.mock.calls[0] as unknown as [string, Blob]
    const body = JSON.parse(await blob.text())
    // No id, no cookie, no session, no referrer, no user agent, no free text.
    // (`props` is absent entirely when an event carries none.)
    const allowed = ["event", "lang", "path", "props", "viewport"]
    expect(Object.keys(body).filter((k) => !allowed.includes(k))).toEqual([])
    expect(Object.keys(body)).toEqual(expect.arrayContaining(["event", "lang", "path", "viewport"]))
    expect(JSON.stringify(body)).not.toMatch(/cookie|session|uid|user|email|referrer/i)
  })

  it("never throws, whatever the browser does", () => {
    stubHost("turbodevs.web.app")
    vi.stubGlobal("navigator", {
      ...navigator,
      sendBeacon: () => {
        throw new Error("blocked by a content blocker")
      },
    })
    // Measurement must never break the page it measures.
    expect(() => track("page_view")).not.toThrow()
  })
})
