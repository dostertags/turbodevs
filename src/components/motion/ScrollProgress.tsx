import { motion, useScroll, useSpring, useReducedMotion } from "motion/react"

/**
 * The hairline progress bar across the top of the page. Binding to `scaleX`
 * means the browser only recomputes a transform — no layout, no paint.
 *
 * Accessibility: `pointer-events-none` keeps this decorative bar from ever
 * intercepting clicks/taps meant for real content underneath it (it spans
 * the full width at the very top of the viewport, over any fixed nav). The
 * spring smoothing is JS-driven (not a CSS transition/animation), so the
 * global `prefers-reduced-motion` rule in index.css can't reach it — when
 * reduced motion is requested we bind directly to the raw scroll fraction
 * instead, dropping the spring's overshoot/settle motion while still
 * reflecting real scroll progress.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#6e5127] via-[#e2a545] to-[#f2efe9]"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  )
}
