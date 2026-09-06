import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

/**
 * Eyebrow, heading, and an optional lead paragraph — the opening of every
 * section on the page, which until now was hand-copied nine times. The copies
 * had already diverged: two heading sizes, three maximum measures, and one
 * section whose heading had lost its colour class entirely.
 *
 * Sizes come from the type scale in `index.css` rather than per-element pixel
 * values, so the step from phone to desktop is one decision.
 */

type SectionHeaderProps = {
  /** Rendered above the heading. Small, uppercase, the section's category. */
  eyebrow: string
  title: React.ReactNode
  /** id for the heading, so the parent Section can be labelled by it. */
  titleId?: string
  paragraph?: string
  align?: "start" | "center"
  /** `minor` for sections whose heading should sit under the page's h2 rhythm. */
  size?: "default" | "minor"
  /** Maximum measure for the heading, in characters. */
  titleWidth?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  paragraph,
  align = "start",
  size = "default",
  titleWidth = "28ch",
  className,
}: SectionHeaderProps) {
  const centered = align === "center"

  return (
    <div className={cn(centered && "text-center", className)}>
      <Reveal>
        <p className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          id={titleId}
          style={{ maxWidth: titleWidth }}
          className={cn(
            "mt-3 leading-[1.1] font-semibold tracking-h2 text-ink",
            size === "minor" ? "text-h2-minor" : "text-h2",
            centered && "mx-auto",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {paragraph && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-5 max-w-[62ch] text-lead leading-relaxed text-muted",
              centered && "mx-auto",
            )}
          >
            {paragraph}
          </p>
        </Reveal>
      )}
    </div>
  )
}
