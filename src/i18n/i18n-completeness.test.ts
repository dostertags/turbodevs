import { describe, expect, it } from "vitest"

import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it as itLocale } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"
import { LANGUAGES } from "@/i18n/languages"
import type { Dictionary } from "@/i18n/types"

const LOCALES: Record<string, Dictionary> = { en, es, pt, fr, it: itLocale, de, zh }

/**
 * Collects every leaf key-path in an object, e.g. {a: {b: 1}} -> ["a.b"].
 * Arrays are walked by index so a locale can't silently ship a
 * three-paragraph translation of a seven-paragraph article.
 */
function leafPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => leafPaths(item, `${prefix}[${i}]`))
  }
  if (value !== null && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      leafPaths(v, prefix ? `${prefix}.${k}` : k),
    )
  }
  return [prefix]
}

describe("i18n completeness", () => {
  // This exact bug shipped once already: the Web Vitals widget had no i18n
  // keys at all and silently rendered English on every translated page.
  // This test exists so that class of bug fails CI instead of a screenshot.
  const enPaths = new Set(leafPaths(en))

  it("declares every language actually has a dictionary", () => {
    for (const lang of LANGUAGES) {
      expect(LOCALES, `no dictionary loaded for declared language "${lang.code}"`).toHaveProperty(lang.code)
    }
  })

  for (const [code, dict] of Object.entries(LOCALES)) {
    if (code === "en") continue

    it(`${code} has exactly the same key shape as en`, () => {
      const paths = new Set(leafPaths(dict))
      const missing = [...enPaths].filter((p) => !paths.has(p))
      const extra = [...paths].filter((p) => !enPaths.has(p))
      expect(missing, `${code} is missing keys present in en`).toEqual([])
      expect(extra, `${code} has keys not present in en`).toEqual([])
    })

    it(`${code} has no empty-string values`, () => {
      const empties = leafPaths(dict).filter((path) => {
        const value = path
          .replace(/\[(\d+)\]/g, ".$1")
          .split(".")
          .reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], dict)
        return typeof value === "string" && value.trim() === ""
      })
      expect(empties, `${code} has empty translated strings`).toEqual([])
    })
  }
})
