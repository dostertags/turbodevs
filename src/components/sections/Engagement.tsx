import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"
import { ENGAGEMENTS } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

export function Engagement() {
  const { t } = useI18n()

  return (
    <Section id="engagement" labelledBy="engagement-title">
      <SectionHeader eyebrow={t.engagement.eyebrow} title={t.engagement.title} titleId="engagement-title" titleWidth="24ch" />

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ENGAGEMENTS.map((key, i) => (
          <RevealItem
            key={key}
            data-testid="engagement"
            className="flex flex-col rounded-2xl bg-surface p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="font-mono text-[12px] text-muted">/{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-5 font-serif text-[26px] leading-tight font-normal text-ink">{t.engagement.items[key].name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.engagement.items[key].body}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-10">
        <Button href="#contact" onClick={() => track("cta_click", { id: "engagement_cta" })}>
          {t.engagement.cta}
        </Button>
      </div>
    </Section>
  )
}
