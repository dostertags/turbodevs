import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { ProofStrip } from "@/components/sections/ProofStrip"

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <ProofStrip />
    </LanguageProvider>,
  )
}

describe("ProofStrip", () => {
  it("renders every sector label from the active dictionary", () => {
    renderWithProvider()
    for (const label of Object.values(en.hero.sectors)) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it("renders every stat value and label from the active dictionary", () => {
    renderWithProvider()
    for (const stat of en.hero.stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label, { exact: false })).toBeInTheDocument()
    }
  })

  it("renders exactly one chip per sector — no duplicates, nothing dropped", () => {
    renderWithProvider()
    const sectorCount = Object.keys(en.hero.sectors).length
    const chips = screen.getAllByTestId("sector-chip")
    expect(chips).toHaveLength(sectorCount)
  })

  it("is decorative-safe: the strip itself doesn't hijack heading structure", () => {
    renderWithProvider()
    // A proof strip is a supporting element, not a new section headline —
    // it must not introduce an h1/h2 that competes with the real hero title.
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
  })
})
