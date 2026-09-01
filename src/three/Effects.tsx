import { useMemo } from "react"
import { Bloom, ChromaticAberration, EffectComposer, Noise, SMAA, Vignette } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Vector2 } from "three"

/**
 * The post-processing chain — the difference between "some 3D on a page"
 * and something that looks shot through a lens.
 */
export function Effects() {
  const caOffset = useMemo(() => new Vector2(0.0006, 0.0004), [])

  return (
    <EffectComposer multisampling={0}>
      <Bloom intensity={1.05} luminanceThreshold={0.2} luminanceSmoothing={0.4} mipmapBlur radius={0.7} />
      <ChromaticAberration offset={caOffset} />
      <Noise opacity={0.025} blendFunction={BlendFunction.OVERLAY} />
      <Vignette offset={0.35} darkness={0.65} blendFunction={BlendFunction.NORMAL} />
      <SMAA />
    </EffectComposer>
  )
}
