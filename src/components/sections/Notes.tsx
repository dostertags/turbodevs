import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { writeup as failClosedDeployments } from "@/content/writeups/fail-closed-deployments"
import { writeup as llmGrounding } from "@/content/writeups/llm-grounding"
import { writeup as verifiedClaimsLedger } from "@/content/writeups/verified-claims-ledger"

const WRITEUPS = [failClosedDeployments, llmGrounding, verifiedClaimsLedger]

function NoteCard({ note }: { note: (typeof WRITEUPS)[number] }) {
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
          <p className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">{note.readTime} read</p>
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
  return (
    <section id="notes" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">Field notes</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[22ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          Notes from the work.
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">
          Short write-ups on the actual engineering decisions behind the work above — not summaries, the reasoning.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 flex flex-col gap-4">
        {WRITEUPS.map((note) => (
          <RevealItem key={note.slug}>
            <NoteCard note={note} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
