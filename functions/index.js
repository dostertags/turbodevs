const { onRequest } = require("firebase-functions/v2/https")
const { logger } = require("firebase-functions")

/**
 * A same-origin, cookieless event endpoint.
 *
 * The site had no measurement of any kind, which meant no way to tell whether
 * a redesign helped: not which of the four calls to action produced contacts,
 * not whether anyone reached the work section, not whether the contact form
 * was failing. Every third-party analytics tag is also forbidden here by the
 * Content-Security-Policy (`script-src 'self'`), and adding one would mean
 * cookies and a consent banner for questions this site can answer itself.
 *
 * So: the page POSTs a tiny JSON body to `/api/e`, Firebase Hosting rewrites
 * that to this function, and it writes one structured log line. Nothing that
 * identifies a person is accepted or stored — no cookie, no id, no IP written
 * by us, no free-text. Read the results with:
 *
 *     firebase functions:log --only events
 *
 * or in the console under Logging, filtered on `jsonPayload.tdv_event`.
 *
 * Upgrade path (Phase 6.3, when the page needs to display a rolling p75):
 * enable the Cloud Firestore API once, then replace the `logger.info` call
 * with a `db.collection("events").add(payload)`. The payload shape below is
 * already the document shape.
 */

/** Only these are recorded. An unknown name is dropped, not stored. */
const ALLOWED_EVENTS = new Set([
  "page_view",
  "cta_click",
  "nav_click",
  "work_link",
  "grantfox_exit",
  "demo_deploy",
  "form_submit",
  "form_sent",
  "form_error",
  "whatsapp_click",
  "lang_change",
  "motion_paused",
  "scroll_depth",
  "web_vital",
])

const MAX_BODY_BYTES = 2048
const MAX_PROP_LENGTH = 64

/** Keeps only short scalar props, so no free text or personal data can arrive. */
function sanitizeProps(props) {
  if (!props || typeof props !== "object" || Array.isArray(props)) return {}
  const clean = {}
  for (const [key, value] of Object.entries(props).slice(0, 8)) {
    if (!/^[a-z_]{1,24}$/.test(key)) continue
    if (typeof value === "number" && Number.isFinite(value)) clean[key] = value
    else if (typeof value === "boolean") clean[key] = value
    else if (typeof value === "string" && value.length <= MAX_PROP_LENGTH) clean[key] = value
  }
  return clean
}

exports.events = onRequest(
  {
    region: "us-central1",
    cors: false, // same-origin only; the browser never sends this cross-site
    maxInstances: 3,
    memory: "128MiB",
    invoker: "public",
  },
  (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("")
      return
    }

    const raw = typeof req.rawBody?.length === "number" ? req.rawBody.length : 0
    if (raw > MAX_BODY_BYTES) {
      res.status(413).send("")
      return
    }

    let body = req.body
    if (typeof body === "string") {
      try {
        body = JSON.parse(body)
      } catch {
        body = null
      }
    }

    if (!body || typeof body.event !== "string" || !ALLOWED_EVENTS.has(body.event)) {
      // Answer 204 regardless: a beacon has nobody to report an error to, and
      // a chatty error response only invites probing.
      res.status(204).send("")
      return
    }

    logger.info("tdv_event", {
      tdv_event: body.event,
      lang: typeof body.lang === "string" && /^[a-z]{2}$/.test(body.lang) ? body.lang : "??",
      path: typeof body.path === "string" && body.path.length <= 64 ? body.path : "/",
      viewport: typeof body.viewport === "string" && /^\d{1,5}x\d{1,5}$/.test(body.viewport) ? body.viewport : "",
      props: sanitizeProps(body.props),
      at: new Date().toISOString(),
    })

    res.status(204).send("")
  },
)
