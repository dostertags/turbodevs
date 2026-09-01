import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { softEase } from "@/components/motion/Reveal"
import { SplitText } from "@/components/motion/SplitText"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { DepthLayers } from "@/components/DepthLayers"
import { useI18n } from "@/i18n/LanguageContext"

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
          className="mb-5 font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase"
        >
          {t.hero.eyebrow}
        </motion.p>

        <SplitText
          key={t.hero.headline}
          as="h1"
          text={t.hero.headline}
          className="max-w-[20ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.01em] text-ink sm:text-[46px] md:text-[58px]"
          stagger={0.045}
          delay={0.15}
        />

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
        into DepthLayers' own className.
      */}
      <div className="pointer-events-none absolute top-24 right-6 hidden sm:block md:top-28 md:right-12">
        <DepthLayers />
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
