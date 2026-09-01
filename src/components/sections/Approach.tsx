import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { APPROACH } from "@/content/site"

export function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
          {APPROACH.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[20ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[36px]">
          <span className="tg-shimmer">{APPROACH.title}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">{APPROACH.paragraph}</p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
        {APPROACH.pillars.map((pillar, i) => (
          <RevealItem key={pillar.title} className="rounded-2xl border border-border bg-surface p-7">
            <span className="font-mono text-[12px] tracking-[0.06em] text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-[17px] font-semibold text-ink">{pillar.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{pillar.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
