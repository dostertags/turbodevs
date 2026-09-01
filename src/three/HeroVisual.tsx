import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"

import { damp } from "./state"
import { HERO_VARIANTS, type FadeRef } from "./heroVariants"

type SceneProps = {
  index: number
  reducedMotion: boolean
}

/**
 * Crossfades between the five hero variants by damping a per-slot opacity
 * toward 1 for the active slot and 0 for every other — the same exponential
 * smoothing `NetworkGraph` uses for pointer tilt, just applied to five
 * numbers instead of one. No React state involved, so a rotation never
 * triggers a re-render of the 3D tree.
 */
function CrossfadeScene({ index, reducedMotion }: SceneProps) {
  const fade: FadeRef = useRef(HERO_VARIANTS.map((_, i) => (i === 0 ? 1 : 0)))

  useFrame((_, delta) => {
    const dt = Math.min(delta, 1 / 30)
    HERO_VARIANTS.forEach((_, i) => {
      const target = i === index ? 1 : 0
      fade.current[i] = reducedMotion ? target : damp(fade.current[i], target, 6, dt)
    })
  })

  return (
    <>
      {HERO_VARIANTS.map((Variant, i) => (
        <Variant key={i} slot={i} fade={fade} reducedMotion={reducedMotion} />
      ))}
    </>
  )
}

type HeroVisualProps = {
  index: number
  reducedMotion: boolean
  className?: string
}

/**
 * A small, self-contained WebGL canvas — deliberately separate from the
 * page-wide network graph in `Scene.tsx` rather than folded into it, so it
 * can be lazy-loaded, sized, and hidden on mobile independently, the same
 * way the corner accent it replaces (`DepthLayers`) already was.
 */
export function HeroVisual({ index, reducedMotion, className }: HeroVisualProps) {
  const camera = useMemo(() => ({ position: [0, 0, 3.1] as [number, number, number], fov: 32, near: 0.1, far: 10 }), [])

  return (
    <div aria-hidden="true" className={className}>
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "low-power", preserveDrawingBuffer: false }}
        dpr={[1, 1.5]}
        camera={camera}
        style={{ pointerEvents: "none" }}
      >
        <CrossfadeScene index={index} reducedMotion={reducedMotion} />
        {!reducedMotion && (
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.4} mipmapBlur radius={0.5} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  )
}
