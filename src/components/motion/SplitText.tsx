import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { softEase } from "./Reveal"

type SplitTextProps = {
  text: string
  className?: string
  stagger?: number
  delay?: number
  as?: "span" | "h1" | "h2" | "h3" | "p"
}

/**
 * Animates a headline in word by word, each rising out of a clipping mask.
 *
 * Accessibility: splitting text into per-word spans destroys it for screen
 * readers, so the intact string goes on `aria-label` and the visual pieces
 * are `aria-hidden`. Selection and copy/paste still work normally.
 */
export function SplitText({ text, className, stagger = 0.055, delay = 0, as = "span" }: SplitTextProps) {
  const Tag = motion[as]
  const words = text.split(" ")

  return (
    <Tag
      className={cn("inline-block", className)}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        // The space between words is a sibling text node, not trailing
        // content inside the clipped mask below — a space at the very end
        // of an inline-block's own content gets trimmed by whitespace
        // collapsing, silently gluing every word together.
        <span key={`${word}-${i}`}>
          <span aria-hidden className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: softEase } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  )
}
