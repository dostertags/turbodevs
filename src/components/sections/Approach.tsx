import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { useI18n } from "@/i18n/LanguageContext"

export function Approach() {
  const { t } = useI18n()

  return (
    <Section id="approach" labelledBy="approach-title">
      {/* The shimmer sweep is gone: an 8s infinite gradient animation on one
          heading, running forever whether or not anyone is looking at it, and
          the only element on the page treated that way. */}
      <SectionHeader
        eyebrow={t.approach.eyebrow}
        title={t.approach.title}
        titleId="approach-title"
        paragraph={t.approach.paragraph}
        titleWidth="20ch"
      />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
        {t.approach.pillars.map((pillar, i) => (
          <RevealItem key={pillar.title} className="rounded-2xl border border-border bg-surface p-7">
            <span className="tabular-nums text-[12px] font-bold tracking-[0.06em] text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-[17px] font-semibold text-ink">{pillar.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{pillar.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
