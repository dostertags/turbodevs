# TurboDevs

[![CI](https://github.com/dostertags/turbodevs/actions/workflows/ci.yml/badge.svg)](https://github.com/dostertags/turbodevs/actions/workflows/ci.yml)

Software engineering studio site — *software for operations that can't stop*.
Live in 7 languages at **https://turbodevs.web.app**. Positioning and copy rules
live in [research/POSITIONING.md](research/POSITIONING.md).

## Stack

React 19 · Vite · TypeScript · Tailwind v4 · Motion · Lenis. Newsreader (headlines)
and Mona Sans (interface), self-hosted. No SSR — a plain client-rendered SPA is the right tradeoff here.

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
npm run lint      # oxlint
npm run test      # vitest — unit/component tests
npm run build     # tsc -b && vite build — typecheck + production build
npm run size      # bundle budget (run after build)
npm run test:e2e  # playwright — 5 viewports x 7 locales, incl. axe
```

All of these run in CI on every push and PR to `master` (see
`.github/workflows/ci.yml`).

The suites exist to catch specific classes of bug that have actually shipped here:

- `src/i18n/i18n-completeness.test.ts` diffs every translated locale's key
  shape against `en`, so a section can't ship in English on a translated page.
- `src/components/sections/FeaturedWork.test.tsx` requires a ledger row for
  every client named on the page, and fails if any client quote, in any
  locale, carries a figure the client did not give.
- `src/i18n/claims.test.ts` is the machine-checkable half of the editorial
  rule below: banned vocabulary (claims with no ledger row) and per-string
  length budgets, across all seven locales plus `index.html` and `llms.txt`.
  It was written because three claims had already drifted past the rule,
  including a hero stat that read "7 **programming** languages" in six
  languages.
- `src/index.contrast.test.ts` computes WCAG contrast straight from the
  `@theme` tokens in `index.css`, so a colour can't be nudged without the
  consequence failing CI.
- `src/components/sections/Contact.test.tsx` pins the one thing the form must
  never do: report "Sent" for a message that was not delivered.
- `e2e/` covers what jsdom structurally cannot see — computed opacity and
  filters mid-scroll, a fixed element covering a control, whether the header
  fits in Portuguese at 820px, whether the headline is actually painted, and
  an axe scan of the built page.

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

- The first screen is static markup: no rotating text, no WebGL, no entrance
  animation, so it paints the same on a slow phone as on a fast laptop.
- Visible is the resting state of every section; a short fade is added only to
  content below the fold (`src/components/motion/Reveal.tsx`).
- `public/llms.txt` and the JSON-LD block in `index.html` are there for AI
  crawlers/agents and search engines respectively.
- `public/.well-known/security.txt` follows RFC 9116.
