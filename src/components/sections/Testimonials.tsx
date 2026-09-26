import { Reveal } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { TESTIMONIALS } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

// Folded top-right corner, after Palantir's partner cards.
const CARD_SHAPE = "[clip-path:polygon(0_0,calc(100%_-_32px)_0,100%_32px,100%_100%,0_100%)]"

/**
 * Client statements, as the clients gave them. No logos: none has been
 * supplied with permission to use, so each company is set as a wordmark.
 * Every name here needs a row in research/VERIFIED_FACTS.md (tested).
 */
export function Testimonials() {
  const { t } = useI18n()

  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <SectionHeader
        eyebrow={t.testimonials.eyebrow}
        title={t.testimonials.title}
        titleId="testimonials-title"
        titleWidth="24ch"
      />

      <Reveal delay={0.1} className="mt-12">
        {/*
          A swipeable row on phones, three columns from 768px. The scroller is
          focusable and named because its cards hold nothing focusable — without
          that, a keyboard user could not scroll to the second and third card.
        */}
        <div
          role="group"
          aria-labelledby="testimonials-title"
          tabIndex={0}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:thin] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {TESTIMONIALS.map(({ key, company }) => {
            const item = t.testimonials.items[key]
            return (
              <figure
                key={key}
                data-testid="testimonial-card"
                className={`flex min-h-[300px] w-[84%] shrink-0 snap-start flex-col bg-surface-2 p-7 sm:w-[60%] md:min-h-[340px] md:w-auto ${CARD_SHAPE}`}
              >
                <figcaption>
                  <p className="pr-8 text-[15px] font-semibold tracking-[0.08em] text-ink uppercase">{company}</p>
                  <p className="mt-2 text-[12px] font-semibold text-accent">{item.project}</p>
                </figcaption>
                <blockquote className="mt-auto pt-10">
                  <span aria-hidden="true" className="block text-[40px] leading-none font-bold text-accent-dim">
                    “
                  </span>
                  <p className="mt-1 text-[16.5px] leading-relaxed text-ink/90">{item.quote}</p>
                </blockquote>
              </figure>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
