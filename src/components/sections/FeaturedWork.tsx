import { ArrowUpRight } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { WORK } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

export function FeaturedWork() {
  const { t } = useI18n()

  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader eyebrow={t.work.eyebrow} title={t.work.title} titleId="work-title" />

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
        {WORK.map((item) => {
          const copy = t.work.items[item.slug]
          return (
            <RevealItem key={item.slug}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-strong">
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
                        onClick={() => track("work_link", { slug: item.slug, label: link.label })}
                        className="inline-flex items-center gap-1 text-[13px] font-medium text-ink transition-colors hover:text-accent"
                      >
                        {link.label}
                        <span className="sr-only"> ({item.name}, {t.a11y.newTab})</span>
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
