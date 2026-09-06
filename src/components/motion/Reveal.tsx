import { useLayoutEffect, useRef } from "react"

import { cn } from "@/lib/utils"
import { EASE } from "@/motion/tokens"
import { registerReveal } from "@/components/motion/reveal-controller"

/**
 * Content arriving as it scrolls into view — without ever being able to strand
 * that content invisible.
 *
 * Visible is the resting state, declared in the markup and in CSS, needing no
 * JavaScript. Only elements that are demonstrably below the fold when they
 * mount are hidden, and the shared controller in `reveal-controller.ts` brings
 * them back on a geometry sweep that cannot miss. If the script never runs, if
 * an observer never fires, or if the scroll position jumps straight past a
 * section, the content is simply there.
 *
 * This is the second rewrite. The first one kept the polarity the wrong way
 * round — hidden by default, revealed by an IntersectionObserver — and shipped
 * a page where jumping the scroll left whole sections permanently blank.
 */

export const softEase = EASE

function useReveal(delaySeconds: number, stagger: boolean) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    let delay = delaySeconds
    if (stagger) {
      // Position among siblings, so a grid arrives in a wave without the
      // parent having to hand each child an index.
      const index = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0
      delay += Math.min(index, 6) * 0.06
    }

    return registerReveal(el, delay)
  }, [delaySeconds, stagger])

  return ref
}

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number
}

export function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  const ref = useReveal(delay, false)

  return (
    <div ref={ref} className={cn("tg-reveal", className)} {...rest}>
      {children}
    </div>
  )
}

/**
 * A container whose children arrive in a wave. It does not coordinate the
 * animation: each item registers its own position. The parent-to-child variant
 * propagation this used to rely on was the other half of the stranding bug —
 * when the parent's observer missed, every child stayed hidden with it.
 */
export function RevealGroup({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  )
}

export function RevealItem({ children, className, delay = 0, ...rest }: RevealProps) {
  const ref = useReveal(delay, true)

  return (
    <div ref={ref} className={cn("tg-reveal", className)} {...rest}>
      {children}
    </div>
  )
}
