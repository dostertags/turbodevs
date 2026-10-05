import type { CaseKey, InterestKey, NoteSlug, OpenSourceSlug } from "@/content/site"

export type NoteCopy = {
  title: string
  dek: string
  readTime: string
  body: string[]
}

export type StageCopy = {
  title: string
  /** One sentence, the promise of the stage. */
  line: string
  body: string
  /** Where the stage has already been done for a client. Absent if nothing public backs it. */
  proof?: string
}

export type CaseCopy = {
  sector: string
  challenge: string
  built: string
  /** The client's own words. Absent when the client has not given a statement. */
  quote?: string
}

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    services: string
    work: string
    notes: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    headline: string
    paragraph: string
    ctaPrimary: string
    ctaSecondary: string
    /** Introduces the row of client names under the hero. */
    clientsLabel: string
  }
  problem: {
    eyebrow: string
    title: string
    body: string
  }
  services: {
    eyebrow: string
    title: string
    /** Exactly four, in order: diagnose, build, deploy, run. */
    stages: StageCopy[]
  }
  work: {
    eyebrow: string
    title: string
    challengeLabel: string
    builtLabel: string
    confidentialClient: string
    visitLabel: string
    cases: Record<CaseKey, CaseCopy>
    openSourceTitle: string
    openSourceIntro: string
    openSource: Record<OpenSourceSlug, { kicker: string; description: string }>
  }
  notes: {
    eyebrow: string
    title: string
    paragraph: string
    readSuffix: string
    items: Record<NoteSlug, NoteCopy>
  }
  contact: {
    eyebrow: string
    title: string
    paragraph: string
    nameLabel: string
    companyLabel: string
    roleLabel: string
    optionalLabel: string
    emailLabel: string
    interestLabel: string
    interestPlaceholder: string
    interests: Record<InterestKey, string>
    messageLabel: string
    sendingLabel: string
    sendButton: string
    sentMessage: string
    errorMessage: string
    errorCta: string
    directLabel: string
  }
  footer: {
    companyTitle: string
    writingTitle: string
    contactTitle: string
    openSourceLabel: string
    sourceLabel: string
  }
  whatsapp: {
    label: string
    greeting: string
  }
  /**
   * Strings that only ever reach assistive technology. They used to be
   * hard-coded English literals inside components, so a screen-reader user
   * reading the site in any of the other six languages was handed English
   * mid-sentence.
   */
  a11y: {
    skipToContent: string
    newTab: string
    selectLanguage: string
  }
}
