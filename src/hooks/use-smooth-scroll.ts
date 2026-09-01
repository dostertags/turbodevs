import { useEffect } from "react"
import Lenis from "lenis"

import { view } from "@/three/state"

/**
 * Lenis smooth scroll, wired into the shared `view` state. Lenis drives the
 * real `window.scrollTop`, so anchor links, `position: sticky`, and Motion's
 * `useScroll` all keep reading correct values.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })

    lenis.on("scroll", (inst: Lenis) => {
      view.scroll = inst.progress || 0
      view.velocity = Math.max(-1, Math.min(1, inst.velocity / 40))
      view.heroVisible = inst.scroll < window.innerHeight * 0.9
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

      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
    }

    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", onClick)
      lenis.destroy()
    }
  }, [])
}
