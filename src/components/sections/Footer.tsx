import { GitFork } from "lucide-react"

import { WebVitals } from "@/components/WebVitals"
import { FOOTER_INFO } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

const NAV_ITEMS = [
  { key: "work", href: "#work" },
  { key: "grantfox", href: "#grantfox" },
  { key: "approach", href: "#approach" },
  { key: "notes", href: "#notes" },
  { key: "contact", href: "#contact" },
] as const

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="border-t border-border pt-8">
        <WebVitals />

        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[12px] font-medium tracking-[0.02em] text-muted">© {new Date().getFullYear()} TurboDevs.</p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[11px] font-semibold tracking-[0.06em] text-muted uppercase transition-colors hover:text-ink"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FOOTER_INFO.repoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] text-muted uppercase transition-colors hover:text-ink"
              >
                <GitFork aria-hidden="true" className="size-3.5" />
                {t.footer.sourceLabel}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
