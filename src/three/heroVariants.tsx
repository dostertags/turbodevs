import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { useDotTexture } from "./useDotTexture"

/** Per-variant opacity, written once per frame by the orchestrator and read
 * once per frame by whichever variant owns that slot — a shared mutable
 * array instead of React state, so a crossfade never triggers a re-render
 * (same rationale as `view` in `./state`). */
export type FadeRef = React.RefObject<number[]>

export type VariantProps = {
  slot: number
  fade: FadeRef
  reducedMotion: boolean
}

const AMBER = "#e2a545"
const IVORY = "#f7f1e4"

/** Hides the group once it's faded fully out, so an inactive variant costs
 * nothing beyond the opacity check itself — draw calls, not just pixels. */
function applyVisibility(group: THREE.Group | null, opacity: number) {
  if (group) group.visible = opacity > 0.003
}

/**
 * A small PCB-style trace layout — a handful of right-angle polylines with
 * glowing vias at their joints and two pulses travelling along them. Reuses
 * the exact "lerp a point along an edge" technique the page's background
 * network graph already uses, at a much smaller scale.
 */
const TRACES: [number, number][][] = [
  [
    [-0.85, 0.55],
    [-0.25, 0.55],
    [-0.25, 0.1],
    [0.45, 0.1],
  ],
  [
    [-0.85, -0.2],
    [-0.5, -0.2],
    [-0.5, -0.65],
    [0.6, -0.65],
  ],
  [
    [0.85, 0.65],
    [0.5, 0.65],
    [0.5, 0.25],
    [0.05, 0.25],
    [0.05, -0.1],
  ],
  [
    [0.85, -0.5],
    [0.3, -0.5],
    [0.3, -0.85],
  ],
]

export function CircuitGrid({ slot, fade, reducedMotion }: VariantProps) {
  const groupRef = useRef<THREE.Group>(null)
  const lineMat = useMemo(
    () => new THREE.LineBasicMaterial({ color: AMBER, transparent: true, opacity: 0, depthWrite: false }),
    [],
  )
  const viaMat = useMemo(
    () => new THREE.PointsMaterial({ transparent: true, opacity: 0, size: 0.05, depthWrite: false }),
    [],
  )
  const viaTex = useDotTexture(AMBER)
  const pulseMat = useMemo(
    () => new THREE.PointsMaterial({ transparent: true, opacity: 0, size: 0.075, depthWrite: false }),
    [],
  )
  const pulseTex = useDotTexture(IVORY)
  const pulsesRef = useRef<THREE.Points>(null)
  const pulseState = useRef([
    { trace: 0, t: 0, speed: 0.18 },
    { trace: 2, t: 0.5, speed: 0.14 },
  ])
  const pulsePositions = useMemo(() => new Float32Array(pulseState.current.length * 3), [])

  const samplePulses = () => {
    pulseState.current.forEach((pulse, i) => {
      const trace = TRACES[pulse.trace]
      const segCount = trace.length - 1
      const segF = pulse.t * segCount
      const segI = Math.min(segCount - 1, Math.floor(segF))
      const [ax, ay] = trace[segI]
      const [bx, by] = trace[segI + 1]
      const localT = segF - segI
      pulsePositions[i * 3] = THREE.MathUtils.lerp(ax, bx, localT)
      pulsePositions[i * 3 + 1] = THREE.MathUtils.lerp(ay, by, localT)
      pulsePositions[i * 3 + 2] = 0
    })
  }
  // Seeds a valid resting point on each trace up front — same reasoning as
  // `WaveformRibbon`'s unconditional `sample(0)` below: a reduced-motion
  // visitor's `useFrame` returns before ever writing `pulsePositions`, so
  // without this both pulses would render stuck at the buffer's
  // zero-initialized (0,0,0), a point that sits on none of the traces.
  samplePulses()

  const viaPositions = useMemo(() => {
    const points = TRACES.flat()
    const arr = new Float32Array(points.length * 3)
    points.forEach(([x, y], i) => {
      arr[i * 3] = x
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = 0
    })
    return arr
  }, [])

  useFrame((_, delta) => {
    const opacity = fade.current[slot] ?? 0
    lineMat.opacity = opacity * 0.6
    viaMat.opacity = opacity * 0.8
    pulseMat.opacity = opacity
    applyVisibility(groupRef.current, opacity)

    if (reducedMotion) return
    const dt = Math.min(delta, 1 / 30)
    pulseState.current.forEach((pulse) => {
      pulse.t += dt * pulse.speed
      if (pulse.t > 1) pulse.t -= 1
    })
    samplePulses()
    if (pulsesRef.current) {
      const attr = pulsesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.set(pulsePositions)
      attr.needsUpdate = true
    }
  })

  // `THREE.Line` built imperatively and mounted via `<primitive>` rather
  // than the `<line>` JSX intrinsic — in this project's TS setup, `<line>`
  // resolves to the SVG element type, not react-three-fiber's, and fails to
  // typecheck. `<lineSegments>` (used elsewhere) has no such collision since
  // no SVG element shares that name.
  const traceLines = useMemo(
    () =>
      TRACES.map((trace) => {
        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(new Float32Array(trace.flatMap(([x, y]) => [x, y, 0])), 3),
        )
        return new THREE.Line(geometry, lineMat)
      }),
    [lineMat],
  )

  return (
    <group ref={groupRef}>
      {traceLines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
      <points material={viaMat}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[viaPositions, 3]} />
        </bufferGeometry>
        <primitive object={viaTex} attach="map" />
      </points>
      <points ref={pulsesRef} material={pulseMat}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <primitive object={pulseTex} attach="map" />
      </points>
    </group>
  )
}

/** Two tilted, wireframe rings suggesting a wound inductor coil. */
export function CoilTorus({ slot, fade, reducedMotion }: VariantProps) {
  const groupRef = useRef<THREE.Group>(null)
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: AMBER,
        wireframe: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  )

  useFrame((_, delta) => {
    const opacity = fade.current[slot] ?? 0
    mat.opacity = opacity * 0.75
    applyVisibility(groupRef.current, opacity)
    if (!reducedMotion && groupRef.current) {
      groupRef.current.rotation.y += Math.min(delta, 1 / 30) * 0.35
    }
  })

  return (
    <group ref={groupRef} rotation={[0.3, 0, 0.1]}>
      <mesh material={mat} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.6, 0.045, 8, 40]} />
      </mesh>
      <mesh material={mat} rotation={[-0.35, 0.7, 0]}>
        <torusGeometry args={[0.4, 0.04, 8, 32]} />
      </mesh>
    </group>
  )
}

/** Stacked, offset panels with one glowing "charge" bar — an echo of the
 * real grid-scale battery-storage engagement, not a literal diagram of it. */
export function BatteryStack({ slot, fade, reducedMotion }: VariantProps) {
  const groupRef = useRef<THREE.Group>(null)
  const panelMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: IVORY, transparent: true, opacity: 0, depthWrite: false }),
    [],
  )
  const chargeMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0, depthWrite: false }),
    [],
  )
  const clock = useRef(0)

  useFrame((_, delta) => {
    const opacity = fade.current[slot] ?? 0
    panelMat.opacity = opacity * 0.28
    chargeMat.opacity = opacity * 0.9
    applyVisibility(groupRef.current, opacity)
    if (reducedMotion || !groupRef.current) return
    clock.current += Math.min(delta, 1 / 30)
    groupRef.current.position.y = Math.sin(clock.current * 0.6) * 0.05
  })

  const panels = [0, 1, 2, 3]

  return (
    <group ref={groupRef}>
      {panels.map((i) => (
        <mesh key={i} material={panelMat} position={[i * 0.05 - 0.075, i * 0.2 - 0.3, i * -0.04]}>
          <boxGeometry args={[0.85, 0.15, 0.04]} />
        </mesh>
      ))}
      <mesh material={chargeMat} position={[-0.16, 0.42, 0.02]}>
        <boxGeometry args={[0.5, 0.045, 0.02]} />
      </mesh>
    </group>
  )
}

const PIN_COUNT = 10

/** A wireframe chip body with pins radiating outward — abstract compute /
 * hardware, tying the "production SaaS" and "Web3" rotations to something
 * concrete without illustrating either literally. */
export function ChipNode({ slot, fade, reducedMotion }: VariantProps) {
  const groupRef = useRef<THREE.Group>(null)
  const bodyMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: AMBER,
        wireframe: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  )
  const pinMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0, depthWrite: false }),
    [],
  )
  const tipMat = useMemo(
    () => new THREE.PointsMaterial({ transparent: true, opacity: 0, size: 0.06, depthWrite: false }),
    [],
  )
  const tipTex = useDotTexture(IVORY)

  const pins = useMemo(
    () =>
      Array.from({ length: PIN_COUNT }, (_, i) => {
        const angle = (i / PIN_COUNT) * Math.PI * 2
        return { angle, x: Math.cos(angle) * 0.62, z: Math.sin(angle) * 0.62 }
      }),
    [],
  )
  const tipPositions = useMemo(() => {
    const arr = new Float32Array(pins.length * 3)
    pins.forEach((p, i) => {
      arr[i * 3] = p.x
      arr[i * 3 + 1] = 0
      arr[i * 3 + 2] = p.z
    })
    return arr
  }, [pins])

  useFrame((_, delta) => {
    const opacity = fade.current[slot] ?? 0
    bodyMat.opacity = opacity * 0.8
    pinMat.opacity = opacity * 0.55
    tipMat.opacity = opacity
    applyVisibility(groupRef.current, opacity)
    if (!reducedMotion && groupRef.current) {
      groupRef.current.rotation.y += Math.min(delta, 1 / 30) * 0.22
    }
  })

  return (
    <group ref={groupRef} rotation={[0.35, 0, 0]}>
      <mesh material={bodyMat}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
      </mesh>
      {pins.map((p, i) => (
        <mesh key={i} material={pinMat} position={[p.x * 0.66, 0, p.z * 0.66]} rotation={[0, -p.angle, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 0.42, 6]} />
        </mesh>
      ))}
      <points material={tipMat}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[tipPositions, 3]} />
        </bufferGeometry>
        <primitive object={tipTex} attach="map" />
      </points>
    </group>
  )
}

const WAVE_SAMPLES = 48

/** A travelling sine trace — an oscilloscope read on a voltage signal,
 * abstracted down to a single glowing line. */
export function WaveformRibbon({ slot, fade, reducedMotion }: VariantProps) {
  const groupRef = useRef<THREE.Group>(null)
  const mat = useMemo(
    () => new THREE.LineBasicMaterial({ color: AMBER, transparent: true, opacity: 0, depthWrite: false }),
    [],
  )
  const phase = useRef(0)
  const positions = useMemo(() => new Float32Array(WAVE_SAMPLES * 3), [])
  // See the comment on `traceLines` in `CircuitGrid` — `<line>` collides
  // with the SVG intrinsic in this project's TS setup, so the line is built
  // imperatively and mounted via `<primitive>`.
  const lineObj = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return new THREE.Line(geometry, mat)
  }, [mat, positions])

  const sample = (p: number) => {
    for (let i = 0; i < WAVE_SAMPLES; i++) {
      const x = (i / (WAVE_SAMPLES - 1)) * 1.7 - 0.85
      const y = Math.sin(x * 5 + p) * 0.22 * Math.exp(-Math.pow(x * 1.3, 2))
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = 0
    }
  }
  sample(0)

  useFrame((_, delta) => {
    const opacity = fade.current[slot] ?? 0
    mat.opacity = opacity * 0.85
    applyVisibility(groupRef.current, opacity)
    if (reducedMotion) return
    phase.current += Math.min(delta, 1 / 30) * 1.4
    sample(phase.current)
    const attr = lineObj.geometry.getAttribute("position") as THREE.BufferAttribute
    attr.set(positions)
    attr.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <primitive object={lineObj} />
    </group>
  )
}

export const HERO_VARIANTS = [CircuitGrid, CoilTorus, BatteryStack, ChipNode, WaveformRibbon] as const
