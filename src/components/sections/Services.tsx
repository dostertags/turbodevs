import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { STAGE_MEDIA } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { useMotionOff } from "@/motion/MotionPreference"

/**
 * The four stages as a large numbered list, after Palantir's "Our Software".
 * Whichever stage sits in the middle of the viewport (or is hovered) is active:
 * its clip plays in a frame that stays in view beside the list on wide screens.
 * Clips are decoration — hidden from assistive technology, loaded only when a
 * stage becomes active, pausable, and replaced by their still frame under
 * reduced motion. On phones each stage shows its still frame inline.
 */
export function Services() {
  const { t } = useI18n()
  const motionOff = useMotionOff()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    )
    rowRefs.current.forEach((row) => row && observer.observe(row))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === active && !motionOff && !paused) {
        if (video.preload === "none") video.preload = "auto"
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [active, motionOff, paused])

  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} titleId="services-title" titleWidth="26ch" />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          {t.services.stages.map((stage, i) => (
            <div
              key={stage.title}
              ref={(el) => {
                rowRefs.current[i] = el
              }}
              data-index={i}
              data-testid="stage"
              data-active={i === active}
              onMouseEnter={() => setActive(i)}
              className="border-t border-border py-9 lg:py-12"
            >
              <div className="flex items-start justify-between gap-6">
                {/*
                  Only the large title dims for inactive stages, and only to
                  --color-border-strong (3.65:1, above the 3:1 large-text
                  minimum). Body text never dims: fading whole rows took it to
                  2:1, which the axe scan rightly failed.
                */}
                <h3
                  className={cn(
                    "font-serif text-[clamp(2.5rem,1.8rem+3vw,4.5rem)] leading-[0.95] font-normal tracking-display transition-colors duration-500",
                    i === active ? "text-ink" : "text-ink lg:text-border-strong",
                  )}
                >
                  {stage.title}
                </h3>
                <p className="pt-2 font-mono text-[13px] text-muted">/{String(i + 1).padStart(2, "0")}</p>
              </div>
              <p className="mt-4 text-[17px] font-medium text-ink">{stage.line}</p>
              <p className="mt-3 max-w-[56ch] text-[15.5px] leading-relaxed text-muted">{stage.body}</p>
              {stage.proof && <p className="mt-4 text-[14px] text-accent">{stage.proof}</p>}
              <img
                src={STAGE_MEDIA[i].poster}
                alt=""
                loading="lazy"
                width={960}
                height={540}
                className="mt-6 aspect-video w-full rounded-xl object-cover lg:hidden"
              />
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div aria-hidden="true" className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
              {STAGE_MEDIA.map((media, i) => (
                <video
                  key={media.key}
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  data-testid="stage-video"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={media.poster}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out [filter:sepia(0.18)_saturate(0.95)]",
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                >
                  <source src={media.video} type="video/mp4" />
                </video>
              ))}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
              <p className="absolute bottom-5 left-6 font-mono text-[13px] text-bg/85">
                /{String(active + 1).padStart(2, "0")} {t.services.stages[active].title}
              </p>
            </div>
            {!motionOff && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? t.a11y.playVideo : t.a11y.pauseVideo}
                className="mt-3 inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-ink hover:text-ink"
              >
                {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
