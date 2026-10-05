import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CLIENT_NAMES } from "@/content/site"
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

  it("names only the clients that appear as case studies", () => {
    renderHero()
    const names = screen.getAllByRole("listitem").map((li) => li.textContent)
    expect(names).toEqual(CLIENT_NAMES)
  })

  it("has nothing that moves on its own and no control inside the heading", () => {
    const { container } = renderHero()
    expect(container.querySelector("h1 button, [aria-pressed], [data-testid=rotating-current]")).toBeNull()
  })
})
