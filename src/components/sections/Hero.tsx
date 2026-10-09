import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { CLIENT_NAMES, HERO_VIDEO } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"
import { useMotionOff } from "@/motion/MotionPreference"

/**
 * Full-screen footage under the headline, after Palantir's hero. The footage is
 * decoration: it is hidden from assistive technology, never carries text, can
 * be paused (WCAG 2.2.2), and is not played at all for visitors who asked for
 * reduced motion — they get its still frame. The headline is legible on the
 * first paint whether or not the video ever loads.
 */
export function Hero() {
  const { t } = useI18n()
  const motionOff = useMotionOff()
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (motionOff || paused) video.pause()
    else video.play().catch(() => {})
  }, [motionOff, paused])

  return (
    <>
      <section
        id="top"
        ref={sectionRef}
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-bg"
      >
        <motion.div aria-hidden="true" style={motionOff ? undefined : { scale, y }} className="absolute inset-0 -z-10">
          <video
            ref={videoRef}
            data-testid="hero-video"
            muted
            loop
            playsInline
            autoPlay={!motionOff}
            preload="metadata"
            poster={HERO_VIDEO.poster}
            className="h-full w-full object-cover [filter:sepia(0.22)_saturate(0.92)]"
          >
            <source media="(max-width: 767px)" src={HERO_VIDEO.mobile} type="video/mp4" />
            <source src={HERO_VIDEO.desktop} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,21,15,0.94)_0%,rgba(23,21,15,0.62)_45%,rgba(23,21,15,0.3)_100%)]" />
          {/* Keeps the transparent header legible over bright footage. */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
        </motion.div>

        <div className="mx-auto w-full max-w-6xl px-5 pt-36 pb-20 sm:px-8 sm:pb-24">
          <div className="max-w-[820px]">
            <p className="tg-rise text-[13px] font-medium tracking-[0.02em] text-bg/75">{t.hero.eyebrow}</p>
            <h1
              id="hero-title"
              className="tg-rise tg-rise-1 mt-4 font-serif text-display leading-[1.03] font-normal tracking-display text-bg"
            >
              {t.hero.headline}
            </h1>
            <p className="tg-rise tg-rise-2 mt-6 max-w-[60ch] text-lead leading-relaxed text-bg/80">{t.hero.paragraph}</p>
            <div className="tg-rise tg-rise-3 mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="inverse" onClick={() => track("cta_click", { id: "hero_primary" })}>
                {t.hero.ctaPrimary}
              </Button>
              <Button
                href="#work"
                variant="outline-inverse"
                onClick={() => track("cta_click", { id: "hero_secondary" })}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>

        {!motionOff && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? t.a11y.playVideo : t.a11y.pauseVideo}
            className="absolute right-5 bottom-6 inline-flex size-11 items-center justify-center rounded-full border border-bg/35 text-bg/85 transition-colors hover:border-bg hover:text-bg sm:right-8"
          >
            {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          </button>
        )}
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-baseline sm:gap-8 sm:px-8">
        <p className="shrink-0 text-[13px] font-medium text-muted">{t.hero.clientsLabel}</p>
        <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-2" data-testid="client-names">
          {CLIENT_NAMES.map((name) => (
            <li key={name} className="font-serif text-[21px] text-ink/80">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
