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
| Hero stat "1,800+ automated tests" | sii (1,178) + battery-storage-reporting (648) = 1,826, rounded **down** | 2026-09-01, sum of rows above |
| Hero stat "5 public repos" | Count of `WORK` items with a `github.com` link: sii, previred, stellarfit, glowcheck, turbotrabajo | 2026-09-01, `src/content/site.ts` |
| Hero stat "7 languages" | Count of `LANGUAGES` in `src/i18n/languages.ts` | 2026-09-01, own source |
| Hero sector chips (Government & Compliance, Web3 & Blockchain, Energy & Industrial, Consumer Software) | Each maps to real `WORK` slugs via `SECTOR_WORK_MAP` in `src/content/site.ts`, enforced by `src/content/site.test.ts` | 2026-09-01 |
| Hero sector chip "Hospitality & Small Business" | **Capability claim only** — grounded in a real, built `TurboRestaurant` project on a shared multi-vertical scaffold (`turbo-vertical-scaffold`), verified by direct read of its `package.json`. Deliberately has **no** entry in `SECTOR_WORK_MAP` (no public repo, no confirmed live URL) — never state this as a linkable/public work item without first getting one. | 2026-09-01, local repo read. User confirmed capability-only framing. |

## Explicitly NOT claimed (no source)

- Team size, headcount, or founder count.
- Revenue, funding raised, or valuation.
- Client count or "trusted by" logos beyond what's listed above.
- Grantfox's fee/commission percentage (undisclosed as of this writing).
- TurboRestaurant as a named, linkable portfolio item (no repo, no live URL — see row above).
