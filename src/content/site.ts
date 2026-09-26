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

/** Business lines the owner runs today, shown as labels under the hero's sector chips. */
export type ServiceLineKey = "hrOutplacement" | "procurement" | "leadGen"

export const SERVICE_LINES: ServiceLineKey[] = ["hrOutplacement", "procurement", "leadGen"]

/**
 * Client statements, supplied by the owner (ledger rows 22–24). Company names
 * are proper nouns and stay untranslated; the quote itself is translated per
 * locale. No quote may carry a figure the client did not give — enforced by
 * src/components/sections/Testimonials.test.tsx.
 */
export type TestimonialKey = "quorelia" | "sainzIntec" | "vertigo"

export const TESTIMONIALS: { key: TestimonialKey; company: string }[] = [
  { key: "quorelia", company: "Quorelia" },
  { key: "sainzIntec", company: "Sainz Intec" },
  { key: "vertigo", company: "Vertigo Restaurant" },
]

export const GRANTFOX_HREF = "https://grantfox.xyz/"

export const CONTACT_INFO = {
  formEmail: "dostertags@fen.uchile.cl",
  githubHref: "https://github.com/dostertags",
} as const

export const FOOTER_INFO = {
  repoHref: "https://github.com/dostertags/turbodevs",
} as const

/**
 * The page's sections, in the order they appear, and the single source of the
 * navigation. `NAV_ITEMS` used to be declared twice — verbatim, in `Nav.tsx`
 * and `Footer.tsx` — so the header and the footer could disagree about what
 * the site contains, and `Services` had no id at all: it was unreachable from
 * either, and skipped entirely by the hero's own primary call to action.
 *
 * `inNav` exists because not every section earns a slot in a header that has
 * to fit seven languages.
 */
export type SectionId = "work" | "grantfox" | "approach" | "demo" | "notes" | "contact"

export type SectionEntry = {
  id: SectionId
  /** Key into `t.nav` for the label. */
  navKey: "work" | "grantfox" | "approach" | "notes" | "contact"
  inNav: boolean
}

export const SECTIONS: SectionEntry[] = [
  { id: "work", navKey: "work", inNav: true },
  { id: "grantfox", navKey: "grantfox", inNav: true },
  { id: "approach", navKey: "approach", inNav: true },
  { id: "notes", navKey: "notes", inNav: true },
  { id: "contact", navKey: "contact", inNav: true },
]

export const NAV_SECTIONS = SECTIONS.filter((s) => s.inNav)
