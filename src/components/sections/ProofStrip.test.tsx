import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { SERVICE_LINES } from "@/content/site"

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <ProofStrip />
    </LanguageProvider>,
  )
}

const allChips = () => [...screen.getAllByTestId("sector-chip"), ...screen.getAllByTestId("service-chip")]

describe("ProofStrip", () => {
  it("renders every sector label from the active dictionary", () => {
    renderWithProvider()
    for (const label of Object.values(en.hero.sectors)) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it("renders every business-line label, in order", () => {
    renderWithProvider()
    const chips = screen.getAllByTestId("service-chip")
    expect(chips).toHaveLength(SERVICE_LINES.length)
    SERVICE_LINES.forEach((key, i) => expect(chips[i]).toHaveTextContent(en.hero.serviceLines[key]))
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
    expect(screen.getAllByTestId("sector-chip")).toHaveLength(Object.keys(en.hero.sectors).length)
  })

  it("draws all eight chips in one identical style", () => {
    renderWithProvider()
    const chips = allChips()
    expect(chips).toHaveLength(8)
    expect(new Set(chips.map((el) => el.className)).size).toBe(1)
  })

  it("keeps every chip decorative: no links, no buttons", () => {
    renderWithProvider()
    for (const chip of allChips()) {
      expect(chip.tagName).toBe("SPAN")
      expect(chip.querySelector("a, button")).toBeNull()
    }
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("is decorative-safe: the strip itself doesn't hijack heading structure", () => {
    renderWithProvider()
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
  })
})
