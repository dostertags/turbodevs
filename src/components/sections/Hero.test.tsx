import { fireEvent, render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CLIENT_NAMES, HERO_VIDEO } from "@/content/site"
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
  it("states the one idea as the page's only h1", () => {
    renderHero()
    const headings = screen.getAllByRole("heading", { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(en.hero.headline)
  })

  it("leads to a conversation first, and to the work second", () => {
    renderHero()
    expect(screen.getByRole("link", { name: en.hero.ctaPrimary })).toHaveAttribute("href", "#contact")
    expect(screen.getByRole("link", { name: en.hero.ctaSecondary })).toHaveAttribute("href", "#work")
  })

  it("plays muted, looping footage that is hidden from assistive technology and has a still frame", () => {
    renderHero()
    const video = screen.getByTestId("hero-video") as HTMLVideoElement
    expect(video.muted).toBe(true)
    expect(video.loop).toBe(true)
    expect(video).toHaveAttribute("poster", HERO_VIDEO.poster)
    expect(video.closest("[aria-hidden='true']")).not.toBeNull()
  })

  it("lets the visitor pause the footage (WCAG 2.2.2)", () => {
    renderHero()
    const pause = screen.getByRole("button", { name: en.a11y.pauseVideo })
    fireEvent.click(pause)
    expect(screen.getByRole("button", { name: en.a11y.playVideo })).toBeInTheDocument()
  })

  it("names only the clients that appear as case studies", () => {
    renderHero()
    const names = within(screen.getByTestId("client-names"))
      .getAllByRole("listitem")
      .map((li) => li.textContent)
    expect(names).toEqual(CLIENT_NAMES)
  })

  it("keeps every control out of the heading", () => {
    const { container } = renderHero()
    expect(container.querySelector("h1 button, h1 a")).toBeNull()
  })
})
