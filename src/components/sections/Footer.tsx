import { GitFork } from "lucide-react"

import { WebVitals } from "@/components/WebVitals"
import { FOOTER, NAV } from "@/content/site"

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="border-t border-border pt-8">
        <WebVitals />

        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-[12px] tracking-[0.02em] text-muted">{FOOTER.line}</p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FOOTER.repoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase transition-colors hover:text-ink"
              >
                <GitFork aria-hidden="true" className="size-3.5" />
                Source
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
