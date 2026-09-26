import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ledger from "../../../research/VERIFIED_FACTS.md?raw"

import { TESTIMONIALS } from "@/content/site"
import { LanguageProvider } from "@/i18n/LanguageContext"
import type { Dictionary } from "@/i18n/types"
import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it as itLocale } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"
import { Testimonials } from "@/components/sections/Testimonials"

const DICTS: Record<string, Dictionary> = { en, es, pt, fr, it: itLocale, de, zh }

function renderTestimonials() {
  return render(
    <LanguageProvider>
      <Testimonials />
    </LanguageProvider>,
  )
}

describe("Testimonials", () => {
  it("is a named landmark, labelled by its own heading", () => {
    renderTestimonials()
    expect(screen.getByRole("region", { name: en.testimonials.title })).toBeInTheDocument()
  })

  it("renders one card per client, each with its company name, quote and project", () => {
    renderTestimonials()
    const cards = screen.getAllByTestId("testimonial-card")
    expect(cards).toHaveLength(TESTIMONIALS.length)

    TESTIMONIALS.forEach(({ key, company }, i) => {
      const card = within(cards[i])
      expect(card.getByText(company)).toBeInTheDocument()
      expect(card.getByText(en.testimonials.items[key].quote, { exact: false })).toBeInTheDocument()
      expect(card.getByText(en.testimonials.items[key].project)).toBeInTheDocument()
    })
  })

  it("marks each quote up as a quotation attributed to its company", () => {
    renderTestimonials()
    for (const card of screen.getAllByTestId("testimonial-card")) {
      expect(card.tagName).toBe("FIGURE")
      expect(card.querySelector("blockquote")).not.toBeNull()
      expect(card.querySelector("figcaption")).not.toBeNull()
    }
  })

  it("every client named on the page has a row in the source ledger", () => {
    for (const { company } of TESTIMONIALS) {
      expect(ledger, `no ledger row for testimonial "${company}"`).toContain(company)
    }
  })

  // The brief proposed "reduced operational costs by 40%" and "3x more
  // qualified leads" — figures none of these clients gave. A quote attributed
  // to a real company may carry only what that company said, so any digit
  // other than the "24/7" the client did say fails here, in every locale.
  it.each(Object.entries(DICTS))("%s: no quote or project label carries an invented figure", (_lang, dict) => {
    for (const { key } of TESTIMONIALS) {
      const { quote, project } = dict.testimonials.items[key]
      for (const text of [quote, project]) {
        expect(text.replace(/24\s*\/\s*7|24\s*h\s*\/\s*24/g, ""), `${key}: "${text}"`).not.toMatch(/[0-9%×]/)
      }
    }
  })
})
