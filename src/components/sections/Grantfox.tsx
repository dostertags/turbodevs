import { ArrowUpRight, Check } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"
import { GRANTFOX_HREF } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

export function Grantfox() {
  const { t } = useI18n()

  return (
    <Section id="grantfox" labelledBy="grantfox-title">
      {/* Opaque, not glass: this panel sits over the animated background, so
          its backdrop-filter was re-running on every frame for an effect that
          is indistinguishable from a plain surface. */}
      <div className="rounded-3xl border border-border bg-surface p-7 sm:p-12">
        <SectionHeader
          eyebrow={t.grantfox.eyebrow}
          title={t.grantfox.title}
          titleId="grantfox-title"
          paragraph={t.grantfox.paragraph}
          size="minor"
          titleWidth="32ch"
        />

        <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-3">
          {t.grantfox.points.map((point) => (
            <RevealItem key={point} className="flex gap-3 rounded-xl border border-border bg-surface p-5">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <p className="text-[13.5px] leading-relaxed text-muted">{point}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-9">
          <Button
            href={GRANTFOX_HREF}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            onClick={() => track("grantfox_exit")}
          >
            {t.grantfox.cta}
            <span className="sr-only"> ({t.a11y.newTab})</span>
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
