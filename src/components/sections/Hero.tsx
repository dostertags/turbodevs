import { lazy, Suspense, useRef, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ArrowDown, Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { softEase } from "@/components/motion/Reveal"
import { SplitText } from "@/components/motion/SplitText"
import { RotatingText } from "@/components/motion/RotatingText"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { DepthLayers } from "@/components/DepthLayers"
import { useI18n } from "@/i18n/LanguageContext"
import { useRotator } from "@/hooks/use-rotator"

// Same lazy-chunk rationale as `Scene.tsx`: this is a second, independent
// react-three-fiber canvas, so it stays out of the main bundle and out of
// the critical rendering path — `DepthLayers` (plain CSS) covers the gap
// as the Suspense fallback until the chunk arrives.
const HeroVisual = lazy(() => import("@/three/HeroVisual").then((m) => ({ default: m.HeroVisual })))

const ROTATE_INTERVAL_MS = 3400

/**
 * Deliberately no background of its own — the fixed WebGL network graph
 * behind the page shows through it. Two-layer parallax on scroll: this text
 * moves and fades faster than the page, while the 3D barely shifts, which is
 * enough for the eye to read real depth.
 */
export function Hero() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  // A manual pause/resume control for the auto-rotating headline (WCAG
  // 2.2.2, Pause/Stop/Hide) — prefers-reduced-motion alone freezes it for
  // OS-level opt-outs, but that's not a substitute for an in-content
  // mechanism a sighted user can reach without changing an OS setting.
  const [isPaused, setIsPaused] = useState(false)
  const rotatorIndex = useRotator(t.hero.headline.rotating.length, ROTATE_INTERVAL_MS, !!reduceMotion || isPaused)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const blur = useTransform(scrollYProgress, [0, 0.7], ["blur(0px)", "blur(10px)"])

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh]">
      <motion.div
        style={{ y, opacity, scale, filter: blur }}
        className="relative mx-auto flex min-h-[calc(100svh_-_64px)] max-w-[980px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: softEase }}
          className="mb-5 text-[11px] font-bold tracking-[0.16em] text-accent uppercase"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1
          // The sole source of this heading's accessible name — everything
          // inside is `aria-hidden` (see below) so a screen reader isn't
          // handed the same 5-item list three times over (once here, once
          // more from SplitText's own aria-label on the lead, once more
          // from RotatingText's own aria-label on the rotating word — each
          // of those is correct in isolation, but this is exactly why the
          // heading, not either child, has to be the one authoritative
          // name). No manual separator between `lead` and the joined
          // `rotating` items — `lead` already carries whatever a natural
          // continuation needs (a trailing space for a space-delimited
          // language, nothing for Chinese).
          aria-label={`${t.hero.headline.lead}${t.hero.headline.rotating.join(" · ")}`}
          className="max-w-[25ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.01em] text-ink sm:max-w-[30ch] sm:text-[46px] md:text-[58px]"
        >
          <span aria-hidden="true">
            <SplitText key={t.hero.headline.lead} as="span" text={t.hero.headline.lead} stagger={0.045} delay={0.15} />
            <RotatingText items={t.hero.headline.rotating} index={rotatorIndex} reduceMotion={!!reduceMotion} />
          </span>
          {!reduceMotion && (
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? t.hero.resumeRotation : t.hero.pauseRotation}
              aria-pressed={isPaused}
              className="tg-glass ml-2 inline-flex size-7 -translate-y-1 items-center justify-center rounded-full align-middle text-ink/70 transition-colors hover:text-ink"
            >
              {isPaused ? (
                <Play aria-hidden="true" className="size-3.5" />
              ) : (
                <Pause aria-hidden="true" className="size-3.5" />
              )}
            </button>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.55, ease: softEase }}
          className="mx-auto mt-7 max-w-[58ch] text-[16px] leading-relaxed text-muted sm:text-[18px]"
        >
          {t.hero.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: softEase }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Button href="#work" variant="primary">
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#contact" variant="secondary">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: softEase }}
          className="mt-10"
        >
          <ProofStrip />
        </motion.div>
      </motion.div>

      {/*
        A plain wrapper carries the placement (absolute/top/right). DepthLayers'
        own root already sets `position: relative` as plain CSS (so its four
        layers can position themselves against it) — that's unlayered CSS, and
        unlayered always beats a Tailwind utility class on the same element
        regardless of order, so `absolute` belongs on a wrapper, not passed
        into DepthLayers' own className. HeroVisual carries its own size
        (independent of DepthLayers' fixed 160px) since only one of the two
        is ever on screen at a time.

        Shown from `xl:` rather than the old accent's `sm:` — the rotating
        headline is taller and wider than the static one it replaced (a lead
        line plus a rotating one, both longer than the original), so its
        widest centered line still reaches into this corner up through the
        `lg` breakpoint, where the 980px column is nearly edge-to-edge.
        `xl:` (1280px) is where the viewport is finally wider than the
        column by enough to give this corner real clearance.
      */}
      <div className="pointer-events-none absolute top-24 right-6 hidden xl:block xl:top-28 xl:right-12">
        <Suspense fallback={<DepthLayers />}>
          <HeroVisual index={rotatorIndex} reducedMotion={!!reduceMotion} className="size-[168px] xl:size-[208px]" />
        </Suspense>
      </div>

      <motion.a
        href="#work"
        aria-label={t.hero.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/45 transition-colors hover:text-ink"
      >
        <motion.span
          className="block"
          animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
