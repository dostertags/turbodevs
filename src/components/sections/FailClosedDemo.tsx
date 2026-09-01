import { useEffect, useId, useRef, useState } from "react"
import { Lock, ShieldAlert, ShieldCheck, TerminalSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

type LogEntry = {
  id: number
  ok: boolean
  text: string
}

/**
 * A labelled on/off switch. Renders as a real <button role="switch">
 * (not a div) so it's keyboard-operable out of the box, and associates
 * its visible label via aria-labelledby per the WAI-ARIA switch pattern.
 */
function ConfigToggle({
  label,
  description,
  checked,
  onToggle,
  locked = false,
}: {
  label: string
  description: string
  checked: boolean
  onToggle?: () => void
  locked?: boolean
}) {
  const labelId = useId()
  const descId = useId()

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-2 px-4 py-3">
      <div className="min-w-0">
        <p id={labelId} className="font-mono text-[12.5px] font-medium tracking-[0.03em] text-ink">
          {label}
        </p>
        <p id={descId} className="mt-0.5 text-[12px] leading-snug text-muted">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        aria-describedby={descId}
        disabled={locked}
        onClick={onToggle}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2",
          checked ? "bg-accent" : "bg-bg border border-border",
          locked ? "cursor-not-allowed opacity-70" : "cursor-pointer",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-0.5 left-0.5 flex size-5 items-center justify-center rounded-full bg-bg shadow-sm transition-transform duration-200",
            checked && "translate-x-5",
          )}
        >
          {locked && <Lock className="size-3 text-muted" />}
        </span>
      </button>
    </div>
  )
}

/**
 * Interactive proof of the "fail closed, not silently" philosophy, modeled
 * directly on the deployment-mode check running in Grantfox's real backend:
 * non-development environments refuse to boot without an explicit
 * JWT_SECRET, and refuse to boot if a seed/mock flag would fabricate state.
 * Everything here is client-side state — no network calls, no fake API.
 */
export function FailClosedDemo() {
  const [jwtSecretSet, setJwtSecretSet] = useState(false)
  const [dbSeedOnStartup, setDbSeedOnStartup] = useState(true)
  const [log, setLog] = useState<LogEntry[]>([])
  const nextId = useRef(1)
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = logRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [log])

  function handleDeploy() {
    const reasons: string[] = []

    if (!jwtSecretSet) {
      reasons.push(
        "JWT_SECRET not set — would fall back to the published dev secret, letting anyone forge a valid token",
      )
    }
    if (dbSeedOnStartup) {
      reasons.push("DB_SEED_ON_STARTUP is on in production — boot would seed a fabricated 450-credit wallet")
    }

    const entry: LogEntry =
      reasons.length > 0
        ? { id: nextId.current, ok: false, text: `✗ Refused to start — ${reasons.join("; ")}.` }
        : { id: nextId.current, ok: true, text: "✓ Boot sequence started — all guard checks passed." }

    nextId.current += 1
    setLog((prev) => [...prev, entry].slice(-6))
  }

  return (
    <section id="demo" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">SEE IT WORK</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 max-w-[22ch] text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          Flip a switch. Watch it refuse.
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-muted">
          This is the same deployment-mode check running in Grantfox&apos;s real backend, reduced to a toggle. Change
          the flags below and hit deploy — the logic runs entirely in your browser, no fake API standing in for a
          server.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mt-9">
        <div className="tg-glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-muted">
            <TerminalSquare className="size-4" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase">deploy panel</span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <ConfigToggle
              label="JWT_SECRET set"
              description="Explicit secret for signing auth tokens."
              checked={jwtSecretSet}
              onToggle={() => setJwtSecretSet((v) => !v)}
            />
            <ConfigToggle
              label="DB_SEED_ON_STARTUP"
              description="Seeds a demo wallet balance on boot."
              checked={dbSeedOnStartup}
              onToggle={() => setDbSeedOnStartup((v) => !v)}
            />
            <ConfigToggle label="NODE_ENV=production" description="Locked for this demo." checked locked />
          </div>

          <button
            type="button"
            onClick={handleDeploy}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-medium tracking-[0.01em] text-bg transition-colors duration-200 hover:bg-[#f0b85c] focus-visible:outline-none"
          >
            Deploy
          </button>

          <div className="mt-6 rounded-xl border border-border bg-bg">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="size-2 rounded-full bg-[#e2664533]" aria-hidden="true" />
              <span className="size-2 rounded-full bg-[#e2a54533]" aria-hidden="true" />
              <span className="size-2 rounded-full bg-[#6e975133]" aria-hidden="true" />
              <span className="ml-2 font-mono text-[11px] text-muted">$ NODE_ENV=production npm run start</span>
            </div>
            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              className="max-h-[168px] overflow-y-auto px-4 py-3"
            >
              {log.length === 0 ? (
                <p className="font-mono text-[12.5px] leading-[28px] text-muted italic">
                  // press deploy to run the check
                </p>
              ) : (
                <ul>
                  {log.map((entry) => (
                    <li
                      key={entry.id}
                      className={cn(
                        "flex items-start gap-2 font-mono text-[12.5px] leading-[1.6]",
                        entry.ok ? "text-emerald-400" : "text-red-400",
                      )}
                    >
                      {entry.ok ? (
                        <ShieldCheck className="mt-[3px] size-3.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <ShieldAlert className="mt-[3px] size-3.5 shrink-0" aria-hidden="true" />
                      )}
                      <span className="break-words">{entry.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
