import { ArrowRight, Gavel, Target, Users } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { SERVICE_LINES, type ServiceLineKey } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

const LINE_ICONS: Record<ServiceLineKey, typeof Users> = {
  hrOutplacement: Users,
  procurement: Gavel,
  leadGen: Target,
}

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

      {/* The hero's business-line pills land here, one anchor per card. */}
      <h3 className="mt-16 text-[11px] font-bold tracking-[0.16em] text-accent uppercase">{t.services.linesTitle}</h3>
      <RevealGroup className="mt-5 grid gap-4 md:grid-cols-3">
        {SERVICE_LINES.map(({ key, anchor }) => {
          const line = t.services.lines[key]
          const Icon = LINE_ICONS[key]
          return (
            <RevealItem
              key={key}
              id={anchor}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <Icon aria-hidden="true" className="size-5 text-accent" />
              <h4 className="mt-4 text-[17px] font-semibold text-ink">{line.title}</h4>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{line.description}</p>
              <a
                href="#contact"
                onClick={() => track("cta_click", { id: `service_line_${key}` })}
                className="mt-6 inline-flex min-h-10 items-center gap-1.5 self-start text-[13.5px] font-semibold text-ink transition-colors hover:text-accent"
              >
                {line.cta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
