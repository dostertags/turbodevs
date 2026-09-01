import { Landmark, Link2, Zap, AppWindow, Store } from "lucide-react"

import { Badge } from "@/components/ui/Badge"
import { useI18n } from "@/i18n/LanguageContext"
import type { SectorKey } from "@/content/site"

const SECTOR_ORDER: SectorKey[] = ["government", "web3", "energy", "consumerSaas", "hospitality"]

const SECTOR_ICONS: Record<SectorKey, typeof Landmark> = {
  government: Landmark,
  web3: Link2,
  energy: Zap,
  consumerSaas: AppWindow,
  hospitality: Store,
}

/**
 * Thin accent strip below the hero's CTAs — sector chips plus a compact
 * stats line. Deliberately calm and small: no heading, no cards, nothing
 * that competes with the hero itself.
 */
export function ProofStrip() {
  const { t } = useI18n()

  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 px-5 pb-4 text-center">
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

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px]">
        {t.hero.stats.map((stat, index) => (
          <span key={stat.label} className="flex items-center gap-x-2">
            {index > 0 && <span className="text-muted" aria-hidden="true">·</span>}
            <span className="flex items-baseline gap-1.5">
              <span className="font-mono tabular-nums font-semibold text-accent">{stat.value}</span>
              <span className="text-muted">{stat.label}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
