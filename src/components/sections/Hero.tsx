import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ArrowDown, Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { softEase } from "@/components/motion/Reveal"
import { SplitText } from "@/components/motion/SplitText"
import { RotatingText } from "@/components/motion/RotatingText"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"
import { useRotator } from "@/hooks/use-rotator"

const ROTATE_INTERVAL_MS = 3400

/**
 * Deliberately no background of its own — the fixed WebGL network graph
 * behind the page shows through it.
 *
 * Scroll behaviour, deliberately asymmetric: the whole block still drifts and
 * shrinks a little (a transform, which costs nothing and reads as depth), but
 * only the eyebrow and the headline fade. The paragraph, the two CTAs and the
 * proof strip never fade and are never blurred, because on a phone this
 * section is ~990px tall inside an ~844px viewport: the visitor has to scroll
 * to reach the CTAs, and the previous version tied opacity (1 → 0 by 60% of
 * the section's own scroll progress) and a 10px blur to exactly that scroll,
 * so the buttons dimmed and went out of focus *while being reached for*, and
 * the CTA label dropped to ~3:1 contrast on the way. Fading a control as the
 * user approaches it is the one thing a hero must not do.
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  // Starts at 0.5, not 0: by the time this begins the headline has already
  // scrolled well past the top of the viewport, so nothing legible dims while
  // it is still being read.
  const headlineOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh]">
      <motion.div
        style={{ y, scale }}
        className="relative mx-auto flex min-h-[calc(100svh_-_64px)] max-w-[980px] flex-col items-center justify-center px-5 pt-20 pb-28 text-center sm:px-8 sm:pb-20"
      >
        <motion.div style={{ opacity: headlineOpacity }} className="flex flex-col items-center">
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
          </h1>

          {/*
            The pause control lives *after* the heading, not inside it. Inside
            an <h1> it was a 28px target floating in the middle of the display
            type — on a phone it landed on its own line under a two-line
            rotating phrase, reading as a rendering fault rather than a
            control, and it put an interactive element inside a heading's
            content. Here it is a normal 44px control with a stable label.
          */}
          {!reduceMotion && t.hero.headline.rotating.length > 1 && (
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? t.hero.resumeRotation : t.hero.pauseRotation}
              aria-pressed={isPaused}
              // A 44px hit area (WCAG 2.5.8) wrapped around a small, quiet
              // glyph: it is a utility for the animation above it, not a
              // third call to action competing with the two real ones below.
              className="mt-2 inline-flex size-11 items-center justify-center rounded-full border border-transparent text-muted transition-colors hover:border-border hover:text-ink focus-visible:border-border"
            >
              {isPaused ? (
                <Play aria-hidden="true" className="size-4" />
              ) : (
                <Pause aria-hidden="true" className="size-4" />
              )}
            </button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
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
          <Button href="#work" variant="primary" onClick={() => track("cta_click", { id: "hero_primary" })}>
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#contact" variant="secondary" onClick={() => track("cta_click", { id: "hero_secondary" })}>
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

      <motion.a
        href="#work"
        aria-label={t.hero.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink/45 transition-colors hover:text-ink sm:block"
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
