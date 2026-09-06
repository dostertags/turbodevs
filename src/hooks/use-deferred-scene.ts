import { useEffect, useState } from "react"

import { canAffordWebGL } from "@/lib/device"

/**
 * True only once the page has finished loading, the browser is idle, and this
 * device can afford the canvas.
 *
 * The chunk used to be imported the moment the component mounted, which put a
 * 312KB download and its compile in front of everything the visitor actually
 * came for. Nothing about a decorative background needs to happen before the
 * page is usable.
 */
export function useDeferredScene(enabled: boolean): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!enabled || !canAffordWebGL()) return

    let cancelled = false
    let idleHandle = 0

    const schedule = () => {
      const idle = window.requestIdleCallback
      idleHandle = idle
        ? idle(() => !cancelled && setReady(true), { timeout: 3000 })
        : window.setTimeout(() => !cancelled && setReady(true), 1200)
    }

    if (document.readyState === "complete") schedule()
    else window.addEventListener("load", schedule, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener("load", schedule)
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleHandle)
      else window.clearTimeout(idleHandle)
    }
  }, [enabled])

  return ready
}
