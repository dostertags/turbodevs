export type WorkCopy = { kicker: string; description: string }

export type NoteCopy = {
  title: string
  dek: string
  readTime: string
  body: string[]
}

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    work: string
    grantfox: string
    approach: string
    notes: string
    contact: string
    startProject: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    headline: string
    paragraph: string
    ctaPrimary: string
    ctaSecondary: string
    scrollHint: string
  }
  services: {
    eyebrow: string
    title: string
    items: { title: string; description: string }[]
  }
  work: {
    eyebrow: string
    title: string
    items: Record<
      | "sii"
      | "previred"
      | "stellarfit"
      | "glowcheck"
      | "turbotrabajo"
      | "battery-storage-reporting",
      WorkCopy
    >
  }
  grantfox: {
    eyebrow: string
    title: string
    paragraph: string
    points: string[]
    cta: string
  }
  approach: {
    eyebrow: string
    title: string
    paragraph: string
    pillars: { title: string; body: string }[]
  }
  demo: {
    eyebrow: string
    title: string
    paragraph: string
    panelLabel: string
    toggles: {
      jwt: { label: string; description: string }
      seed: { label: string; description: string }
      nodeEnv: { label: string; description: string }
    }
    deployButton: string
    terminalPrompt: string
    emptyState: string
    reasons: { jwtMissing: string; seedOn: string }
    refusedPrefix: string
    successLine: string
  }
  notes: {
    eyebrow: string
    title: string
    paragraph: string
    readSuffix: string
    items: Record<"fail-closed-deployments" | "llm-grounding" | "verified-claims-ledger", NoteCopy>
  }
  contact: {
    eyebrow: string
    title: string
    paragraph: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    sendingLabel: string
    sendButton: string
    sentMessage: string
    errorMessage: string
    errorCta: string
  }
  footer: {
    sourceLabel: string
  }
  whatsapp: {
    label: string
    greeting: string
  }
}
