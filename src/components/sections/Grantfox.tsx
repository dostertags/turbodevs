import { ArrowUpRight, Check } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Button } from "@/components/ui/Button"
import { GRANTFOX } from "@/content/site"

export function Grantfox() {
  return (
    <section id="grantfox" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="tg-glass rounded-3xl p-7 sm:p-12">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            {GRANTFOX.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-[32ch] text-[26px] leading-[1.25] font-semibold tracking-[-0.01em] text-ink sm:text-[34px]">
            {GRANTFOX.title}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">{GRANTFOX.paragraph}</p>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-3">
          {GRANTFOX.points.map((point) => (
            <RevealItem key={point} className="flex gap-3 rounded-xl border border-border bg-surface p-5">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <p className="text-[13.5px] leading-relaxed text-muted">{point}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-9">
          <Button href={GRANTFOX.cta.href} variant="secondary" target="_blank" rel="noreferrer">
            {GRANTFOX.cta.label}
            <span className="sr-only"> (opens in new tab)</span>
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
