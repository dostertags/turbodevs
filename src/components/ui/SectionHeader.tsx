import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

/**
 * A small sans label, a serif heading, and an optional lead paragraph — the
 * opening of every section. Sizes come from the type scale in `index.css`.
 */

type SectionHeaderProps = {
  /** Rendered above the heading. Small and quiet: the section's category. */
  eyebrow: string
  title: React.ReactNode
  /** id for the heading, so the parent Section can be labelled by it. */
  titleId?: string
  paragraph?: string
  align?: "start" | "center"
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
  titleWidth = "24ch",
  className,
}: SectionHeaderProps) {
  const centered = align === "center"

  return (
    <div className={cn(centered && "text-center", className)}>
      <Reveal>
        <p className="text-[13px] font-medium text-muted">{eyebrow}</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          id={titleId}
          style={{ maxWidth: titleWidth }}
          className={cn("mt-3 font-serif text-h2 leading-[1.12] font-normal tracking-h2 text-ink", centered && "mx-auto")}
        >
          {title}
        </h2>
      </Reveal>

      {paragraph && (
        <Reveal delay={0.12}>
          <p className={cn("mt-5 max-w-[60ch] text-lead leading-relaxed text-muted", centered && "mx-auto")}>
            {paragraph}
          </p>
        </Reveal>
      )}
    </div>
  )
}
