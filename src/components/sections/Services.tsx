import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { useI18n } from "@/i18n/LanguageContext"

/** The four stages of an engagement, numbered, in order. */
export function Services() {
  const { t } = useI18n()

  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} titleId="services-title" titleWidth="26ch" />

      <RevealGroup className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.stages.map((stage, i) => (
          <RevealItem key={stage.title} data-testid="stage" className="flex flex-col border-t border-ink pt-5">
            <p className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-serif text-[28px] leading-tight font-normal text-ink">{stage.title}</h3>
            <p className="mt-2 text-[15px] font-medium text-ink">{stage.line}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{stage.body}</p>
            {stage.proof && <p className="mt-5 text-[13.5px] leading-snug text-accent">{stage.proof}</p>}
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
