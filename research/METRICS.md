# Metrics — what we measure, and what it was before

The site had no measurement of any kind until 2026-09-06, which meant no way to
tell whether any of this work helped. This file is the record: what is
collected, what the numbers were when collection started, and what each phase
of the overhaul is expected to move.

Same discipline as `VERIFIED_FACTS.md` — a number in here is either measured and
dated, or it says it is modelled.

## How it is collected

A same-origin beacon (`src/lib/track.ts` → `/api/e` → `functions/index.js`),
written as one structured log line per event. No cookie, no identifier, no IP
recorded by us, no free text; an unknown event name is dropped rather than
stored. It works under the site's `script-src 'self'` policy, which forbids
every third-party analytics tag.

Read it with:

```bash
firebase functions:log --only events --project turbodevs
```

Events: `page_view`, `cta_click{id}`, `nav_click{id}`, `work_link{slug,label}`,
`grantfox_exit`, `demo_deploy{jwt,seed}`, `form_submit`, `form_sent`,
`form_error{reason}`, `whatsapp_click`, `lang_change{to}`, `scroll_depth{section}`,
`web_vital{metric,value,rating}`.

`scroll_depth` fires per named section rather than per percentage, because the
page is 7,800–11,300px tall depending on the language, so "50%" is a different
place in German than in English.

## Baseline

**There is no pre-Phase-1 field baseline, and that was a deliberate trade.**
The plan called for deploying the beacon first and collecting a week before
changing anything. The Phase 1 findings included a contact form that could
report "Sent" for a message nobody received, and three claims that broke the
site's own editorial rule. Holding those live for a week to get a cleaner
comparison was not a defensible trade, so the beacon and the fixes shipped
together and the baseline below is **post-Phase-1**.

Later phases compare against this row. Where a Phase 1 change plausibly moved a
number, that is stated rather than hidden.

### Lab, 2026-09-06 (measured on the production build, `npm run build`)

| Metric | Value | Source |
|---|---|---|
| Entry chunk | 614,888 B raw / 196.4 KB gzip | `npm run size` |
| 3D chunk (three + drei + postprocessing) | 1,064,003 B raw / 307.3 KB gzip | `npm run size` |
| Stylesheet | 37.9 KB raw / 7.8 KB gzip | `npm run size` |
| Fonts on disk | 339.1 KB across 33 files | `npm run size` |
| Transferred on first load (latin visitor) | ~584 KB | Playwright resource timing, 2026-09-05 |
| WebGL contexts | 1 (was 2 before Phase 1) | `e2e/hero.spec.ts` |
| Page height, 1440×900 | 7,799 px | Playwright |
| Page height, 390×844 | 11,326 px | Playwright |
| Unit tests / e2e checks | 86 / 64 | `npm run test`, `npm run test:e2e` |
| Serious+critical axe violations | 0 | `e2e/a11y.spec.ts` |

### Field, from 2026-09-06

Not yet collected — the beacon deploys with this commit. Fill in after seven
days: sessions, `form_sent` per 100 sessions, `cta_click` → `form_sent` rate,
share of sessions reaching `scroll_depth{section:work}`, `demo_deploy` rate,
`whatsapp_click` vs `form_sent` split, and the p75 of each `web_vital`.

### Modelled, not measured

Lighthouse mobile was **modelled** during the audit (Moto G-class, 4× CPU, slow
4G) at roughly FCP 2.5–3.5s, LCP 4–6s, TBT 1.5–3s, performance 35–55. No
Lighthouse run has been performed against production. Treat these as the reason
the performance phases exist, not as a measurement, and replace this block with
a real run before claiming any improvement.

## What each phase should move

| Phase | Expected effect |
|---|---|
| 1 (done) | No transfer change. Removes one WebGL context; fixes a form that could silently drop leads. |
| 2 | No transfer change. Motion whose resting state needs no JS frame. |
| 3 | The 3D chunk stops loading on phones entirely; deleting it outright is the first named cut. |
| 5 | Entry chunk toward 120 KB gzip (locale dictionaries load per page); LCP stops waiting on JavaScript; six locales become indexable. |
| 6 | Budgets become absolute gates rather than ratchets. |

## Owner actions still outstanding

- **Prove the contact form delivers.** Send one real message through
  <https://turbodevs.web.app/#contact> and record the FormSubmit activation date
  as an Operational row in `VERIFIED_FACTS.md`. Nothing has verified end-to-end
  delivery; the code now reports failures honestly, but that is not the same as
  knowing it works.
- **Enable the Cloud Firestore API** (one click in the console) whenever the
  rolling p75 should be readable *by the page* rather than from logs. The
  beacon payload is already the document shape.
