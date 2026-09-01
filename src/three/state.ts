/**
 * A plain mutable object at module scope — deliberately NOT React state.
 *
 * Scroll and pointermove fire up to ~120x/second. If each one called
 * `setState`, React would reconcile the whole tree that often and the page
 * would stutter. Instead we write raw values here, and the WebGL render loop
 * (`useFrame`) reads them once per frame — zero React re-renders from either
 * scrolling or moving the mouse, while the 3D scene still reacts instantly.
 */
export const view = {
  /** Progress through the entire document, 0 → 1. */
  scroll: 0,
  /** Scroll velocity, roughly -1 → 1. */
  velocity: 0,
  /** Raw pointer position in normalised device coords, -1 → 1 (y is up). */
  pointer: { x: 0, y: 0 },
  /** Damped pointer. Use this for anything visual — it removes jitter. */
  pointerLerp: { x: 0, y: 0 },
  /** Viewport size in CSS pixels. */
  size: { w: 1, h: 1 },
  /** Mirrors `prefers-reduced-motion`. Every animation must respect this. */
  reducedMotion: false,
  /** Drops to `false` when the hero scrolls out, so we can skip expensive work. */
  heroVisible: true,
}

/**
 * Frame-rate independent exponential damping — identical speed at any
 * refresh rate, unlike `current += (target - current) * 0.1`.
 *
 * @param lambda higher = snappier. 4 is loose, 12 is tight.
 */
export function damp(current: number, target: number, lambda: number, dt: number) {
  return current + (target - current) * (1 - Math.exp(-lambda * dt))
}

export function clamp(v: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v))
}

/** Map a value from one range to another, clamped. */
export function mapRange(v: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const t = clamp((v - inMin) / (inMax - inMin))
  return outMin + t * (outMax - outMin)
}
