import { Button } from "@/components/ui/Button"
import { DayStrip } from "@/components/DayStrip"
import { CLIENT_NAMES } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

/**
 * Static by design: no rotating words, no entrance choreography. The first
 * screen is fully painted in the markup the browser receives, so it is the
 * same on a slow phone as on a fast laptop.
 */
export function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
      <div className="max-w-[780px]">
        <p className="text-[13px] font-medium text-muted">{t.hero.eyebrow}</p>
        <h1
          id="hero-title"
          className="mt-4 font-serif text-display leading-[1.04] font-normal tracking-display text-ink"
        >
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-[60ch] text-lead leading-relaxed text-muted">{t.hero.paragraph}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button href="#contact" onClick={() => track("cta_click", { id: "hero_primary" })}>
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#work" variant="secondary" onClick={() => track("cta_click", { id: "hero_secondary" })}>
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <DayStrip />
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-8">
        <p className="shrink-0 text-[13px] font-medium text-muted">{t.hero.clientsLabel}</p>
        <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-2" data-testid="client-names">
          {CLIENT_NAMES.map((name) => (
            <li key={name} className="font-serif text-[21px] text-ink/80">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
