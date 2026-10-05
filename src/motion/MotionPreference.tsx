import { createContext, useContext, useEffect, useState } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

const MotionPreferenceContext = createContext(false)

function prefersReduced(): boolean {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches
}

/**
 * Writes the preference onto <html> before React renders anything: React runs
 * a parent's effects after its children's layout effects, so every scroll
 * reveal would otherwise register — and hide itself — before learning that
 * this visitor asked for no motion.
 */
export function applyStoredMotionPreference() {
  document.documentElement.dataset.motion = prefersReduced() ? "off" : "on"
}

/**
 * The page has no motion that runs on its own any more (no rotating headline,
 * no drifting background), only a short fade as sections arrive, so the
 * operating-system preference is the whole story and there is no in-page
 * switch to offer.
 */
export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [motionOff, setMotionOff] = useState(prefersReduced)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const onChange = () => setMotionOff(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.motion = motionOff ? "off" : "on"
  }, [motionOff])

  return <MotionPreferenceContext.Provider value={motionOff}>{children}</MotionPreferenceContext.Provider>
}

export function useMotionOff(): boolean {
  return useContext(MotionPreferenceContext)
}
