import { useEffect, useRef } from "react"
import { animate, useInView } from "motion/react"

import { STATS } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { useMotionOff } from "@/motion/MotionPreference"

/**
 * Counts a figure up from zero the first time it scrolls into view. The final
 * value is what the markup holds, so without JavaScript, under reduced motion,
 * or for a value that is not a plain number ("24/7"), it simply shows.
 */
function Figure({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const motionOff = useMotionOff()

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([\d,]+)(.*)$/)
    if (!el || !inView || motionOff || !match) return
    const target = Number(match[1].replace(/,/g, ""))
    const suffix = match[2]
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-US") + suffix
      },
    })
    return () => controls.stop()
  }, [inView, motionOff, value])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}

export function Stats() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="stats-title" className="bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 id="stats-title" className="text-[13px] font-medium tracking-[0.02em] text-bg/70">
          {t.stats.eyebrow}
        </h2>
        <dl className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ key, value }) => (
            <div key={key} data-testid="stat" className="border-t border-bg/20 pt-5">
              <dt className="sr-only">{t.stats.items[key]}</dt>
              <dd className="font-serif text-[clamp(2.75rem,2rem+3vw,4.5rem)] leading-none text-accent-light">
                <Figure value={value} />
              </dd>
              <dd aria-hidden="true" className="mt-4 max-w-[26ch] text-[15px] leading-snug text-bg/80">
                {t.stats.items[key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
