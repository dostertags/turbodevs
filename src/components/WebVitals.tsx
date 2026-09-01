import { useEffect, useState } from "react"
import { onLCP, onINP, onCLS } from "web-vitals"
import { Gauge, MousePointerClick, Move } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"

type MetricName = "lcp" | "inp" | "cls"
type Rating = "good" | "needs-improvement" | "poor"

type MetricState = {
  value: number
  rating: Rating
}

type MetricsState = Partial<Record<MetricName, MetricState>>

const ICONS = { lcp: Gauge, inp: MousePointerClick, cls: Move } as const

function formatValue(name: MetricName, value: number): string {
  if (name === "cls") return value.toFixed(2)
  // Raw milliseconds read as noise past four digits — a person parses
  // "1.9s" in a glance, "1856ms" only after doing the division themselves.
  return value >= 1000 ? `${(value / 1000).toFixed(2)}s` : `${Math.round(value)}ms`
}

function StatCell({ name, metric }: { name: MetricName; metric?: MetricState }) {
  const { t } = useI18n()
  const copy = t.webVitals.metrics[name]
  const Icon = ICONS[name]
  const measured = metric !== undefined
  const isGood = metric?.rating === "good"

  // INP has no value until the visitor performs a real interaction — that's
  // not a stall, it's the metric's own definition, so it gets its own
  // wording instead of an indefinite-looking ellipsis.
  const pendingLabel = name === "inp" ? t.webVitals.waitingForInteraction : t.webVitals.waitingForPaint

  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-surface-2 px-4 py-4">
      <div className="flex items-center gap-2">
        <Icon aria-hidden="true" className="size-3.5 shrink-0 text-accent" />
        <span className="text-[10.5px] font-bold tracking-[0.08em] text-ink uppercase">
          {copy.label}
        </span>
      </div>

      <span className="tabular-nums text-[22px] font-bold tracking-[-0.01em] text-ink">
        {measured ? formatValue(name, metric.value) : "—"}
      </span>

      <span
        className={cn(
          "text-[11px] tracking-[0.02em]",
          measured ? (isGood ? "text-accent" : "text-[#e08a45]") : "text-muted italic",
        )}
      >
        {measured ? (isGood ? t.webVitals.good : t.webVitals.needsAttention) : pendingLabel}
      </span>

      <p className="text-[12px] leading-snug text-muted">{copy.description}</p>
    </div>
  )
}

export function WebVitals() {
  const { t } = useI18n()
  const [metrics, setMetrics] = useState<MetricsState>({})

  useEffect(() => {
    // reportAllChanges means each metric updates as soon as it has any real
    // value instead of only once, at page-hide — without it, CLS in
    // particular can sit unresolved for the entire visit.
    onLCP((metric) => setMetrics((prev) => ({ ...prev, lcp: { value: metric.value, rating: metric.rating } })), {
      reportAllChanges: true,
    })
    onINP((metric) => setMetrics((prev) => ({ ...prev, inp: { value: metric.value, rating: metric.rating } })), {
      reportAllChanges: true,
    })
    onCLS((metric) => setMetrics((prev) => ({ ...prev, cls: { value: metric.value, rating: metric.rating } })), {
      reportAllChanges: true,
    })
  }, [])

  return (
    <div className="tg-glass rounded-2xl p-6">
      <p className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
        {t.webVitals.eyebrow}
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCell name="lcp" metric={metrics.lcp} />
        <StatCell name="inp" metric={metrics.inp} />
        <StatCell name="cls" metric={metrics.cls} />
      </div>
      <p className="mt-4 text-[12px] leading-relaxed text-muted">{t.webVitals.caption}</p>
    </div>
  )
}
