import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

/**
 * Makes its child lean toward the cursor while hovered, then spring back.
 * Runs on MotionValues, which write straight to the transform outside of
 * React's render cycle — `useState` here would re-render on every pointermove.
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode
  /** 0 = inert, 1 = the element glues itself to the cursor. */
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 220, damping: 18, mass: 0.35 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.div>
  )
}
