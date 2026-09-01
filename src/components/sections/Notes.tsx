import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { useI18n } from "@/i18n/LanguageContext"
import type { NoteCopy } from "@/i18n/types"

const NOTE_SLUGS = ["fail-closed-deployments", "llm-grounding", "verified-claims-ledger"] as const

function NoteCard({ note, readSuffix }: { note: NoteCopy; readSuffix: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="tg-glass overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left sm:px-8"
      >
        <div>
          <p className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
            {note.readTime} {readSuffix}
          </p>
          <h3 className="mt-2 text-[19px] font-semibold text-ink">{note.title}</h3>
          <p className="mt-2 max-w-[60ch] text-[14.5px] leading-relaxed text-muted">{note.dek}</p>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={cn("mt-1 size-5 shrink-0 text-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <div
        id={panelId}
        role="region"
        className={cn("grid transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 border-t border-border px-6 pt-6 pb-8 sm:px-8">
            {note.body.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Notes() {
  const { t } = useI18n()

  return (
    <section id="notes" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
          {t.notes.eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[22ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          {t.notes.title}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">{t.notes.paragraph}</p>
      </Reveal>

      <RevealGroup className="mt-10 flex flex-col gap-4">
        {NOTE_SLUGS.map((slug) => (
          <RevealItem key={slug}>
            <NoteCard note={t.notes.items[slug]} readSuffix={t.notes.readSuffix} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
