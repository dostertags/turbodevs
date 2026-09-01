import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { SERVICES } from "@/content/site"

export function Services() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">What we build</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[24ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          Four disciplines, one engineering standard.
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {SERVICES.map((s) => (
          <RevealItem key={s.title} className="bg-surface p-7 sm:p-9">
            <h3 className="text-[18px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
