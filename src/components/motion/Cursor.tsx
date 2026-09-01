import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

/**
 * A custom cursor: a precise dot plus a larger lagging ring.
 * `mix-blend-mode: difference` keeps a single-color cursor visible over any
 * background without per-section logic.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const ringX = useSpring(x, { stiffness: 300, damping: 26, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 300, damping: 26, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!fine.matches || reduced.matches) return

    setEnabled(true)
    document.documentElement.classList.add("tg-cursor-active")

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null
      setHovering(!!t?.closest("a, button, [role='button'], input, label"))
    }

    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerover", over, { passive: true })

    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
      document.documentElement.classList.remove("tg-cursor-active")
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="absolute rounded-full border border-white"
        style={{
          x: ringX,
          y: ringY,
          width: 34,
          height: 34,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{ scale: hovering ? 1.65 : 1, opacity: hovering ? 0.9 : 0.55 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          x,
          y,
          width: 5,
          height: 5,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
