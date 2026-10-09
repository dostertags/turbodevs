import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { INDUSTRIES, INDUSTRY_PHOTO } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { useMotionOff } from "@/motion/MotionPreference"

/**
 * The industries we have shipped into, under a wide stock photograph that
 * drifts slower than the page (parallax). The photo is credited and is never
 * presented as a client's site.
 */
export function Industries() {
  const { t } = useI18n()
  const motionOff = useMotionOff()
  const bandRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <Section id="industries" labelledBy="industries-title">
      <SectionHeader eyebrow={t.industries.eyebrow} title={t.industries.title} titleId="industries-title" />

      <figure className="mt-12">
        <div ref={bandRef} className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[21/8]">
          <motion.picture style={motionOff ? undefined : { y }} className="absolute inset-[-10%_0] block">
            <source media="(min-width: 700px)" srcSet={INDUSTRY_PHOTO.src1600} />
            <img
              src={INDUSTRY_PHOTO.src1000}
              alt={t.industries.photoAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover [filter:grayscale(0.35)_sepia(0.18)_contrast(1.02)]"
            />
          </motion.picture>
        </div>
        <figcaption className="mt-2 text-[12px] text-muted">
          {t.footer.photoLabel}:{" "}
          <a href={INDUSTRY_PHOTO.creditHref} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
            {INDUSTRY_PHOTO.credit} / Unsplash
            <span className="sr-only"> ({t.a11y.newTab})</span>
          </a>
        </figcaption>
      </figure>

      <RevealGroup className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((key) => (
          <RevealItem key={key} data-testid="industry" className="border-t border-border py-7">
            <h3 className="font-serif text-[24px] font-normal text-ink">{t.industries.items[key].name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.industries.items[key].body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
