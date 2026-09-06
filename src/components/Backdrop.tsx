import { NetworkGraphStatic } from "@/components/NetworkGraphStatic"

/**
 * The page's background.
 *
 * This was a full-viewport WebGL canvas running a five-pass post-processing
 * chain (bloom, chromatic aberration, noise, vignette, SMAA) underneath all
 * 7,800–11,300px of the page, costing a 1.06MB chunk — 312KB compressed —
 * fetched and compiled on every visit, phones included. It drew drifting dots
 * behind text.
 *
 * The geometry was never the expensive part: it is 46 seeded points and their
 * nearest-neighbour edges. `NetworkGraphStatic` draws exactly the same
 * constellation as inline SVG, in the first paint, for a few kilobytes of
 * markup and no JavaScript afterwards. three, drei and postprocessing are gone
 * from the project entirely.
 */
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <NetworkGraphStatic className="h-full w-full opacity-90" />
    </div>
  )
}
