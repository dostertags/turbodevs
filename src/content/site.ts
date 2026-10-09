// Non-translatable shared data: URLs, slugs, proper nouns, dates.
// Human-readable copy lives in src/i18n/locales/*.ts — every claim there must
// still trace to a row in `research/VERIFIED_FACTS.md`.

export const META = {
  url: "https://turbodevs.web.app",
  themeColor: "#f6f4ef",
} as const

/**
 * Client work, in the order the Work section shows it. `company` is a proper
 * noun and is never translated; a case without one is a confidential client
 * and is shown under `t.work.confidentialClient`. Every company named here
 * needs a row in the ledger (tested).
 */
export type CaseKey = "quorelia" | "sainzIntec" | "batteryStorage" | "grantfox" | "vertigo"

export type CaseStudy = {
  key: CaseKey
  company?: string
  href?: string
}

export const CASES: CaseStudy[] = [
  { key: "quorelia", company: "Quorelia" },
  { key: "sainzIntec", company: "Sainz Intec" },
  { key: "batteryStorage" },
  { key: "grantfox", company: "Grantfox", href: "https://grantfox.xyz/" },
  { key: "vertigo", company: "Vertigo Restaurant" },
]

/** The clients named under the hero: only those who appear as case studies. */
export const CLIENT_NAMES = CASES.flatMap((c) => (c.company ? [c.company] : []))

/** Our own public repositories, shown below the client work. */
export type OpenSourceSlug = "sii" | "previred" | "stellarfit" | "glowcheck" | "turbotrabajo"

export type OpenSourceItem = {
  slug: OpenSourceSlug
  links: { label: string; href: string }[]
}

export const OPEN_SOURCE: OpenSourceItem[] = [
  { slug: "sii", links: [{ label: "GitHub", href: "https://github.com/dostertags/sii" }] },
  { slug: "previred", links: [{ label: "GitHub", href: "https://github.com/dostertags/previred" }] },
  { slug: "stellarfit", links: [{ label: "GitHub", href: "https://github.com/dostertags/stellarfit" }] },
  { slug: "glowcheck", links: [{ label: "GitHub", href: "https://github.com/dostertags/glowcheck" }] },
  {
    slug: "turbotrabajo",
    links: [
      { label: "Live", href: "https://turbotrabajo.vercel.app" },
      { label: "GitHub", href: "https://github.com/dostertags/turbotrabajo" },
    ],
  },
]

export type NoteSlug = "fail-closed-deployments" | "llm-grounding" | "verified-claims-ledger"

/** Each note with the date it was first published on this site (ISO, from git history). */
export const NOTES: { slug: NoteSlug; published: string }[] = [
  { slug: "llm-grounding", published: "2026-09-01" },
  { slug: "verified-claims-ledger", published: "2026-09-01" },
  { slug: "fail-closed-deployments", published: "2026-09-01" },
]

/** Repeatable systems we sell, each grown out of real client or open-source work. */
export type ProductKey = "sii" | "previred" | "bids" | "energy"

export const PRODUCTS: ProductKey[] = ["sii", "previred", "bids", "energy"]

/** What a visitor can ask for in the contact form; the value is sent with the message. */
export type InterestKey = "diagnose" | "build" | "products" | "run" | "other"

export const INTERESTS: InterestKey[] = ["diagnose", "build", "products", "run", "other"]

/**
 * Stock media. None of it shows a client's site or our team; every file is
 * credited in the footer and recorded in research/VERIFIED_FACTS.md.
 */
export const HERO_VIDEO = {
  desktop: "/media/hero.mp4",
  mobile: "/media/hero-mobile.mp4",
  poster: "/media/hero-poster.webp",
} as const

/** One clip per service stage, in stage order: diagnose, build, deploy, run. */
export const STAGE_MEDIA = ["diagnose", "build", "deploy", "run"].map((key) => ({
  key,
  video: `/media/${key}.mp4`,
  poster: `/media/${key}-poster.webp`,
}))

/** The desert solar photograph, now the banner over the industries list. */
export const INDUSTRY_PHOTO = {
  src1600: "/hero-solar-1600.webp",
  src1000: "/hero-solar-1000.webp",
  credit: "Manny Becerra",
  creditHref: "https://unsplash.com/photos/a-large-array-of-solar-panels-in-a-desert-Ss73u_UKr3U",
} as const

export const MEDIA_CREDITS = {
  footage: ["Roman Odintsov", "Tima Miroshnichenko", "Usman Abdulrasheed Gambo", "MrColo", "Andrey Kirievskiy"],
  footageSource: "Pexels",
  photo: "Manny Becerra",
  photoSource: "Unsplash",
} as const

export type StatKey = "tests" | "systems" | "portals" | "uptime"
export const STATS: { key: StatKey; value: string }[] = [
  { key: "tests", value: "1,800+" },
  { key: "systems", value: "5" },
  { key: "portals", value: "2" },
  { key: "uptime", value: "24/7" },
]

export type CapabilityKey =
  | "automation"
  | "software"
  | "ai"
  | "data"
  | "integration"
  | "cloud"
  | "monitoring"
  | "security"
export const CAPABILITIES: CapabilityKey[] = [
  "automation",
  "software",
  "ai",
  "data",
  "integration",
  "cloud",
  "monitoring",
  "security",
]

export type IndustryKey = "energy" | "government" | "procurement" | "hospitality" | "web3" | "hr"
export const INDUSTRIES: IndustryKey[] = ["energy", "government", "procurement", "hospitality", "web3", "hr"]

export type EngagementKey = "diagnostic" | "project" | "team" | "operation"
export const ENGAGEMENTS: EngagementKey[] = ["diagnostic", "project", "team", "operation"]

export const CONTACT_INFO = {
  formEmail: "dostertags@fen.uchile.cl",
  githubHref: "https://github.com/dostertags",
  linkedinHref: "https://www.linkedin.com/in/diego-ostertag-79ab1688/",
  whatsappNumber: "56976953752",
} as const

export const FOOTER_INFO = {
  repoHref: "https://github.com/dostertags/turbodevs",
} as const

/**
 * The page's sections in order, and the single source of both navigations.
 */
export type SectionId = "services" | "work" | "products" | "notes" | "contact"

export const NAV_SECTIONS: { id: SectionId }[] = [
  { id: "services" },
  { id: "work" },
  { id: "products" },
  { id: "notes" },
  { id: "contact" },
]
