// Non-translatable shared data: URLs, slugs, tech-stack tags, proper nouns.
// Human-readable copy lives in src/i18n/locales/*.ts — every claim there must
// still trace to a row in `research/VERIFIED_FACTS.md`.

export type WorkSlug =
  | "sii"
  | "previred"
  | "stellarfit"
  | "glowcheck"
  | "turbotrabajo"
  | "battery-storage-reporting"

export type WorkItem = {
  slug: WorkSlug
  name: string
  stack: string[]
  links: { label: string; href: string }[]
  metric?: string
}

export const META = {
  url: "https://turbodevs.web.app",
  themeColor: "#0a0908",
} as const

export const WORK: WorkItem[] = [
  {
    slug: "sii",
    name: "sii",
    stack: ["TypeScript", "CLI", "MCP", "Monorepo"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/sii" }],
    metric: "1,178 hermetic tests · 48 ADRs",
  },
  {
    slug: "previred",
    name: "previred",
    stack: ["TypeScript", "Playwright", "Security"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/previred" }],
  },
  {
    slug: "stellarfit",
    name: "stellarfit",
    stack: ["Stellar", "Web3", "Node.js", "Express"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/stellarfit" }],
  },
  {
    slug: "glowcheck",
    name: "glowcheck",
    stack: ["Python", "TensorFlow", "OpenCV", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/dostertags/glowcheck" }],
  },
  {
    slug: "turbotrabajo",
    name: "turbotrabajo",
    stack: ["Next.js", "React", "Firebase", "TypeScript"],
    links: [
      { label: "Live", href: "https://turbotrabajo.vercel.app" },
      { label: "GitHub", href: "https://github.com/dostertags/turbotrabajo" },
    ],
  },
  {
    slug: "battery-storage-reporting",
    name: "Grid-scale battery reporting",
    stack: ["Python", "Deterministic KPIs", "LLM grounding", "Monitoring"],
    links: [],
    metric: "648 tests · fail-closed monitoring",
  },
]

export type SectorKey = "government" | "web3" | "energy" | "consumerSaas" | "hospitality"

// Which real, public WORK slugs back each hero sector chip. "hospitality" is
// deliberately empty — it's a capability claim (see research/VERIFIED_FACTS.md),
// not backed by a public, linkable project, so it must never gain a slug here
// without also gaining a real link in WORK.
export const SECTOR_WORK_MAP: Record<SectorKey, WorkSlug[]> = {
  government: ["sii", "previred"],
  web3: ["stellarfit"],
  energy: ["battery-storage-reporting"],
  consumerSaas: ["turbotrabajo", "glowcheck"],
  hospitality: [],
}

export const GRANTFOX_HREF = "https://grantfox.xyz/"

export const CONTACT_INFO = {
  formEmail: "dostertags@fen.uchile.cl",
  githubHref: "https://github.com/dostertags",
} as const

export const FOOTER_INFO = {
  repoHref: "https://github.com/dostertags/turbodevs",
} as const
