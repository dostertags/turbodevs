# TurboDevs

[![CI](https://github.com/dostertags/turbodevs/actions/workflows/ci.yml/badge.svg)](https://github.com/dostertags/turbodevs/actions/workflows/ci.yml)

Software engineering studio site — tailor-made web, automation, and Web3 work,
engineered to keep running the same way it's sold: reliably. Live in 7 languages at
**https://turbodevs.web.app**.

## Stack

React 19 · Vite · TypeScript · Tailwind v4 · react-three-fiber/drei/postprocessing ·
Motion · Lenis. No SSR — a plain client-rendered SPA is the right tradeoff here.

## Editorial rule

The site only states claims traced to a real source. The ledger lives in
[research/VERIFIED_FACTS.md](research/VERIFIED_FACTS.md) — read it before touching
copy on the site. Figures without a source there don't ship (fee percentages,
revenue, client names for engagements under NDA, etc. are intentionally omitted or
labeled "not yet disclosed").

## Development

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm run lint    # oxlint
npm run test    # vitest — unit/component tests
npm run build   # tsc -b && vite build — typecheck + production build
```

All three run in CI on every push and PR to `master` (see `.github/workflows/ci.yml`).

The test suite includes two regression guards worth knowing about:
- `src/i18n/i18n-completeness.test.ts` diffs every translated locale's key
  shape against `en` — the exact class of bug that once shipped the Web
  Vitals widget in English-only on every translated page now fails CI instead.
- `src/content/site.test.ts` asserts every hero sector chip only references
  `WORK` slugs that actually exist, so a claim can't quietly outlive the
  project backing it.

## Deploy

```bash
npm run deploy
```

Equivalent to:

```bash
npm run build
firebase deploy --only hosting --project turbodevs
```

`firebase.json` pins `"site": "turbodevs"`, so this deploys exactly to
`turbodevs.web.app` and nowhere else.

## Notable engineering choices

- `src/three/Scene.tsx` is lazy-loaded (`React.lazy`) so the ~440KB WebGL/Three.js
  chunk never blocks the first paint of real content.
- `src/components/WebVitals.tsx` measures *this visitor's* real Core Web Vitals
  (LCP/INP/CLS) live in the browser via the `web-vitals` package — no static or
  claimed score.
- `public/llms.txt` and the JSON-LD block in `index.html` are there for AI
  crawlers/agents and search engines respectively.
- `public/.well-known/security.txt` follows RFC 9116.
