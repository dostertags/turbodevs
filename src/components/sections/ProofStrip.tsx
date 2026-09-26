import { useId } from "react"
import { Landmark, Link2, Zap, AppWindow, Store, Users, Gavel, Target, ArrowDownRight } from "lucide-react"

import { Badge } from "@/components/ui/Badge"
import { useI18n } from "@/i18n/LanguageContext"
import { SERVICE_LINES, type SectorKey, type ServiceLineKey } from "@/content/site"
import { track } from "@/lib/track"

const SECTOR_ORDER: SectorKey[] = ["government", "web3", "energy", "consumerSaas", "hospitality"]

const SECTOR_ICONS: Record<SectorKey, typeof Landmark> = {
  government: Landmark,
  web3: Link2,
  energy: Zap,
  consumerSaas: AppWindow,
  hospitality: Store,
}

const SERVICE_ICONS: Record<ServiceLineKey, typeof Landmark> = {
  hrOutplacement: Users,
  procurement: Gavel,
  leadGen: Target,
}

/**
 * Thin accent strip below the hero's CTAs — sector chips, the business-line
 * links, and a compact stats line. Deliberately calm and small: no heading,
 * no cards, nothing that competes with the hero itself.
 *
 * The sector chips are static labels; the business-line row is the only part
 * that navigates, so it is drawn as outlined pills with an arrow rather than
 * as more chips — a visitor must be able to tell which pills do something.
 */
export function ProofStrip() {
  const { t } = useI18n()
  const linesLabelId = useId()

  return (
    <div className="mx-auto flex max-w-[840px] flex-col items-center gap-4 px-5 pb-4 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {SECTOR_ORDER.map((key) => {
          const Icon = SECTOR_ICONS[key]
          return (
            <Badge key={key} data-testid="sector-chip" className="gap-1.5 py-1.5">
              <Icon aria-hidden="true" className="size-3.5" />
              {t.hero.sectors[key]}
            </Badge>
          )
        })}
      </div>

      <div
        role="group"
        aria-labelledby={linesLabelId}
        className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2"
      >
        <span id={linesLabelId} className="w-full text-[11px] font-bold tracking-[0.14em] text-muted uppercase">
          {t.hero.serviceLinesLabel}
        </span>
        {SERVICE_LINES.map(({ key, anchor }) => {
          const Icon = SERVICE_ICONS[key]
          return (
            <a
              key={key}
              href={`#${anchor}`}
              data-testid="service-link"
              onClick={() => track("cta_click", { id: `hero_line_${key}` })}
              // 40px tall on touch: these navigate, so they get a real target
              // size (WCAG 2.5.8), unlike the purely descriptive chips above.
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-accent-dim bg-surface px-3.5 py-2 text-[12.5px] font-semibold text-ink transition-colors hover:border-accent hover:bg-surface-2 focus-visible:border-accent"
            >
              <Icon aria-hidden="true" className="size-3.5 text-accent" />
              {t.services.lines[key].title}
              <ArrowDownRight aria-hidden="true" className="size-3.5 text-muted" />
            </a>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px]">
        {t.hero.stats.map((stat, index) => (
          <span key={stat.label} className="flex items-center gap-x-2">
            {index > 0 && <span className="text-muted" aria-hidden="true">·</span>}
            <span className="flex items-baseline gap-1.5">
              <span className="tabular-nums font-bold text-accent">{stat.value}</span>
              <span className="text-muted">{stat.label}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
