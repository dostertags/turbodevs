import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { SERVICE_LINES } from "@/content/site"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { Services } from "@/components/sections/Services"

function renderServices() {
  return render(
    <LanguageProvider>
      <Services />
    </LanguageProvider>,
  )
}

describe("Services — business lines", () => {
  it("renders a card for every business line, reachable at its anchor", () => {
    const { container } = renderServices()
    for (const { key, anchor } of SERVICE_LINES) {
      const card = container.querySelector(`#${anchor}`)
      expect(card, `no element with id="${anchor}"`).not.toBeNull()
      expect(card).toHaveTextContent(en.services.lines[key].title)
    }
  })

  it("routes every business-line call to action to the contact form", () => {
    renderServices()
    for (const { key } of SERVICE_LINES) {
      expect(screen.getByRole("link", { name: en.services.lines[key].cta })).toHaveAttribute("href", "#contact")
    }
  })
})
