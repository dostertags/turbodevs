/**
 * The hero's one illustration: a single day in 15-minute steps. Every step
 * has the same dark base — the operation never stops, at 03:00 or at noon —
 * and a lighter band rises over it through the daylight hours. It is a motif,
 * not a chart: there is no data behind it and it makes no claim, so it is
 * hidden from assistive technology.
 */
const STEPS = 96
const WIDTH = 960
const BASE = 22
const PEAK = 62

function daylight(step: number) {
  const hour = (step + 0.5) / 4
  if (hour < 6.5 || hour > 19.5) return 0
  return Math.sin(((hour - 6.5) / 13) * Math.PI) ** 1.4
}

export function DayStrip() {
  const pitch = WIDTH / STEPS
  const bar = pitch * 0.42

  return (
    <div aria-hidden="true" className="select-none">
      <svg viewBox={`0 0 ${WIDTH} 100`} className="h-auto w-full" preserveAspectRatio="none">
        {Array.from({ length: STEPS }, (_, i) => {
          const x = i * pitch + (pitch - bar) / 2
          const sun = daylight(i) * PEAK
          return (
            <g key={i}>
              {sun > 0.5 && <rect x={x} y={100 - BASE - sun} width={bar} height={sun} fill="#8a5a14" opacity={0.28} />}
              <rect x={x} y={100 - BASE} width={bar} height={BASE} fill="#17150f" opacity={0.86} />
            </g>
          )
        })}
      </svg>
      <div className="mt-2 flex justify-between font-mono text-[11px] text-muted">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  )
}
