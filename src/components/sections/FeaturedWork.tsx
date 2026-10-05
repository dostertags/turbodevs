import { ArrowUpRight } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CASES, OPEN_SOURCE } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

/**
 * Client work as case studies — the challenge, what we built, and the client's
 * own words where they gave them — followed by our own public repositories.
 */
export function FeaturedWork() {
  const { t } = useI18n()

  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader eyebrow={t.work.eyebrow} title={t.work.title} titleId="work-title" />

      <div className="mt-12">
        {CASES.map(({ key, company, href }) => {
          const item = t.work.cases[key]
          const name = company ?? t.work.confidentialClient
          return (
            <Reveal key={key}>
              <article
                data-testid="case-study"
                aria-labelledby={`case-${key}`}
                className="grid gap-6 border-t border-border py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-12"
              >
                <div>
                  <p className="text-[13px] font-medium text-accent">{item.sector}</p>
                  <h3 id={`case-${key}`} className="mt-2 font-serif text-[30px] leading-tight font-normal text-ink">
                    {name}
                  </h3>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => track("work_link", { slug: key, label: "visit" })}
                      className="mt-3 inline-flex items-center gap-1 text-[14px] text-ink/75 transition-colors hover:text-ink"
                    >
                      {t.work.visitLabel} {company}
                      <span className="sr-only"> ({t.a11y.newTab})</span>
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  )}
                </div>

                <div>
                  <dl className="grid gap-5 sm:grid-cols-2 sm:gap-8">
                    <div>
                      <dt className="text-[13px] font-medium text-muted">{t.work.challengeLabel}</dt>
                      <dd className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{item.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-[13px] font-medium text-muted">{t.work.builtLabel}</dt>
                      <dd className="mt-1.5 text-[15.5px] leading-relaxed text-ink">{item.built}</dd>
                    </div>
                  </dl>

                  {item.quote && company && (
                    <figure className="mt-8 border-l-2 border-accent pl-5">
                      <blockquote className="font-serif text-[19px] leading-relaxed text-ink/90">
                        <p>“{item.quote}”</p>
                      </blockquote>
                      <figcaption className="mt-3 text-[13px] font-medium text-muted">— {company}</figcaption>
                    </figure>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <div id="open-source" className="mt-16 border-t border-border pt-12">
        <h3 className="font-serif text-[26px] font-normal text-ink">{t.work.openSourceTitle}</h3>
        <p className="mt-2 max-w-[60ch] text-[15px] text-muted">{t.work.openSourceIntro}</p>

        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_SOURCE.map(({ slug, links }) => {
            const copy = t.work.openSource[slug]
            return (
              <RevealItem key={slug} data-testid="open-source-item" className="flex flex-col rounded-xl bg-surface p-6">
                <p className="text-[12.5px] font-medium text-accent">{copy.kicker}</p>
                <h4 className="mt-1.5 font-mono text-[16px] font-semibold text-ink">{slug}</h4>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{copy.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => track("work_link", { slug, label: link.label })}
                      className="inline-flex min-h-6 items-center gap-1 text-[13.5px] font-medium text-ink transition-colors hover:text-accent"
                    >
                      {link.label}
                      <span className="sr-only"> ({slug}, {t.a11y.newTab})</span>
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  ))}
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </Section>
  )
}
