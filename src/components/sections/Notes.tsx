import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { NOTES } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import type { NoteCopy } from "@/i18n/types"

function NoteRow({ note, date, readSuffix }: { note: NoteCopy; date: string; readSuffix: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-6 py-8 text-left"
      >
        <div>
          <p className="text-[13px] text-muted">
            {date} · {note.readTime} {readSuffix}
          </p>
          <h3 className="mt-2 font-serif text-[26px] leading-snug font-normal text-ink">{note.title}</h3>
          <p className="mt-2 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">{note.dek}</p>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={cn("mt-8 size-5 shrink-0 text-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <div
        id={panelId}
        role="region"
        className={cn("grid transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <div className="max-w-[68ch] space-y-5 pb-10">
            {note.body.map((paragraph, i) => (
              <p key={i} className="text-[16.5px] leading-[1.75] text-ink/90">
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
  const { t, language } = useI18n()
  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(language, { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${iso}T12:00:00`))

  return (
    <Section id="notes" labelledBy="notes-title" width="reading">
      <SectionHeader eyebrow={t.notes.eyebrow} title={t.notes.title} titleId="notes-title" paragraph={t.notes.paragraph} />

      <RevealGroup className="mt-10 border-b border-border">
        {NOTES.map(({ slug, published }) => (
          <RevealItem key={slug}>
            <NoteRow note={t.notes.items[slug]} date={formatDate(published)} readSuffix={t.notes.readSuffix} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
