/**
 * The site's only measurement, and deliberately the smallest thing that can
 * answer the questions the overhaul asks: which call to action produces
 * contacts, whether anyone reaches the work, and whether the contact form is
 * failing in the field.
 *
 * It is same-origin (`/api/e`, rewritten by Firebase Hosting to a Cloud
 * Function), so it works under `script-src 'self'` and `connect-src 'self'`
 * with no third-party tag. It sets no cookie, sends no identifier, and cannot
 * be tied to a person: an event name, the language, the path, a viewport
 * bucket, and at most a few short properties.
 */

export type TrackEvent =
  | "page_view"
  | "cta_click"
  | "nav_click"
  | "work_link"
  | "form_submit"
  | "form_sent"
  | "form_error"
  | "whatsapp_click"
  | "lang_change"
  | "scroll_depth"

type Props = Record<string, string | number | boolean>

const ENDPOINT = "/api/e"

/** `vite preview` and `vite dev` have no function behind /api/e. */
const isProductionHost = () =>
  typeof location !== "undefined" && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)

export function track(event: TrackEvent, props?: Props): void {
  if (typeof window === "undefined" || !isProductionHost()) return

  const body = JSON.stringify({
    event,
    props,
    lang: document.documentElement.lang || "en",
    path: location.pathname.slice(0, 64),
    viewport: `${window.innerWidth}x${window.innerHeight}`,
  })

  try {
    // sendBeacon survives the page being unloaded by the click that triggered
    // it — the case that matters most here, since several of these events fire
    // on a link that navigates away.
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }))) return
    void fetch(ENDPOINT, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } })
  } catch {
    // Measurement must never break the page it measures.
  }
}

/**
 * Fires `scroll_depth` once per threshold per page view, so a session that
 * reaches the work section is distinguishable from one that bounces off the
 * hero. Thresholds are section-relative rather than percentage-based because
 * the page's height changes with the language.
 */
export function trackScrollDepth(sectionIds: string[]): () => void {
  if (typeof window === "undefined" || !isProductionHost()) return () => {}

  const seen = new Set<string>()
  const targets = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)
  if (targets.length === 0) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || seen.has(entry.target.id)) continue
        seen.add(entry.target.id)
        track("scroll_depth", { section: entry.target.id })
      }
    },
    { threshold: 0.3 },
  )
  targets.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
