import { useEffect, useRef, useState } from "react"
import { Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"
import { LANGUAGES } from "@/i18n/languages"
import { track } from "@/lib/track"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, available, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const options = LANGUAGES.filter((l) => available.includes(l.code))
  const current = options.find((l) => l.code === language) ?? options[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[12px] font-semibold tracking-[0.03em] text-ink transition-colors hover:border-border-strong"
      >
        <Globe aria-hidden="true" className="size-3.5 text-muted" />
        {current?.label}
      </button>

      {open && (
        <div className="absolute top-full right-0 z-50 mt-2 max-h-[70vh] w-40 overflow-y-auto rounded-xl">
          <ul role="listbox" aria-label={t.a11y.selectLanguage} className="rounded-xl border border-border bg-bg py-1.5 shadow-[0_12px_32px_rgba(23,21,15,0.12)]">
            {options.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === language}
                  onClick={() => {
                    track("lang_change", { to: l.code })
                    setLanguage(l.code)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-[13px] transition-colors hover:bg-surface",
                    l.code === language ? "font-semibold text-ink" : "text-ink/80",
                  )}
                >
                  <span>{l.name}</span>
                  <span className="text-[11px] font-semibold text-muted">{l.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
