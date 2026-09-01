import { cn } from "@/lib/utils"

interface DepthLayersProps {
  className?: string
}

/**
 * A quiet corner accent for the hero: four translucent "planes" stacked with
 * a slight offset, each drifting up and down on its own slow, independent
 * cycle — 3D positioning plus time, per the brief. Pure CSS (see the
 * `tg-depth-*` rules and `@keyframes tg-depth-drift-*` in index.css) — no
 * canvas, no requestAnimationFrame loop — so the site's existing global
 * `prefers-reduced-motion` rule already neutralizes the motion for free, and
 * it costs nothing next to the trimmed WebGL scene.
 *
 * Purely decorative: hidden from assistive tech and never keyboard-reachable.
 */
export function DepthLayers({ className }: DepthLayersProps) {
  return (
    <div aria-hidden="true" className={cn("tg-depth-layers", className)}>
      <div data-testid="depth-layer" className="tg-depth-layer tg-depth-layer-1" />
      <div data-testid="depth-layer" className="tg-depth-layer tg-depth-layer-2" />
      <div data-testid="depth-layer" className="tg-depth-layer tg-depth-layer-3" />
      <div data-testid="depth-layer" className="tg-depth-layer tg-depth-layer-4" />
    </div>
  )
}
