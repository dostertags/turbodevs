import { Component, lazy, Suspense, type ReactNode } from "react"

import { NetworkGraphStatic } from "@/components/NetworkGraphStatic"
import { useDeferredScene } from "@/hooks/use-deferred-scene"

/**
 * The page's background, and the decision about how much it is allowed to cost.
 *
 * The SVG constellation is the canonical version: it renders on every device,
 * in the first paint, for a few kilobytes of markup. The WebGL canvas is an
 * enhancement layered on top of it, only where a device can clearly afford it
 * (see `canAffordWebGL`), only after the page has finished loading and gone
 * idle, and only when `WEBGL_BACKDROP` is on.
 *
 * It ships off. The 312KB (compressed) three.js chunk was previously fetched
 * and compiled on every visit, and the canvas ran a five-pass post-processing
 * chain under all 7,800–11,300px of the page — for a background of drifting
 * dots that the SVG draws for free. Turning it back on is one constant, and
 * the plan's own first named cut is deleting the dependency outright.
 */
export const WEBGL_BACKDROP = false

const Scene = lazy(() => import("@/three/Scene").then((m) => ({ default: m.Scene })))

/**
 * A WebGL context can fail for reasons that have nothing to do with this code
 * — a blocklisted driver, an exhausted context pool, a browser flag. Without a
 * boundary, that failure took the whole page down: a blank site because a
 * decoration could not draw.
 */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

export function Backdrop() {
  const showCanvas = useDeferredScene(WEBGL_BACKDROP)

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <NetworkGraphStatic className="h-full w-full opacity-90" />
      {showCanvas && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </SceneBoundary>
      )}
    </div>
  )
}
