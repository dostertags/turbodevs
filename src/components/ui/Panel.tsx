import { cn } from "@/lib/utils"

/**
 * A surface with a hairline edge.
 *
 * Two variants, and the distinction is the point. `glass` is a real frosted
 * pane: it costs a `backdrop-filter`, which the browser must re-run whenever
 * anything behind it repaints, so it belongs only on elements that float over
 * moving content — the header, the menu drawer. `opaque` is the default for
 * everything that sits in the page flow.
 *
 * Before this, sixteen elements carried glass, including content cards sitting
 * over the animated WebGL background: every one of them was re-blurred on every
 * frame, and by the audit's own account they looked identical to the plain
 * panels next to them anyway. Paying a per-frame GPU cost for an effect nobody
 * can see is the worst of both.
 */

type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "opaque" | "glass"
  as?: "div" | "article" | "aside"
}

export function Panel({ variant = "opaque", as: Tag = "div", className, children, ...rest }: PanelProps) {
  return (
    <Tag
      {...rest}
      className={cn(
        "rounded-2xl border",
        variant === "glass" ? "tg-glass border-transparent" : "border-border bg-surface",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
