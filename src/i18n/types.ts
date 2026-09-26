import type { SectorKey, ServiceLineKey, TestimonialKey } from "@/content/site"

export type WorkCopy = { kicker: string; description: string }

export type StatCopy = { value: string; label: string }

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
    /**
     * The static lead reads once; `rotating` is a set of self-contained
     * phrases that crossfade in place after it, one at a time. Each entry
     * must read naturally when appended directly after `lead` with nothing
     * else in between — no shared template does the joining or inserts a
     * separator, so `lead` itself must already end with whatever separates
     * it from the rotating word in that language (a trailing space for a
     * space-delimited script; nothing at all for a locale like Chinese that
     * doesn't use inter-word spaces). A locale that needs different grammar
     * (word order, case, a trailing particle) encodes that directly in its
     * own `lead`/`rotating` strings too.
     */
    headline: { lead: string; rotating: string[] }
    paragraph: string
    ctaPrimary: string
    ctaSecondary: string
    scrollHint: string
    /** Accessible label for the hero's rotating-headline pause toggle, in
     * its "currently playing, click to pause" state (WCAG 2.2.2). */
    pauseRotation: string
    /** Same toggle's label in its "currently paused, click to resume" state. */
    resumeRotation: string
    sectors: Record<SectorKey, string>
    /** Short label naming the row of business-line buttons under the sector chips. */
    serviceLinesLabel: string
    stats: StatCopy[]
  }
  services: {
    eyebrow: string
    title: string
    items: { title: string; description: string }[]
    /** Heading over the three business-line cards. */
    linesTitle: string
    lines: Record<ServiceLineKey, { title: string; description: string; cta: string }>
  }
  testimonials: {
    eyebrow: string
    title: string
    /** `project` names what was built — a label, never a metric. */
    items: Record<TestimonialKey, { quote: string; project: string }>
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
  webVitals: {
    eyebrow: string
    caption: string
    good: string
    needsAttention: string
    waitingForPaint: string
    waitingForInteraction: string
    metrics: {
      lcp: { label: string; description: string }
      inp: { label: string; description: string }
      cls: { label: string; description: string }
    }
  }
  whatsapp: {
    label: string
    greeting: string
  }
  /**
   * Strings that only ever reach assistive technology. They used to be
   * hard-coded English literals inside components ("(opens in new tab)",
   * "Select language"), so a screen-reader user reading the site in any of the
   * other six languages was handed English mid-sentence.
   */
  a11y: {
    skipToContent: string
    newTab: string
    selectLanguage: string
    /** Site-wide motion switch (WCAG 2.2.2), in its "currently playing" state. */
    pauseMotion: string
    /** The same switch, currently paused. */
    resumeMotion: string
  }
}
