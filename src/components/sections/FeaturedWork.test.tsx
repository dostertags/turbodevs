import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ledger from "../../../research/VERIFIED_FACTS.md?raw"

import { CASES, OPEN_SOURCE } from "@/content/site"
import { LanguageProvider } from "@/i18n/LanguageContext"
import type { Dictionary } from "@/i18n/types"
import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it as itLocale } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"
import { FeaturedWork } from "@/components/sections/FeaturedWork"

const DICTS: Record<string, Dictionary> = { en, es, pt, fr, it: itLocale, de, zh }

function renderWork() {
  return render(
    <LanguageProvider>
      <FeaturedWork />
    </LanguageProvider>,
  )
}

describe("Work", () => {
  it("is a named landmark", () => {
    renderWork()
    expect(screen.getByRole("region", { name: en.work.title })).toBeInTheDocument()
  })

  it("shows every case study with its challenge and what we built", () => {
    renderWork()
    const cards = screen.getAllByTestId("case-study")
    expect(cards).toHaveLength(CASES.length)
    CASES.forEach(({ key, company }, i) => {
      const card = within(cards[i])
      expect(card.getByRole("heading", { level: 3 })).toHaveTextContent(company ?? en.work.confidentialClient)
      expect(card.getByText(en.work.cases[key].challenge)).toBeInTheDocument()
      expect(card.getByText(en.work.cases[key].built)).toBeInTheDocument()
    })
  })

  it("attributes every quote to a named client, never to a confidential one", () => {
    renderWork()
    for (const [i, { key, company }] of CASES.entries()) {
      const quote = en.work.cases[key].quote
      const figure = screen.getAllByTestId("case-study")[i].querySelector("figure")
      if (quote && company) {
        expect(figure?.querySelector("blockquote")).toHaveTextContent(quote)
        expect(figure?.querySelector("figcaption")).toHaveTextContent(company)
      } else {
        expect(figure).toBeNull()
      }
    }
  })

  it("every client named on the page has a row in the source ledger", () => {
    for (const { company } of CASES) {
      if (company) expect(ledger, `no ledger row for "${company}"`).toContain(company)
    }
  })

  // A quote attributed to a real company may carry only what that company
  // said. None of them gave a figure, so any digit other than the "24/7" they
  // did say fails here, in every locale.
  it.each(Object.entries(DICTS))("%s: no client quote carries an invented figure", (_lang, dict) => {
    for (const { key } of CASES) {
      const quote = dict.work.cases[key].quote
      if (!quote) continue
      expect(quote.replace(/24\s*\/\s*7|24\s*h\s*\/\s*24/g, ""), `${key}: "${quote}"`).not.toMatch(/[0-9%×]/)
    }
  })

  it("lists our own repositories separately, each linking to its source", () => {
    renderWork()
    const items = screen.getAllByTestId("open-source-item")
    expect(items).toHaveLength(OPEN_SOURCE.length)
    OPEN_SOURCE.forEach(({ slug }, i) => {
      expect(within(items[i]).getByRole("link", { name: /GitHub/ })).toHaveAttribute(
        "href",
        `https://github.com/dostertags/${slug}`,
      )
    })
  })
})
