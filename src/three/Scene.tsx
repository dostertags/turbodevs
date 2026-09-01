import { Suspense, useState } from "react"
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Effects } from "./Effects"
import { FrameState } from "./FrameState"
import { NetworkGraph } from "./NetworkGraph"

/**
 * ONE canvas for the entire site — a single fixed, full-viewport WebGL
 * context pinned behind the page. The DOM scrolls over the top; sections
 * that want the 3D visible simply leave their background transparent.
 */
export function Scene() {
  const [dpr, setDpr] = useState(1.5)

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Canvas
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        dpr={dpr}
        camera={{ position: [0, 0, 6], fov: 35, near: 0.1, far: 100 }}
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(1.75)}
          flipflops={3}
          onFallback={() => setDpr(1)}
        />
        <AdaptiveDpr pixelated />

        <FrameState />

        <Suspense fallback={null}>
          <NetworkGraph />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  )
}
