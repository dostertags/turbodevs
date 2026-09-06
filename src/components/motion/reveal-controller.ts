/**
 * One controller for every scroll-reveal on the page.
 *
 * The obvious implementation — an IntersectionObserver per element, revealing
 * on `isIntersecting` — has a failure mode that shipped to production: an
 * element that goes from *below* the viewport to *above* it without ever being
 * on screen never crosses an intersection threshold, so the observer never
 * fires at all. That happens whenever the scroll position jumps: a fragment
 * link, a restored position, a reload partway down, a fast flick. Every
 * section skipped that way stayed at `opacity: 0` permanently, which is how a
 * section heading came to sit above a completely empty grid.
 *
 * A geometry sweep cannot miss that case, because it asks the only question
 * that matters — "is this element at or above the fold yet?" — rather than
 * waiting to be told about a transition that never happened. The set empties
 * as the page is read, and the listeners detach with it, so the steady state
 * is no work at all.
 */

/** Reveal anything still hidden this long after registering, regardless. */
const FAILSAFE_MS = 3000

const pending = new Map<HTMLElement, number>()
let frame = 0
let listening = false

function reveal(el: HTMLElement) {
  const timer = pending.get(el)
  if (timer !== undefined) window.clearTimeout(timer)
  pending.delete(el)
  el.classList.remove("tg-reveal-pending")
  if (pending.size === 0) stopListening()
}

function sweep() {
  frame = 0
  // Slightly inside the fold, so an element reveals as it arrives rather than
  // exactly on the boundary.
  const limit = window.innerHeight * 0.92
  // Deleting the current key during a Map iteration is well defined.
  for (const el of pending.keys()) {
    if (el.getBoundingClientRect().top < limit) reveal(el)
  }
}

function schedule() {
  if (frame) return
  frame = requestAnimationFrame(sweep)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule, { passive: true })
}

function stopListening() {
  if (!listening) return
  listening = false
  window.removeEventListener("scroll", schedule)
  window.removeEventListener("resize", schedule)
  if (frame) {
    cancelAnimationFrame(frame)
    frame = 0
  }
}

/**
 * Hide `el` until it reaches the fold, and return a cleanup function.
 *
 * Returns without doing anything — leaving the element visible — when motion
 * is switched off, or when the element is already at or above the fold. The
 * caller therefore never has to decide whether hiding is safe.
 */
export function registerReveal(el: HTMLElement, delaySeconds: number): () => void {
  if (typeof window === "undefined") return () => {}
  if (document.documentElement.dataset.motion === "off") return () => {}
  if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return () => {}

  el.style.transitionDelay = `${delaySeconds}s`
  el.classList.add("tg-reveal-pending")

  const failsafe = window.setTimeout(() => reveal(el), FAILSAFE_MS)
  pending.set(el, failsafe)
  startListening()

  return () => {
    const timer = pending.get(el)
    if (timer !== undefined) window.clearTimeout(timer)
    pending.delete(el)
    if (pending.size === 0) stopListening()
  }
}

/** Test seam: how many elements are still waiting to be revealed. */
export function pendingCount(): number {
  return pending.size
}
