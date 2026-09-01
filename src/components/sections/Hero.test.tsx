import { act, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

// Isolates this test from the real react-three-fiber Canvas: jsdom has no
// ResizeObserver, so mounting the actual WebGL canvas throws outside of a
// real browser (see `src/three/HeroVisual.tsx` — untested for the same
// reason `Scene.tsx`/`NetworkGraph.tsx` are). The headline itself renders
// outside the Suspense boundary that wraps this, so it's unaffected.
vi.mock("@/three/HeroVisual", () => ({
  HeroVisual: () => null,
}))

import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { Hero } from "@/components/sections/Hero"

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>,
  )
}

describe("Hero", () => {
  it("renders exactly one h1", () => {
    renderHero()
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
  })

  it("renders the static headline lead", () => {
    renderHero()
    // The lead's own visible markup (SplitText, word-by-word spans) sits
    // inside an `aria-hidden` wrapper (see the heading test below), so
    // `getByLabelText`/`getByText` correctly can't find it accessibility-aware
    // — the heading's own aria-label is the one accessible source of truth.
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading.getAttribute("aria-label")).toContain(en.hero.headline.lead.trim())
  })

  it("renders the first rotating phrase before any rotation has happened", () => {
    renderHero()
    expect(screen.getByTestId("rotating-current")).toHaveTextContent(en.hero.headline.rotating[0])
  })

  it("exposes every rotating variant via the heading's accessible name, not just the visible one", () => {
    renderHero()
    const heading = screen.getByRole("heading", { level: 1 })
    for (const item of en.hero.headline.rotating) {
      expect(heading.getAttribute("aria-label")).toContain(item)
    }
  })

  it("hides the heading's visible content from assistive tech, since the heading's own aria-label is the single source of truth", () => {
    // Regression guard: SplitText and RotatingText each also set their own
    // aria-label when used standalone (see their own component docs) — if
    // this wrapper span stops being aria-hidden, a screen reader would be
    // handed the same headline up to three times over in different,
    // inconsistent phrasing.
    renderHero()
    const heading = screen.getByRole("heading", { level: 1 })
    const visibleContent = heading.querySelector("span[aria-hidden]")
    expect(visibleContent).not.toBeNull()
    expect(visibleContent).toContainElement(screen.getByTestId("rotating-current"))
  })

  describe("rotation pause control", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it("starts playing, labeled to pause", () => {
      renderHero()
      const button = screen.getByRole("button", { name: en.hero.pauseRotation })
      expect(button).toHaveAttribute("aria-pressed", "false")
    })

    it("clicking it switches the label to resume and marks it pressed", () => {
      renderHero()
      fireEvent.click(screen.getByRole("button", { name: en.hero.pauseRotation }))
      const button = screen.getByRole("button", { name: en.hero.resumeRotation })
      expect(button).toHaveAttribute("aria-pressed", "true")
    })

    it("actually stops the rotation from advancing once paused (WCAG 2.2.2)", () => {
      renderHero()
      expect(screen.getByTestId("rotating-current")).toHaveTextContent(en.hero.headline.rotating[0])

      fireEvent.click(screen.getByRole("button", { name: en.hero.pauseRotation }))
      act(() => vi.advanceTimersByTime(10_000))

      expect(screen.getByTestId("rotating-current")).toHaveTextContent(en.hero.headline.rotating[0])
    })

    it("resumes advancing after clicking it a second time", () => {
      renderHero()
      const pauseButton = screen.getByRole("button", { name: en.hero.pauseRotation })
      fireEvent.click(pauseButton)
      fireEvent.click(screen.getByRole("button", { name: en.hero.resumeRotation }))

      act(() => vi.advanceTimersByTime(3400))

      // The exiting word's crossfade-out isn't necessarily finished in
      // jsdom's fake-timer world (AnimatePresence unmounts it once its own
      // exit animation completes, which depends on real animation timing),
      // so both the outgoing and incoming word can legitimately coexist
      // here — asserting the new one is present is the reliable check, not
      // that it's the only one.
      const current = screen.getAllByTestId("rotating-current")
      expect(current.some((el) => el.textContent === en.hero.headline.rotating[1])).toBe(true)
    })
  })
})
