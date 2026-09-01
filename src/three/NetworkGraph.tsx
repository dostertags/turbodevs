import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { damp, view } from "./state"

const NODE_COUNT = 46
// Exactly as many ivory "verified" nodes as real engagements featured on the
// page below (sii, previred, stellarfit, glowcheck, turbotrabajo, Grantfox,
// the battery-storage engagement) — a detail that encodes something true
// about the content rather than a decorative round number.
const VERIFIED_COUNT = 7
const PULSE_COUNT = 7

type Node = {
  base: THREE.Vector3
  phase: number
  freqX: number
  freqY: number
  freqZ: number
  amp: number
}

type Edge = [number, number]

function seededRandom(seed: number) {
  // A tiny deterministic PRNG (mulberry32) — the graph looks identical on
  // every load and every render (server or client), rather than reshuffling.
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * A soft radial-gradient dot, drawn once to a canvas and reused as a sprite
 * texture. Cheaper and smoother than instancing real sphere geometry for
 * ~50 points, and reads as a glowing node rather than a flat circle.
 */
function useDotTexture(hex: string) {
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

function buildGraph(): { nodes: Node[]; edges: Edge[] } {
  const rand = seededRandom(1337)
  const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
    base: new THREE.Vector3(
      (rand() - 0.5) * 9.5,
      (rand() - 0.5) * 6.2,
      (rand() - 0.5) * 4 - 0.6,
    ),
    phase: rand() * Math.PI * 2,
    freqX: 0.12 + rand() * 0.1,
    freqY: 0.1 + rand() * 0.12,
    freqZ: 0.08 + rand() * 0.09,
    amp: 0.08 + rand() * 0.1,
  }))

  // Connect each node to its two nearest neighbours — a sparse, organic mesh
  // rather than a dense one that reads as a generic "network" clip-art ball.
  const edges: Edge[] = []
  const seen = new Set<string>()
  nodes.forEach((n, i) => {
    const distances = nodes
      .map((m, j) => ({ j, d: i === j ? Infinity : n.base.distanceTo(m.base) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!seen.has(key)) {
        seen.add(key)
        edges.push([i, j])
      }
    })
  })
  // A handful of longer-range edges so the graph reads as one connected
  // structure instead of isolated clusters.
  for (let k = 0; k < 10; k++) {
    const i = Math.floor(rand() * NODE_COUNT)
    const j = Math.floor(rand() * NODE_COUNT)
    if (i === j) continue
    const key = i < j ? `${i}-${j}` : `${j}-${i}`
    if (!seen.has(key)) {
      seen.add(key)
      edges.push([i, j])
    }
  }

  return { nodes, edges }
}

export function NetworkGraph() {
  const { nodes, edges } = useMemo(buildGraph, [])
  const groupRef = useRef<THREE.Group>(null)
  const nodePointsRef = useRef<THREE.Points>(null)
  const verifiedPointsRef = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const pulseRef = useRef<THREE.Points>(null)

  const amberTex = useDotTexture("#e2a545")
  const ivoryTex = useDotTexture("#f7f1e4")

  const verifiedIdx = useMemo(() => {
    const rand = seededRandom(7)
    const set = new Set<number>()
    while (set.size < VERIFIED_COUNT) set.add(Math.floor(rand() * NODE_COUNT))
    return set
  }, [])

  const regularPositions = useMemo(
    () => new Float32Array(nodes.filter((_, i) => !verifiedIdx.has(i)).length * 3),
    [nodes, verifiedIdx],
  )
  const verifiedPositions = useMemo(() => new Float32Array(verifiedIdx.size * 3), [verifiedIdx])
  const linePositions = useMemo(() => new Float32Array(edges.length * 6), [edges])

  const pulses = useMemo(() => {
    const rand = seededRandom(99)
    return Array.from({ length: PULSE_COUNT }, () => ({
      edge: edges[Math.floor(rand() * edges.length)],
      t: rand(),
      speed: 0.05 + rand() * 0.05,
    }))
  }, [edges])
  const pulsePositions = useMemo(() => new Float32Array(PULSE_COUNT * 3), [])
  const autoRotation = useRef(0.18)
  const tiltX = useRef(-0.05)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const dt = Math.min(delta, 1 / 30)

    if (groupRef.current) {
      // Continuous slow spin, plus a damped tilt toward the pointer riding
      // on top of it — two independent motions composed, not one formula
      // trying to do both.
      autoRotation.current += dt * 0.028
      tiltX.current = damp(tiltX.current, -0.05 + view.pointerLerp.y * 0.09, 2.5, dt)
      groupRef.current.rotation.y = autoRotation.current + view.pointerLerp.x * 0.14
      groupRef.current.rotation.x = tiltX.current
    }

    // Jitter each node with a small, node-specific sum of sines — organic,
    // never mechanically synchronised.
    const positions: THREE.Vector3[] = Array.from({ length: nodes.length })
    let regI = 0
    let verI = 0
    nodes.forEach((n, i) => {
      const jitterX = Math.sin(t * n.freqX + n.phase) * n.amp
      const jitterY = Math.cos(t * n.freqY + n.phase * 1.3) * n.amp
      const jitterZ = Math.sin(t * n.freqZ + n.phase * 0.7) * n.amp * 0.6
      const p = positions[i] || new THREE.Vector3()
      p.set(n.base.x + jitterX, n.base.y + jitterY, n.base.z + jitterZ)
      positions[i] = p

      if (verifiedIdx.has(i)) {
        verifiedPositions[verI * 3] = p.x
        verifiedPositions[verI * 3 + 1] = p.y
        verifiedPositions[verI * 3 + 2] = p.z
        verI++
      } else {
        regularPositions[regI * 3] = p.x
        regularPositions[regI * 3 + 1] = p.y
        regularPositions[regI * 3 + 2] = p.z
        regI++
      }
    })

    if (nodePointsRef.current) {
      const attr = nodePointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.set(regularPositions)
      attr.needsUpdate = true
    }
    if (verifiedPointsRef.current) {
      const attr = verifiedPointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.set(verifiedPositions)
      attr.needsUpdate = true
    }

    edges.forEach(([a, b], i) => {
      const pa = positions[a]
      const pb = positions[b]
      linePositions[i * 6] = pa.x
      linePositions[i * 6 + 1] = pa.y
      linePositions[i * 6 + 2] = pa.z
      linePositions[i * 6 + 3] = pb.x
      linePositions[i * 6 + 4] = pb.y
      linePositions[i * 6 + 5] = pb.z
    })
    if (lineRef.current) {
      const attr = lineRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.set(linePositions)
      attr.needsUpdate = true
    }

    pulses.forEach((pulse, i) => {
      pulse.t += dt * pulse.speed
      if (pulse.t > 1) pulse.t -= 1
      const [a, b] = pulse.edge
      const pa = positions[a]
      const pb = positions[b]
      pulsePositions[i * 3] = THREE.MathUtils.lerp(pa.x, pb.x, pulse.t)
      pulsePositions[i * 3 + 1] = THREE.MathUtils.lerp(pa.y, pb.y, pulse.t)
      pulsePositions[i * 3 + 2] = THREE.MathUtils.lerp(pa.z, pb.z, pulse.t)
    })
    if (pulseRef.current) {
      const attr = pulseRef.current.geometry.getAttribute("position") as THREE.BufferAttribute
      attr.set(pulsePositions)
      attr.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef} rotation={[-0.05, 0.18, 0]}>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#4a4033" transparent opacity={0.35} />
      </lineSegments>

      <points ref={nodePointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[regularPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={amberTex}
          size={0.16}
          transparent
          opacity={0.85}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={verifiedPointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[verifiedPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={ivoryTex}
          size={0.24}
          transparent
          opacity={0.95}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={pulseRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={amberTex}
          size={0.22}
          transparent
          opacity={1}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}
