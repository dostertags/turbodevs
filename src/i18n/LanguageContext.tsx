import { createContext, useContext, useEffect, useMemo, useState } from "react"

import type { Dictionary } from "@/i18n/types"
import { DEFAULT_LANGUAGE, isLanguageCode, type LanguageCode } from "@/i18n/languages"
import { en } from "@/i18n/locales/en"
import { es } from "@/i18n/locales/es"
import { pt } from "@/i18n/locales/pt"
import { fr } from "@/i18n/locales/fr"
import { it } from "@/i18n/locales/it"
import { de } from "@/i18n/locales/de"
import { zh } from "@/i18n/locales/zh"

// Filled in as each translation lands — every entry here must be a full
// Dictionary. Until a locale is added, LanguageSwitcher only offers ones
// present in this map, so a partial/missing translation can never render.
const DICTIONARIES: Partial<Record<LanguageCode, Dictionary>> = {
  en,
  es,
  pt,
  fr,
  it,
  de,
  zh,
}

const STORAGE_KEY = "turbodevs:lang"

function detectInitialLanguage(): LanguageCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isLanguageCode(stored) && DICTIONARIES[stored]) return stored
  } catch {
    // localStorage can throw in locked-down environments — fall through.
  }

  const browserLang = navigator.language?.slice(0, 2).toLowerCase()
  if (browserLang && isLanguageCode(browserLang) && DICTIONARIES[browserLang]) {
    return browserLang
  }

  return DEFAULT_LANGUAGE
}

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (code: LanguageCode) => void
  t: Dictionary
  available: LanguageCode[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE)

  // Runs once on mount, client-side only — avoids a hydration mismatch from
  // reading localStorage/navigator.language during the initial render.
  useEffect(() => {
    setLanguageState(detectInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    const dict = DICTIONARIES[language] ?? en
    document.title = dict.meta.title
  }, [language])

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      // Ignore — persistence is a nicety, not a requirement.
    }
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: DICTIONARIES[language] ?? en,
      available: Object.keys(DICTIONARIES) as LanguageCode[],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider")
  return ctx
}
