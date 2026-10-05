import { cn } from "@/lib/utils"

/**
 * The page's one section shell. Sections are separated by a hairline and
 * generous space rather than by changing background.
 */

type SectionProps = {
  id?: string
  /** id of the heading that names this section — becomes its accessible name. */
  labelledBy?: string
  /**
   * `wide` is the default 1152px column. `reading` narrows to a comfortable
   * measure for long prose, `narrow` for a single centred form.
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
    <section id={id} aria-labelledby={labelledBy} className={cn("relative mx-auto px-5 sm:px-8", WIDTHS[width], className)}>
      <div className="border-t border-border py-20 sm:py-28">{children}</div>
    </section>
  )
}
