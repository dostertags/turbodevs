import { useMemo } from "react"

import { buildGraph, verifiedIndices } from "@/three/graph"

/**
 * The background constellation, drawn as inline SVG.
 *
 * This is the same graph as the WebGL version — same seed, same 46 nodes, same
 * edges, same seven ivory "verified" points — projected orthographically and
 * drawn by the renderer every browser already has. It exists because the
 * canvas version cost 1.06MB of JavaScript (312KB compressed) that was fetched
 * and compiled on every device before anything could be interactive, to draw
 * some drifting dots behind the text. On a phone that is a straight loss: the
 * chunk is most of the page's download budget, and the GPU work underneath a
 * full-page scroll is most of its frame budget.
 *
 * Cost here: a few kilobytes of markup, no JavaScript after first render, and
 * a CSS drift on seven elements that `prefers-reduced-motion` and the site's
 * own motion switch already stop.
 */

/** Viewbox chosen so the graph's ±4.75 × ±3.1 world units map cleanly. */
const VIEW_W = 1000
const VIEW_H = 640

export function NetworkGraphStatic({ className }: { className?: string }) {
  const { nodes, edges, verified } = useMemo(() => {
    const graph = buildGraph()
    return { ...graph, verified: verifiedIndices() }
  }, [])

  // Orthographic projection with a mild depth cue: nodes further back are
  // smaller and dimmer, which is most of what the perspective camera was
  // actually contributing.
  const project = (n: { x: number; y: number; z: number }) => {
    const depth = (n.z + 2.6) / 4 // roughly 0..1, near..far
    return {
      cx: VIEW_W / 2 + (n.x / 9.5) * VIEW_W * 0.98,
      cy: VIEW_H / 2 - (n.y / 6.2) * VIEW_H * 0.98,
      scale: 0.55 + depth * 0.45,
    }
  }

  const points = nodes.map(project)

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <g stroke="var(--color-wire)" strokeWidth="0.6" opacity="0.42">
        {edges.map(([a, b], i) => (
          <line key={i} x1={points[a].cx} y1={points[a].cy} x2={points[b].cx} y2={points[b].cy} />
        ))}
      </g>

      {nodes.map((_, i) => {
        const p = points[i]
        const isVerified = verified.has(i)
        const fill = isVerified ? "#f7f1e4" : "var(--color-accent)"
        const r = (isVerified ? 3.2 : 2.1) * p.scale
        return (
          <g
            key={i}
            className={isVerified ? "tg-node-verified" : undefined}
            style={isVerified ? { animationDelay: `${(i % 7) * -1.7}s` } : undefined}
          >
            {/*
              A second, much larger and much fainter disc behind each point.
              The canvas version got its luminous quality from an additive
              bloom pass over the whole screen; this is the same read for the
              cost of one more circle, with no filter and no post-processing —
              an SVG blur filter would have reintroduced exactly the kind of
              per-frame GPU work this replaced.
            */}
            <circle cx={p.cx} cy={p.cy} r={r * 3.4} fill={fill} opacity={0.09 * p.scale} />
            <circle cx={p.cx} cy={p.cy} r={r} fill={fill} opacity={(isVerified ? 0.95 : 0.8) * p.scale} />
          </g>
        )
      })}
    </svg>
  )
}
