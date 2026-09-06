import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import { track } from "@/lib/track"
import { view } from "@/three/state"

const STORAGE_KEY = "turbodevs:motion"

type MotionPreference = {
  /** True when this visitor has asked for no motion, by either route. */
  motionOff: boolean
  toggle: () => void
}

const MotionPreferenceContext = createContext<MotionPreference>({ motionOff: false, toggle: () => {} })

function readInitial(): boolean {
  if (typeof window === "undefined") return false
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "off") return true
    if (stored === "on") return false
  } catch {
    // Locked-down browsers throw on localStorage; fall through to the OS.
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Whether this visitor wants motion, as a real setting rather than an
 * inference, available to the whole tree.
 *
 * `prefers-reduced-motion` is an operating-system switch, and WCAG 2.2.2 is
 * explicit that it is not a substitute for a mechanism inside the content: a
 * visitor on a borrowed machine, or one who wants the rest of the web animated
 * and this page still, cannot reach it. The only in-page pause this site had
 * was attached to the rotating headline, and it stopped that one word while
 * the background graph kept turning, every entrance animation kept running and
 * the page kept scrolling under its own momentum.
 *
 * The OS preference is the default; the in-page control overrides it in either
 * direction and is remembered.
 */
export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [motionOff, setMotionOff] = useState(readInitial)

  // One attribute on <html>, so stylesheets can respond without every animated
  // rule needing to know about React.
  useEffect(() => {
    document.documentElement.dataset.motion = motionOff ? "off" : "on"
    view.reducedMotion = motionOff
  }, [motionOff])

  const toggle = useCallback(() => {
    setMotionOff((off) => {
      const next = !off
      try {
        localStorage.setItem(STORAGE_KEY, next ? "off" : "on")
      } catch {
        // Persistence is a nicety, not a requirement.
      }
      track("motion_paused", { off: next })
      return next
    })
  }, [])

  const value = useMemo(() => ({ motionOff, toggle }), [motionOff, toggle])
  return <MotionPreferenceContext.Provider value={value}>{children}</MotionPreferenceContext.Provider>
}

export function useMotionPreference(): MotionPreference {
  return useContext(MotionPreferenceContext)
}

/** Convenience for the many components that only care about the boolean. */
export function useMotionOff(): boolean {
  return useContext(MotionPreferenceContext).motionOff
}
