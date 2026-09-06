import { Pause, Play } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"

/**
 * The site-wide "stop moving" control (WCAG 2.2.2, Pause/Stop/Hide).
 *
 * The only pause the site had before was attached to the rotating headline: it
 * stopped that one word while the background graph kept turning, the entrance
 * animations kept running and the page kept scrolling smoothly. This one turns
 * all of it off, remembers the choice, and defaults to whatever the operating
 * system already says.
 */
export function MotionToggle({
  motionOff,
  onToggle,
  className,
}: {
  motionOff: boolean
  onToggle: () => void
  className?: string
}) {
  const { t } = useI18n()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={motionOff}
      aria-label={motionOff ? t.a11y.resumeMotion : t.a11y.pauseMotion}
      title={motionOff ? t.a11y.resumeMotion : t.a11y.pauseMotion}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-ink",
        className,
      )}
    >
      {motionOff ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
    </button>
  )
}
