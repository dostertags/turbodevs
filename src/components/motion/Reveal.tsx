import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { DISTANCE, DUR, EASE } from "@/motion/tokens"
import { useHydrated } from "@/hooks/use-hydrated"

/**
 * Content arriving as it scrolls into view.
 *
 * Two deliberate changes from the version this replaces:
 *
 * No blur. Every element of every section used to animate `filter:
 * blur(10px) → blur(0)`. Blur is one of the most expensive properties a
 * browser can animate; there were around forty of them on the page, several
 * sitting over a canvas that repaints every frame, and the effect was applied
 * so uniformly that it stopped reading as emphasis and started reading as the
 * page being out of focus. A short rise and a fade say the same thing for
 * almost nothing.
 *
 * Nothing is hidden until the page is interactive. `initial` used to set
 * `opacity: 0` in the markup, which means the page's entire content is
 * invisible until JavaScript has loaded, parsed, and produced a frame — on a
 * slow phone that is seconds of blank sections, and if the animation never
 * runs the content never appears at all. Now the resting state is the visible
 * one, and the animation is only introduced once we know we are hydrated.
 */

export const softEase = EASE

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = DISTANCE, ...props }: RevealProps) {
  const hydrated = useHydrated()

  if (!hydrated) {
    // `children` is typed for motion.div, which permits a MotionValue; the
    // plain element wants a ReactNode. Nothing here renders a MotionValue.
    return <div className={cn(className)}>{children as React.ReactNode}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // `once` — elements that re-animate every time they re-enter the
      // viewport are exhausting to scroll past.
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: DUR.enter, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.06,
  delay = 0,
  ...props
}: React.ComponentProps<typeof motion.div> & { stagger?: number; delay?: number }) {
  const hydrated = useHydrated()

  if (!hydrated) {
    // `children` is typed for motion.div, which permits a MotionValue; the
    // plain element wants a ReactNode. Nothing here renders a MotionValue.
    return <div className={cn(className)}>{children as React.ReactNode}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  y = DISTANCE,
  ...props
}: React.ComponentProps<typeof motion.div> & { y?: number }) {
  const hydrated = useHydrated()

  if (!hydrated) {
    // `children` is typed for motion.div, which permits a MotionValue; the
    // plain element wants a ReactNode. Nothing here renders a MotionValue.
    return <div className={cn(className)}>{children as React.ReactNode}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: DUR.enter, ease: EASE } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
