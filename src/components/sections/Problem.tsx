import { Reveal } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { useI18n } from "@/i18n/LanguageContext"

export function Problem() {
  const { t } = useI18n()

  return (
    <Section id="problem" labelledBy="problem-title">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <p className="text-[13px] font-medium text-muted">{t.problem.eyebrow}</p>
          <h2 id="problem-title" className="mt-3 font-serif text-h2 leading-[1.12] font-normal tracking-h2 text-ink">
            {t.problem.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lead leading-relaxed text-muted lg:pt-9">{t.problem.body}</p>
        </Reveal>
      </div>
    </Section>
  )
}
