# Verified facts — source ledger

Same discipline as `otecai/research/DATOS_VERIFICADOS.md`: the site only states
what is traced below to a real source. No figure on the public site should
exist without a row here. If a claim can't be sourced, it doesn't ship.

| Claim on site | Source | Verified |
|---|---|---|
| `sii` — TypeScript core + CLI + MCP server, Chile's tax authority, 1,178 hermetic tests, 48 ADRs, fail-closed guardrails | github.com/dostertags/sii, repo description + topics (`automation, chile, cli, mcp, monorepo, typescript`) | 2026-09-01, GitHub API |
| `previred` — read-only automation of Chile's pension-contributions portal, fail-closed rail | github.com/dostertags/previred, repo description + topics (`automation, cli, playwright, security, typescript`) | 2026-09-01, GitHub API |
| `stellarfit` — subscription checkout paid on Stellar, Horizon-confirmed memo-matched payment | github.com/dostertags/stellarfit, repo description + topics (`blockchain, express, nodejs, payments, stellar, web3`) | 2026-09-01, GitHub API |
| `glowcheck` — CV/ML face + skin analysis, DeepFace/TensorFlow + original ITA/erythema/asymmetry metrics | github.com/dostertags/glowcheck, repo description + topics (`computer-vision, firebase, machine-learning, opencv, python, tensorflow`) | 2026-09-01, GitHub API |
| `turbotrabajo` — production job-application SaaS, Firebase auth, server-authoritative token wallet, Flow.cl payments; live at turbotrabajo.vercel.app | github.com/dostertags/turbotrabajo, repo description + `homepage` field | 2026-09-01, GitHub API |
| Grantfox contribution — NestJS/Next.js wallet-native Stellar marketplace; fail-closed deployment-mode hardening (refuses to boot without `JWT_SECRET` outside dev/test, refuses simulated-payment/seed flags in real deploys); wallet-scoped auth (balance/transactions/purchases derived only from the authenticated principal); Market V1 purchase-and-delivery UI | Direct code review, `grantfoxissues/issue2/Backend` (README.md), `grantfoxissues/issue4/UI` (README.md) | 2026-09-01, local repo read. **"AgentVerse" name excluded from public copy per instruction.** |
| Grantfox reputation tiers (Explorer 0–999 → Legend 20,000+) | Screenshot of contribute.grantfox.xyz/leaderboard, supplied directly by the user | 2026-09-01 |
| Battery-storage reporting engagement — deterministic KPI engine, LLM narrative layer with a grounding check that blocks publication on any unmatched number, 648 tests, fail-closed monitoring | `plantasolar/README.md` | 2026-09-01, local repo read. **Client names (Grenergy/CATL/ProyectaPV) intentionally omitted from public copy — confidentiality default, not confirmed for public use.** |
| Testimonial — **Quorelia**: developed a 24/7 solar battery station that works day and night | Client statement supplied by the owner, verbatim original: *"TurboDevs developed a working 24/7 solar battery station that works day and night"*. Shipped with grammar cleaned only. | 2026-09-26, owner. **Owner to confirm the client approved publication of this wording.** |
| Testimonial — **Sainz Intec**: built an automated private-bid responder that is bringing in real new business | Client statement supplied by the owner, verbatim original: *"TurboDevs developed a working automatically working private bid responder that is getting real new business to the company"*. Grammar cleaned only. | 2026-09-26, owner. **Owner to confirm client approval.** |
| Testimonial — **Vertigo Restaurant**: website shipped fast, ongoing relationship, on top of their needs | Statement supplied by the owner: *"Happy on our fast shipping on their website and our continuous relationship with them so we are always on top of their needs"*. Recast in the client's voice without adding facts. | 2026-09-26, owner. **The original reads as the studio describing the client — owner to confirm this is Vertigo's own statement and that they approved it.** |
| Testimonials expanded to roughly three times their original length (2026-09-26, at the owner's request) | The added sentences restate the same points — runs around the clock, answers bids without anyone chasing them, changes get done without follow-up — and add no figures, results or capabilities. **They are still words the clients did not say: each client must approve the expanded wording.** | 2026-09-26, owner |
| **Not shipped** from the same brief: "reduced operational costs by 40%", "eliminated our grid dependency", "3x more qualified leads monthly", "AI-powered RFQ automation engine", "lightning-fast logistics integration" | Proposed rewrites that add figures and capabilities none of the three clients stated. Enforced by `src/components/sections/FeaturedWork.test.tsx` (no digit in any quote but "24/7"). **To ship one: get the figure from the client, in writing, and add it to their row above.** | 2026-09-26 |
| Hero subheadline "solar power plant monitoring" | The battery-storage reporting engagement (row 16, `plantasolar/README.md`: daily performance reporting and fail-closed monitoring) and the Quorelia testimonial (24/7 solar battery station). Wording chosen by the owner. | 2026-09-26, owner |
| Hero "In production with Quorelia · Sainz Intec · Grantfox · Vertigo Restaurant" | Each is a case study on the page, backed by the rows above (Quorelia, Sainz Intec, Vertigo testimonials; Grantfox row 14). Grantfox is an outside-contributor relationship: our code runs in its live marketplace. **Owner to confirm each client agrees to be named.** | 2026-10-05, redesign |
| Services stages Diagnose · Build · Deploy · Run | Capability statements describing how engagements run. The proof line under each cites only rows above: Build → Sainz Intec; Deploy → sii and previred (rows 9–10; SII and Previred filings are monthly); Run → Quorelia and the battery-storage engagement (row 16). Diagnose carries no proof line because no public artefact backs it yet. | 2026-10-05, owner-approved positioning (`research/POSITIONING.md`) |
| Case-study "challenge" and "what we built" lines | Restate the client statements and engagement rows above; the only figure, "648 automated tests", is row 16. Enforced by `src/i18n/claims.test.ts` (every digit in those lines must appear in this ledger). | 2026-10-05 |
| Notes publish dates (1 September 2026) | First commit containing each article, `git log -S` on the article title (`d18eaf9`). | 2026-10-05, git history |
| Contact form delivery (FormSubmit) | Activated by the owner on 2026-09-26 (an earlier submission that day had returned *"This form needs Activation"*). A test submission through the live site's own form then returned `{"success":"true","message":"The form was submitted successfully."}` and the page showed its "Sent" confirmation. **Inbox receipt to be confirmed by the owner.** | 2026-09-26, live-site submission |

## Retired in the 2026-10-05 redesign (still true, no longer on the page)

The hero chips, the stats line and the business-line labels were removed for design reasons, not because the claims were wrong. Their rows are kept here so the claims can return without re-verification.

| Claim | Source | Verified |
|---|---|---|
| Hero stat "1,800+ automated tests" | sii (1,178) + battery-storage-reporting (648) = 1,826, rounded **down** | 2026-09-01, sum of rows above |
| Hero stat "5 public repos" | Count of `WORK` items with a `github.com` link: sii, previred, stellarfit, glowcheck, turbotrabajo | 2026-09-01, `src/content/site.ts` |
| Hero stat "7 languages" | Count of `LANGUAGES` in `src/i18n/languages.ts` | 2026-09-01, own source |
| Hero sector chips (Government & Compliance, Web3 & Blockchain, Energy & Industrial, Consumer Software) | Each maps to real `WORK` slugs via `SECTOR_WORK_MAP` in `src/content/site.ts`, enforced by `src/content/site.test.ts` | 2026-09-01 |
| Hero sector chip "Hospitality & Small Business" | **Capability claim only** — grounded in a real, built `TurboRestaurant` project on a shared multi-vertical scaffold (`turbo-vertical-scaffold`), verified by direct read of its `package.json`. Deliberately has **no** entry in `SECTOR_WORK_MAP` (no public repo, no confirmed live URL) — never state this as a linkable/public work item without first getting one. | 2026-09-01, local repo read. User confirmed capability-only framing. |
| Hero labels "Human Resources & Outplacement", "Private Procurement & Bidding", "Lead Generation" | Owner-stated current business lines, shown as decorative labels only (no links, no descriptions). Procurement is also backed by the Sainz Intec row above; HR by turbotrabajo (row 13) and previred (row 10); Lead Generation is a capability claim only. | 2026-09-26, owner |

## Removed from the site (the claim outran its source)

| Claim | Why it no longer ships | Date |
|---|---|---|
| `Solidity/Soroban` in the hero paragraph, and `smart-contract-adjacent systems on Stellar/Soroban` in Services | No row here mentions either. stellarfit is a Horizon-confirmed **payment** integration; no repository in this ledger contains Solidity or Soroban contract work. Restated as wallet-native auth and on-chain payment verification on Stellar, which rows 11 and 14 do support. | 2026-09-06 |
| Hero stat `7 languages` | The row below is real, but the stat described **this site’s own UI locale count**, not the work — and all six translations rendered it as *programming* languages (de "Programmiersprachen", es "lenguajes", zh "编程语言"), which is false. Removed rather than reworded; the slot is refilled with a ledger-linked proof in a later phase. | 2026-09-06 |
| `full-service` (meta description in 7 locales, `index.html`, JSON-LD, `llms.txt`) | A breadth claim with no source, on a site that deliberately publishes no team size. | 2026-09-06 |
| `llms.txt`: on-chain balance reported as unavailable, transaction hashes populated only when real, purchase state machine that cannot double-register a retried purchase | Real observations from the Grantfox code review, but row 14 does not carry them and no public artefact backs them. Trimmed to what row 14 states. **To restore: add a row citing a public PR/commit, or a maintainer statement.** | 2026-09-06 |

Enforced by `src/i18n/claims.test.ts`, which fails CI if any of these strings
returns to any locale, to `index.html`, or to `public/llms.txt`.

## Explicitly NOT claimed (no source)

- Team size, headcount, or founder count.
- Revenue, funding raised, or valuation.
- Client count or "trusted by" logos beyond what's listed above. The three testimonials are set as text wordmarks; no client logo has been supplied with permission to use it.
- Grantfox's fee/commission percentage (undisclosed as of this writing).
- TurboRestaurant as a named, linkable portfolio item (no repo, no live URL — see row above).
