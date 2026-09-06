import { describe, expect, it } from "vitest"

// Imported as text rather than read through node:fs so this test needs no Node
// types in the app project — Vite resolves `?raw` at transform time.
import ledger from "../../research/VERIFIED_FACTS.md?raw"
import indexHtml from "../../index.html?raw"
import llmsTxt from "../../public/llms.txt?raw"

import type { Dictionary } from "@/i18n/types"
import { LANGUAGES } from "@/i18n/languages"
import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it as itLocale } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"

/**
 * The editorial rule in README.md and research/VERIFIED_FACTS.md says the site
 * only states claims traced to a row in the ledger. That rule used to live
 * entirely in a human's head, and three claims had already drifted past it:
 *
 *   - "Solidity/Soroban" and "smart-contract-adjacent systems" (hero paragraph
 *     and services) — no ledger row mentions either; stellarfit is a Horizon-
 *     confirmed payment integration, not smart-contract work.
 *   - the "7 languages" hero stat, which counts the site's own UI locales and
 *     was translated as "7 PROGRAMMING languages" in all six translations
 *     (de "Programmiersprachen", es "lenguajes", zh "编程语言", ...) — i.e. the
 *     site shipped a false claim in six of its seven languages.
 *   - "full-service", a breadth claim with no source, on a site that
 *     deliberately publishes no team size.
 *
 * This file is the machine-checkable half of that rule: banned vocabulary and
 * per-string length budgets, applied to every locale plus the two files that
 * duplicate the same copy for machines (index.html, public/llms.txt).
 */

const DICTS: Record<string, Dictionary> = { en, es, pt, fr, it: itLocale, de, zh }
const ENTRIES = Object.entries(DICTS)

/** Every string in a dictionary, flattened, with a dotted path for the failure message. */
function walk(value: unknown, path: string): { path: string; text: string }[] {
  if (typeof value === "string") return [{ path, text: value }]
  if (Array.isArray(value)) return value.flatMap((v, i) => walk(v, `${path}[${i}]`))
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => walk(v, path ? `${path}.${k}` : k))
  }
  return []
}

const ALL_STRINGS = ENTRIES.flatMap(([lang, dict]) => walk(dict, "").map((s) => ({ lang, ...s })))

/**
 * Claims with no ledger row, in every language they were shipped in. Each entry
 * is a case-insensitive substring; add a row to research/VERIFIED_FACTS.md
 * before removing anything from this list.
 */
const BANNED: { pattern: RegExp; why: string }[] = [
  { pattern: /soroban/i, why: "no ledger row: stellarfit is a Horizon-confirmed payment flow, not Soroban work" },
  { pattern: /solidity/i, why: "no ledger row: no repository in the ledger uses Solidity" },
  { pattern: /smart[- ]contract/i, why: "no ledger row for smart-contract work (en/de/it)" },
  { pattern: /contratos? inteligentes?/i, why: "no ledger row for smart-contract work (es/pt)" },
  { pattern: /smart contracts? /i, why: "no ledger row for smart-contract work (fr)" },
  { pattern: /智能合约/, why: "no ledger row for smart-contract work (zh)" },
  { pattern: /full[- ]service/i, why: "breadth claim with no ledger row (en/pt/fr/it)" },
  { pattern: /full-service-studio/i, why: "breadth claim with no ledger row (de)" },
  { pattern: /全服务/, why: "breadth claim with no ledger row (zh)" },
  {
    pattern: /across public repos/i,
    why: "false: the 1,826 total is sii (1,178, public) + battery storage (648, private) — ledger row 17",
  },
]

/**
 * Budgets are set just above what the longest current locale needs, so they
 * pass today and fail the moment a translation grows enough to break the
 * layout it belongs to. The number in brackets is today's longest.
 */
const BUDGETS: { path: string; max: number; select: (d: Dictionary) => string[] }[] = [
  { path: "nav.<item>", max: 14, select: (d) => [d.nav.work, d.nav.grantfox, d.nav.approach, d.nav.notes, d.nav.contact] }, // [12] fits the header row
  { path: "nav.startProject", max: 20, select: (d) => [d.nav.startProject] }, // [19] the header pill
  { path: "hero.eyebrow", max: 36, select: (d) => [d.hero.eyebrow] }, // [33]
  { path: "hero.headline.lead", max: 72, select: (d) => [d.hero.headline.lead] }, // [69]
  { path: "hero.headline.rotating", max: 30, select: (d) => d.hero.headline.rotating }, // [27] must not exceed the 350px phone column
  { path: "hero.sectors", max: 48, select: (d) => Object.values(d.hero.sectors) }, // [46]
  { path: "hero.stats[].label", max: 26, select: (d) => d.hero.stats.map((s) => s.label) }, // [24]
  { path: "hero.cta", max: 24, select: (d) => [d.hero.ctaPrimary, d.hero.ctaSecondary] }, // [21]
  { path: "services.items[].title", max: 52, select: (d) => d.services.items.map((i) => i.title) }, // [49]
  // Search-result budgets (title <= 60, description <= 155) are deliberately not
  // asserted yet: today's locales run to 68/212 and the per-locale <head> is
  // only written once the site prerenders one page per language.
  { path: "meta.title", max: 70, select: (d) => [d.meta.title] }, // [68]
  { path: "meta.description", max: 215, select: (d) => [d.meta.description] }, // [212]
]

describe("no claim ships without a ledger row", () => {
  it.each(BANNED)("no locale contains $pattern", ({ pattern, why }) => {
    const hits = ALL_STRINGS.filter((s) => pattern.test(s.text)).map((s) => `${s.lang}:${s.path}`)
    expect(hits, `${pattern} — ${why}`).toEqual([])
  })

  it("index.html and llms.txt carry no banned claim either", () => {
    for (const [rel, text] of [
      ["index.html", indexHtml],
      ["public/llms.txt", llmsTxt],
    ] as const) {
      for (const { pattern, why } of BANNED) {
        expect(pattern.test(text), `${rel} contains ${pattern} — ${why}`).toBe(false)
      }
    }
  })

  it("every hero stat is a ledger row, and no stat counts the site's own UI languages", () => {
    for (const [lang, dict] of ENTRIES) {
      expect(dict.hero.stats.length, `${lang}: stat count drifted from en`).toBe(en.hero.stats.length)
      for (const stat of dict.hero.stats) {
        // "7 languages" described this site's own locale count, not the work.
        expect(
          /language|lenguaje|linguagem|linguagen|langage|linguagg|sprache|语言/i.test(stat.label),
          `${lang}: "${stat.value} ${stat.label}" counts the site's own UI languages, not the work`,
        ).toBe(false)
      }
    }
    // The English values are the ones the ledger records verbatim.
    for (const stat of en.hero.stats) {
      expect(ledger, `no ledger row backs the hero stat "${stat.value} ${stat.label}"`).toContain(stat.value)
    }
  })
})

describe("string budgets the layout depends on", () => {
  it.each(BUDGETS)("$path stays within $max characters", ({ path, max, select }) => {
    const over = ENTRIES.flatMap(([lang, dict]) =>
      select(dict)
        .filter((s) => s.length > max)
        .map((s) => `${lang} (${s.length}/${max}): ${s}`),
    )
    expect(over, `${path} over budget`).toEqual([])
  })

  it("every language in the switcher has a dictionary and vice versa", () => {
    expect(LANGUAGES.map((l) => l.code).sort()).toEqual(Object.keys(DICTS).sort())
  })
})
