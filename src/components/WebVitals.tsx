import { useEffect, useState } from "react"
import { onLCP, onINP, onCLS } from "web-vitals"
import { cn } from "@/lib/utils"

type MetricName = "LCP" | "INP" | "CLS"
type Rating = "good" | "needs-improvement" | "poor"

interface MetricState {
  value: number
  rating: Rating
}

type MetricsState = Partial<Record<MetricName, MetricState>>

function formatValue(name: MetricName, value: number): string {
  if (name === "CLS") return value.toFixed(2)
  return `${value.toFixed(1)}ms`
}

function StatCell({ label, metric }: { label: MetricName; metric?: MetricState }) {
  const measured = metric !== undefined
  const isGood = metric?.rating === "good"

  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface/60 px-3 py-3">
      <div className="flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 shrink-0 rounded-full", isGood ? "bg-accent" : "bg-muted")}
        />
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-muted uppercase">
          {label}
        </span>
      </div>
      <span className="font-mono text-[18px] font-semibold tracking-[-0.01em] text-ink">
        {measured ? formatValue(label, metric.value) : "measuring…"}
      </span>
      <span className="font-mono text-[10px] tracking-[0.04em] text-muted">
        {measured ? (isGood ? "good" : "needs attention") : " "}
      </span>
    </div>
  )
}

export function WebVitals() {
  const [metrics, setMetrics] = useState<MetricsState>({})

  useEffect(() => {
    onLCP((metric) => {
      setMetrics((prev) => ({ ...prev, LCP: { value: metric.value, rating: metric.rating } }))
    })
    onINP((metric) => {
      setMetrics((prev) => ({ ...prev, INP: { value: metric.value, rating: metric.rating } }))
    })
    onCLS((metric) => {
      setMetrics((prev) => ({ ...prev, CLS: { value: metric.value, rating: metric.rating } }))
    })
  }, [])

  return (
    <div className="tg-glass rounded-2xl p-6">
      <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
        Performance
      </p>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <StatCell label="LCP" metric={metrics.LCP} />
        <StatCell label="INP" metric={metrics.INP} />
        <StatCell label="CLS" metric={metrics.CLS} />
      </div>
      <p className="mt-4 text-[12px] text-muted">
        Measured live, in your browser, right now — not a claimed score.
      </p>
    </div>
  )
}
