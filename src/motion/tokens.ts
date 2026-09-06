/**
 * One motion vocabulary.
 *
 * The site ran five at once: Motion tweens on a custom ease, four different
 * spring configurations, Tailwind transitions on the browser default ease, CSS
 * keyframes from 8s to 14s, and two react-three-fiber damping constants —
 * timings from 120ms to 14s with three separate easing philosophies and no
 * shared source. Motion that is not consistent does not read as motion; it
 * reads as things happening.
 *
 * Durations are in seconds because that is what Motion takes. Everything
 * outside this file should import from here rather than inventing a number.
 */

/** Near-vertical start that flattens into a long tail: leaps, then settles. */
export const EASE = [0.16, 1, 0.3, 1] as const

/** A shorter, symmetric ease for state changes that should feel instant. */
export const EASE_STATE = [0.4, 0, 0.2, 1] as const

export const DUR = {
  /** Hover, focus, colour — anything the pointer is waiting on. */
  instant: 0.15,
  /** A control changing state: a switch, a menu, a toggle. */
  state: 0.25,
  /** Content arriving on scroll. */
  enter: 0.55,
  /** The hero's opening, which is allowed to take its time — once. */
  hero: 0.8,
} as const

/** The one spring, for anything that follows a pointer or a scroll position. */
export const SPRING = { stiffness: 220, damping: 30, mass: 0.6 } as const

/** How far content travels when it arrives. Small: this is punctuation. */
export const DISTANCE = 16
