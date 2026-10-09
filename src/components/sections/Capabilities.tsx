import { Bot, Cloud, Code2, Database, Gauge, Plug, ShieldCheck, Workflow } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CAPABILITIES, type CapabilityKey } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

const ICONS: Record<CapabilityKey, typeof Bot> = {
  automation: Workflow,
  software: Code2,
  ai: Bot,
  data: Database,
  integration: Plug,
  cloud: Cloud,
  monitoring: Gauge,
  security: ShieldCheck,
}

export function Capabilities() {
  const { t } = useI18n()

  return (
    <Section id="capabilities" labelledBy="capabilities-title">
      <SectionHeader
        eyebrow={t.capabilities.eyebrow}
        title={t.capabilities.title}
        titleId="capabilities-title"
        paragraph={t.capabilities.paragraph}
      />

      <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((key, i) => {
          const Icon = ICONS[key]
          const item = t.capabilities.items[key]
          return (
            <RevealItem
              key={key}
              data-testid="capability"
              className="group flex flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <Icon
                  aria-hidden="true"
                  className="size-5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="font-mono text-[12px] text-muted">/{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-serif text-[22px] leading-snug font-normal text-ink">{item.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
