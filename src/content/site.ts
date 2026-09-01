// Every claim in this file must trace to a row in `research/VERIFIED_FACTS.md`.
// If you can't point at the source, don't add the line.

export type WorkItem = {
  slug: string
  name: string
  kicker: string
  description: string
  stack: string[]
  links: { label: string; href: string }[]
  metric?: string
}

export const META = {
  title: "TurboDevs — Software Engineering, Built Fail-Closed",
  description:
    "TurboDevs is a full-service software engineering studio building bespoke systems across web, automation, and Web3 — with a fail-closed engineering discipline carried from tax-authority automation to blockchain payments.",
  url: "https://turbodevs.web.app",
  themeColor: "#0a0908",
} as const

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Grantfox", href: "#grantfox" },
  { label: "Approach", href: "#approach" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
] as const

export const HERO = {
  eyebrow: "Software engineering studio",
  headline: "We build software that fails closed, not silently.",
  paragraph:
    "Full-stack systems, blockchain integrations, and automation pipelines for teams who'd rather see a system refuse to start than watch it guess. Polyglot engineering — TypeScript, Python, Solidity/Soroban — proven across tax compliance, Web3 payments, and production SaaS.",
  ctaPrimary: { label: "See the work", href: "#work" },
  ctaSecondary: { label: "Talk to us", href: "#contact" },
} as const

export const SERVICES = [
  {
    title: "Full-stack product engineering",
    description:
      "React/Next.js frontends, TypeScript and Python services, and the CI/test discipline to keep them shipping — the same stack behind turbotrabajo's production job-matching SaaS.",
  },
  {
    title: "Web3 & blockchain integration",
    description:
      "Wallet-native auth, on-chain payment verification, and smart-contract-adjacent systems on Stellar/Soroban — built for stellarfit's Horizon-confirmed checkout and shipped inside Grantfox's live marketplace.",
  },
  {
    title: "Automation & compliance systems",
    description:
      "Headless-browser and API automation for processes regulators actually check — read-only by default, fail-closed under uncertainty, the pattern behind sii and previred.",
  },
  {
    title: "AI-integrated pipelines, grounded",
    description:
      "LLMs write prose about numbers your code already computed — never the numbers themselves. Every generated claim is checked back against a frozen fact set before it ships.",
  },
] as const

export const WORK: WorkItem[] = [
  {
    slug: "sii",
    name: "sii",
    kicker: "Tax-authority automation",
    description:
      "A TypeScript core, CLI, and MCP server automating Chile's tax authority (SII), built around fail-closed guardrails rather than best-effort scripts.",
    stack: ["TypeScript", "CLI", "MCP", "Monorepo"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/sii" }],
    metric: "1,178 hermetic tests · 48 ADRs",
  },
  {
    slug: "previred",
    name: "previred",
    kicker: "Pension-portal automation",
    description:
      "Read-only automation of Chile's pension-contributions portal, designed so payment programs are undispatchable by construction — not just discouraged by a code review.",
    stack: ["TypeScript", "Playwright", "Security"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/previred" }],
  },
  {
    slug: "stellarfit",
    name: "stellarfit",
    kicker: "Web3 payments",
    description:
      "Subscription checkout settled on the Stellar blockchain — access is granted only after Horizon confirms a memo-matched, single-use payment, no custodial trust required.",
    stack: ["Stellar", "Web3", "Node.js", "Express"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/stellarfit" }],
  },
  {
    slug: "glowcheck",
    name: "glowcheck",
    kicker: "Computer vision",
    description:
      "Face and skin analysis combining DeepFace/TensorFlow demographic models with original ITA skin-tone, erythema, and facial-asymmetry metrics.",
    stack: ["Python", "TensorFlow", "OpenCV", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/glowcheck" }],
  },
  {
    slug: "turbotrabajo",
    name: "turbotrabajo",
    kicker: "Production SaaS",
    description:
      "A production job-application platform: Firebase auth, profile matching, a server-authoritative token wallet, and Flow.cl payments end to end.",
    stack: ["Next.js", "React", "Firebase", "TypeScript"],
    links: [
      { label: "Live", href: "https://turbotrabajo.vercel.app" },
      { label: "GitHub", href: "https://github.com/dostertags/turbotrabajo" },
    ],
  },
  {
    slug: "battery-storage-reporting",
    name: "Grid-scale battery reporting",
    kicker: "Energy · AI-grounded reporting",
    description:
      "Automated daily performance reporting for a grid-scale battery storage system: a deterministic KPI engine paired with an LLM narrative layer whose every generated number is checked back against the frozen facts before publication — one unmatched figure blocks the report.",
    stack: ["Python", "Deterministic KPIs", "LLM grounding", "Monitoring"],
    links: [],
    metric: "648 tests · fail-closed monitoring",
  },
]

export const GRANTFOX = {
  eyebrow: "Featured engagement",
  title: "Contributing to Grantfox's live Stellar marketplace",
  paragraph:
    "Grantfox runs a wallet-native marketplace for AI prompts and agents, settled on Stellar. We work directly in its NestJS backend and Next.js frontend as outside contributors — the kind of work that only counts if a real reviewer, not us, decides it's correct.",
  points: [
    "Hardened deployment safety: non-development environments now refuse to boot without an explicit JWT secret, and refuse to start with simulated-payment or database-seed flags left on.",
    "Wallet-scoped authorization: balance, transaction history, and purchases are derived only from the authenticated principal — verified so one account can't read or touch another's.",
    "Shipped marketplace UI: the dashboard, marketplace, asset-detail, and wallet pages implementing the platform's prompt purchase-and-delivery flow.",
  ],
  cta: { label: "Visit Grantfox", href: "https://grantfox.xyz/" },
} as const

export const APPROACH = {
  eyebrow: "How we work",
  title: "Fail closed. State only what's verified.",
  paragraph:
    "Every engagement above runs the same discipline: a system should refuse to operate under uncertainty rather than guess, and every published number should trace back to a source someone can check. The line between what an LLM writes and what it's allowed to claim is enforced in code, not by hoping the prompt held.",
  pillars: [
    {
      title: "Deterministic first",
      body: "Numbers come from code, not from a model. Where we use an LLM at all, it writes prose about facts already computed — it never computes the fact itself.",
    },
    {
      title: "Fail closed",
      body: "Missing configuration, an unrotated key, an unverifiable input — the system stops and says so, rather than falling back to a guess that looks fine until it isn't.",
    },
    {
      title: "Traceable claims",
      body: "Every figure we publish, about our own work or a client's, is backed by a source we can point to. If we can't source it, we don't ship it.",
    },
  ],
} as const

export const CONTACT = {
  eyebrow: "Get in touch",
  title: "Tell us what you're building.",
  paragraph:
    "Full-stack product work, a Web3 integration, or an automation pipeline that has to hold up under audit — send the shape of the problem and we'll tell you plainly whether it's a fit.",
  formEmail: "dostertags@fen.uchile.cl",
  githubHref: "https://github.com/dostertags",
} as const

export const FOOTER = {
  line: `© ${new Date().getFullYear()} TurboDevs.`,
  repoHref: "https://github.com/dostertags/turbodevs",
} as const
