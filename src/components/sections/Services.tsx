import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useI18n } from "@/i18n/LanguageContext"

export function Services() {
  const { t } = useI18n()

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
          {t.services.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[24ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          {t.services.title}
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {t.services.items.map((s) => (
          <RevealItem key={s.title} className="bg-surface p-7 sm:p-9">
            <h3 className="text-[18px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
