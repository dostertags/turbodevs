import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { LanguageProvider } from "@/i18n/LanguageContext"
import type { Dictionary } from "@/i18n/types"
import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it as itLocale } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"
import { Services } from "@/components/sections/Services"

const DICTS: Record<string, Dictionary> = { en, es, pt, fr, it: itLocale, de, zh }

describe("Services", () => {
  it("presents the four stages, numbered in order", () => {
    render(
      <LanguageProvider>
        <Services />
      </LanguageProvider>,
    )
    const stages = screen.getAllByTestId("stage")
    expect(stages).toHaveLength(4)
    stages.forEach((stage, i) => {
      expect(stage).toHaveTextContent(String(i + 1).padStart(2, "0"))
      expect(within(stage).getByRole("heading", { level: 3 })).toHaveTextContent(en.services.stages[i].title)
    })
  })

  it.each(Object.entries(DICTS))("%s: has exactly four stages, and proof only where English has it", (_lang, dict) => {
    expect(dict.services.stages).toHaveLength(4)
    dict.services.stages.forEach((stage, i) => {
      expect(Boolean(stage.proof)).toBe(Boolean(en.services.stages[i].proof))
    })
  })
})
