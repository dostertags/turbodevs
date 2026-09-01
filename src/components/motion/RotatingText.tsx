import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import { softEase } from "./Reveal"

type RotatingTextProps = {
  items: string[]
  index: number
  className?: string
  reduceMotion?: boolean
}

/**
 * Crossfades between `items[index]` in place — the hero headline's rotating
 * tail, paired with `useRotator` driving `index` off the same clock as the
 * hero's 3D visual.
 *
 * Accessibility: the swapping text is `aria-hidden` (a screen reader
 * shouldn't be interrupted every few seconds by content re-announcing
 * itself), and the full set of variants is exposed once via `aria-label` on
 * the wrapper so nothing here is screen-reader-only-invisible information —
 * it's simply announced all at once instead of piecemeal.
 */
export function RotatingText({ items, index, className, reduceMotion }: RotatingTextProps) {
  const current = items[index] ?? items[0] ?? ""

  return (
    <span
      className={cn("relative inline-grid text-left align-bottom", className)}
      aria-label={items.join(" · ")}
    >
      {/* Default ("sync") mode, deliberately not "wait": the entering and
          exiting words are already stacked in the same grid cell so they can
          overlap, and a true crossfade needs them animating simultaneously —
          "wait" would hold the incoming word off-stage until the outgoing
          one fully finishes, turning every rotation into a visible blank gap
          instead of a fade. */}
      <AnimatePresence initial={false}>
        <motion.span
          key={current}
          aria-hidden
          data-testid="rotating-current"
          className="col-start-1 row-start-1 inline-block text-accent"
          initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: softEase }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
      {/* Reserves box height/width for the tallest/widest variant so the
          crossfade never shifts layout — invisible, never animated. */}
      <span aria-hidden className="pointer-events-none invisible col-start-1 row-start-1">
        {items.reduce((longest, item) => (item.length > longest.length ? item : longest), "")}
      </span>
    </span>
  )
}
