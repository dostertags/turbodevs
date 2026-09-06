import { useEffect } from "react"
import Lenis from "lenis"

/**
 * How far below the top of the viewport an anchored section should land —
 * clearance for the fixed 64px header. Read from the same CSS custom property
 * that drives `scroll-margin-top`, so the smooth path and the native
 * (reduced-motion) path cannot drift apart: they used to disagree by 8px,
 * which is enough to leave a section heading tucked under the header on one
 * path but not the other.
 */
function anchorOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--tg-anchor-offset")
  return Number.parseFloat(raw) || 88
}

/**
 * Marks every in-page anchor target focusable. A fragment navigation focuses
 * its target only if the target can hold focus, and a <section> cannot, so
 * without this the browser moves the viewport but leaves focus on the link —
 * the next Tab then resumes from the header instead of the section just
 * jumped to. Deliberately separate from (and not gated by) the smooth-scroll
 * effect below, which returns early under prefers-reduced-motion.
 */
function useAnchorTargetsFocusable() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    for (const anchor of anchors) {
      const href = anchor.getAttribute("href")
      if (!href || href === "#") continue
      const target = document.querySelector<HTMLElement>(href)
      if (target && !target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1")
    }
  }, [])
}

/**
 * Lenis smooth scroll, wired into the shared `view` state. Lenis drives the
 * real `window.scrollTop`, so anchor links, `position: sticky`, and Motion's
 * `useScroll` all keep reading correct values.
 */
export function useSmoothScroll(motionOff = false) {
  useAnchorTargetsFocusable()

  useEffect(() => {
    // Smooth scrolling is motion too: it takes the page out of the visitor's
    // direct control for over a second per jump, which is exactly what someone
    // switching motion off is asking to stop.
    if (motionOff) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      const href = anchor?.getAttribute("href")
      if (!href || href === "#") return

      const target = document.querySelector<HTMLElement>(href)
      if (!target) return

      // `detail === 0` means the click came from the keyboard (Enter/Space on a
      // focused link), not a pointer. Hijacking that with preventDefault used
      // to swallow the activation entirely: the page slid to the section but
      // the browser never performed a fragment navigation, so focus stayed on
      // the link, the next Tab continued from the nav instead of the section,
      // and the URL never gained the hash. Let the browser handle keyboard
      // activation natively — it updates the hash and lands the scroll using
      // `scroll-margin-top`. The one thing it will not do is focus a plain
      // <section>, because a section is not focusable, so make it focusable
      // *before* returning and the browser's own fragment navigation moves
      // focus there for us.
      if (e.detail === 0) {
        target.setAttribute("tabindex", "-1")
        return
      }

      e.preventDefault()
      // The URL should reflect where the visitor is, so the section is
      // linkable and Back works, but without the browser's own instant jump.
      history.pushState(null, "", href)
      lenis.scrollTo(target, {
        offset: -anchorOffset(),
        // A fixed 1.4s made a short hop crawl and a full-page jump feel rushed.
        duration: Math.min(1.4, Math.max(0.6, Math.abs(target.getBoundingClientRect().top) / 2500)),
        onComplete: () => {
          // Pointer users get focus moved too, so the keyboard picks up from
          // the section they just navigated to rather than from the nav.
          target.setAttribute("tabindex", "-1")
          target.focus({ preventScroll: true })
        },
      })
    }

    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [motionOff])
}
