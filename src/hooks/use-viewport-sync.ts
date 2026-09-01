import { useEffect } from "react"

import { view } from "@/three/state"

/**
 * Pipes DOM events into the shared `view` object. Every listener is passive
 * and writes plain numbers — none trigger a React render. Mount once, near
 * the root.
 */
export function useViewportSync() {
  useEffect(() => {
    const setSize = () => {
      view.size.w = window.innerWidth
      view.size.h = window.innerHeight
    }

    const onPointerMove = (e: PointerEvent) => {
      view.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      view.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }

    const onPointerLeave = () => {
      view.pointer.x = 0
      view.pointer.y = 0
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotion = () => {
      view.reducedMotion = motionQuery.matches
    }

    setSize()
    syncMotion()

    window.addEventListener("resize", setSize, { passive: true })
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerleave", onPointerLeave)
    motionQuery.addEventListener("change", syncMotion)

    return () => {
      window.removeEventListener("resize", setSize)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", onPointerLeave)
      motionQuery.removeEventListener("change", syncMotion)
    }
  }, [])
}
