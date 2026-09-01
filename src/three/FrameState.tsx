import { useFrame } from "@react-three/fiber"

import { damp, view } from "./state"

/**
 * Renders nothing; exists purely to damp the raw pointer into a smooth one,
 * once per frame, at display refresh rate.
 */
export function FrameState() {
  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30)
    const lambda = 3.5

    view.pointerLerp.x = damp(view.pointerLerp.x, view.pointer.x, lambda, dt)
    view.pointerLerp.y = damp(view.pointerLerp.y, view.pointer.y, lambda, dt)
    view.velocity = damp(view.velocity, 0, 4, dt)
  })

  return null
}
