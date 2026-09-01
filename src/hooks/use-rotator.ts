import { useEffect, useState } from "react"

/**
 * Advances an index 0..count-1 on a fixed interval, wrapping around. Used to
 * drive the hero's rotating headline word and its paired 3D visual off the
 * same clock so they change in lockstep.
 *
 * When `paused` (pass `useReducedMotion()`), the timer never starts and the
 * index sticks at 0 — the rotating content freezes on its first value
 * instead of cycling, since prefers-reduced-motion means content that
 * changes on its own shouldn't.
 */
export function useRotator(count: number, intervalMs: number, paused = false) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (paused || count <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [count, intervalMs, paused])

  // If the item count shrinks (e.g. a locale swap mid-session) below the
  // current index, snap back in range rather than pointing at `undefined`.
  return count <= 0 ? 0 : index % count
}
