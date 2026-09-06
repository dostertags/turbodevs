/**
 * The graph's geometry, with no dependency on three.js.
 *
 * This used to live inside `NetworkGraph.tsx`, which meant the only way to
 * draw the background was to load 1.06MB of WebGL machinery first — on every
 * device, including phones that never had the frame budget to render it. The
 * shape is just numbers, so it is computed here and drawn by whichever
 * renderer is appropriate: an inline SVG that costs nothing, or the canvas.
 *
 * Deterministic by construction: the same seed produces the same graph on
 * every load, in every renderer, so the SVG and the canvas draw the *same*
 * constellation rather than two different ones.
 */

export const NODE_COUNT = 46

/**
 * Exactly as many ivory "verified" nodes as real engagements featured on the
 * page below (sii, previred, stellarfit, glowcheck, turbotrabajo, Grantfox,
 * the battery-storage engagement) — a detail that encodes something true about
 * the content rather than a decorative round number.
 */
export const VERIFIED_COUNT = 7

export type GraphNode = {
  x: number
  y: number
  z: number
  /** Per-node motion parameters, used only by the animated renderer. */
  phase: number
  freqX: number
  freqY: number
  freqZ: number
  amp: number
}

export type Edge = [number, number]

/** mulberry32 — small, fast, and stable across engines. */
export function seededRandom(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function buildGraph(): { nodes: GraphNode[]; edges: Edge[] } {
  const rand = seededRandom(1337)
  const nodes: GraphNode[] = Array.from({ length: NODE_COUNT }, () => ({
    x: (rand() - 0.5) * 9.5,
    y: (rand() - 0.5) * 6.2,
    z: (rand() - 0.5) * 4 - 0.6,
    phase: rand() * Math.PI * 2,
    freqX: 0.12 + rand() * 0.1,
    freqY: 0.1 + rand() * 0.12,
    freqZ: 0.08 + rand() * 0.09,
    amp: 0.08 + rand() * 0.1,
  }))

  const distance = (a: GraphNode, b: GraphNode) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)

  // Each node joins its two nearest neighbours — a sparse, organic mesh rather
  // than a dense one that reads as generic "network" clip art.
  const edges: Edge[] = []
  const seen = new Set<string>()
  const add = (i: number, j: number) => {
    const key = i < j ? `${i}-${j}` : `${j}-${i}`
    if (seen.has(key)) return
    seen.add(key)
    edges.push([i, j])
  }

  nodes.forEach((n, i) => {
    nodes
      .map((m, j) => ({ j, d: i === j ? Infinity : distance(n, m) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
      .forEach(({ j }) => add(i, j))
  })

  // A handful of longer-range edges so it reads as one connected structure
  // instead of isolated clusters.
  for (let k = 0; k < 10; k++) {
    const i = Math.floor(rand() * NODE_COUNT)
    const j = Math.floor(rand() * NODE_COUNT)
    if (i !== j) add(i, j)
  }

  return { nodes, edges }
}

/** Which node indices are the ivory "verified" ones. */
export function verifiedIndices(): Set<number> {
  const rand = seededRandom(7)
  const set = new Set<number>()
  while (set.size < VERIFIED_COUNT) set.add(Math.floor(rand() * NODE_COUNT))
  return set
}
