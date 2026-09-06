import { cn } from "@/lib/utils"

/**
 * The page's one section shell.
 *
 * Eight sections previously repeated the same `relative mx-auto max-w-* px-5
 * py-24 sm:px-8 sm:py-32` by hand, and had already drifted: three different
 * container widths with no rule behind which got which, and no accessible
 * name on any of them, so a screen reader's landmark list read as eight
 * anonymous regions.
 */

type SectionProps = {
  id?: string
  /** id of the heading that names this section — becomes its accessible name. */
  labelledBy?: string
  /**
   * `wide` is the default 1152px column. `reading` narrows to a comfortable
   * measure for long prose (the field notes), `narrow` for a single centred
   * form. Anything else needs a reason, not a new number.
   */
  width?: "wide" | "reading" | "narrow"
  className?: string
  children: React.ReactNode
}

const WIDTHS = {
  wide: "max-w-6xl",
  reading: "max-w-4xl",
  narrow: "max-w-3xl",
} as const

export function Section({ id, labelledBy, width = "wide", className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative mx-auto px-5 py-24 sm:px-8 sm:py-32", WIDTHS[width], className)}
    >
      {children}
    </section>
  )
}
