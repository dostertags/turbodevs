import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

/**
 * A card that tilts in 3D toward the cursor, with a specular glare tracking
 * the same point. Pure CSS 3D transform — no canvas needed for this one.
 */
export function TiltCard({
  children,
  className,
  intensity = 9,
  glare = true,
}: {
  children: React.ReactNode
  className?: string
  /** Max rotation in degrees. Past ~14 it stops looking like a surface. */
  intensity?: number
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareOpacity = useMotionValue(0)

  const spring = { stiffness: 260, damping: 22, mass: 0.4 }
  const rx = useSpring(rotateX, spring)
  const ry = useSpring(rotateY, spring)

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(226,165,69,0.22), transparent 55%)`

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()

    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    rotateX.set(-py * intensity * 2)
    rotateY.set(px * intensity * 2)

    glareX.set((px + 0.5) * 100)
    glareY.set((py + 0.5) * 100)
    glareOpacity.set(1)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={cn("relative", className)}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  )
}
