import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { useI18n } from "@/i18n/LanguageContext"

export function Services() {
  const { t } = useI18n()

  return (
    // Given an id and a heading id at last: this section was reachable from
    // neither the header nor the footer, and had no accessible name.
    <Section id="services" labelledBy="services-title">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        titleId="services-title"
        titleWidth="24ch"
      />

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {t.services.items.map((s) => (
          <RevealItem key={s.title} className="bg-surface p-7 sm:p-9">
            <h3 className="text-[18px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
