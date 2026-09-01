import { ArrowUpRight } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { TiltCard } from "@/components/motion/TiltCard"
import { Badge } from "@/components/ui/Badge"
import { WORK } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

export function FeaturedWork() {
  const { t } = useI18n()

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
          {t.work.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[28ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          {t.work.title}
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
        {WORK.map((item) => {
          const copy = t.work.items[item.slug]
          return (
            <RevealItem key={item.slug}>
              <TiltCard className="h-full rounded-2xl">
                <div className="tg-glass flex h-full flex-col rounded-2xl p-7">
                  <p className="text-[11px] font-bold tracking-[0.08em] text-accent uppercase">
                    {copy.kicker}
                  </p>
                  {/* Kept in mono deliberately — this is a real repo/project
                      identifier (sii, previred, ...), not a heading, and
                      reads as the code-identifier it actually is. */}
                  <h3 className="mt-2 font-mono text-[18px] font-semibold text-ink">{item.name}</h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{copy.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  {item.metric && (
                    <p className="tabular-nums mt-4 text-[12px] font-medium tracking-[0.02em] text-muted">{item.metric}</p>
                  )}

                  {item.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-5">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] font-medium text-ink transition-colors hover:text-accent"
                        >
                          {link.label}
                          <span className="sr-only"> ({item.name}, opens in new tab)</span>
                          <ArrowUpRight aria-hidden="true" className="size-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}
