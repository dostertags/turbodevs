import { useMemo } from "react"
import * as THREE from "three"

/**
 * A soft radial-gradient dot, drawn once to a canvas and reused as a sprite
 * texture. Cheaper and smoother than instancing real sphere geometry for a
 * handful of points, and reads as a glowing node rather than a flat circle.
 * Shared by every points-based accent in the 3D layer (the network graph
 * behind the page, the hero's rotating visual) so they read as one visual
 * language rather than each rolling its own dot.
 */
export function useDotTexture(hex: string) {
  return useMemo(() => {
    const size = 64
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext("2d")!
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, hex)
    gradient.addColorStop(0.4, hex)
    gradient.addColorStop(1, "rgba(0,0,0,0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)
    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }, [hex])
}
