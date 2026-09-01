export type LanguageCode = "en" | "es" | "pt" | "fr" | "it" | "de" | "zh"

export const LANGUAGES: { code: LanguageCode; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "zh", label: "ZH", name: "中文" },
]

export const DEFAULT_LANGUAGE: LanguageCode = "en"

export function isLanguageCode(value: string): value is LanguageCode {
  return LANGUAGES.some((l) => l.code === value)
}
