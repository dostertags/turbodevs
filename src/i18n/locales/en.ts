import type { Dictionary } from "@/i18n/types"

export const en: Dictionary = {
  meta: {
    title: "TurboDevs — Software for operations that can't stop",
    description:
      "TurboDevs is a software engineering studio. We find the process that costs your team hours or opportunities, replace it with software, and keep it running 24/7.",
  },
  nav: {
    services: "Services",
    work: "Work",
    products: "Products",
    notes: "Notes",
    contact: "Contact",
    cta: "Talk to us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Software engineering studio",
    headline: "Software for operations that can't stop.",
    paragraph:
      "Built for high-stakes software where downtime isn't an option. We engineer resilient, production-ready systems — from solar power plant monitoring and tax compliance engines to Web3 payments — backed by 24/7 operational reliability.",
    ctaPrimary: "Talk to us",
    ctaSecondary: "See the work",
    clientsLabel: "In production with",
    photoAlt: "Rows of solar panels across a desert, with mountains behind.",
    photoCredit: "Photo",
  },
  problem: {
    eyebrow: "The problem",
    title: "The work that keeps a business running is the work nobody has time to fix.",
    body: "Filings with deadlines. Plants that report every day. Bids that expire in an inbox. These processes run on spreadsheets, portals and someone's memory — until the day they don't. We replace them with software that does the work, checks its own output, and keeps going at night.",
  },
  services: {
    eyebrow: "How we work",
    title: "Four stages. Start at any one, or hand us the whole loop.",
    stages: [
      {
        title: "Diagnose",
        line: "Find the process that costs you most.",
        body: "We sit with the people who do the work, map the process step by step, and write down which steps cost hours, errors or missed opportunities — and which to automate first.",
      },
      {
        title: "Build",
        line: "Software that does the work.",
        body: "Automations, integrations and AI agents built on your own files and systems. Numbers come from code; where a model writes, it writes about facts already computed, and every figure is checked before it goes out.",
        proof: "In production: the private-bid responder at Sainz Intec.",
      },
      {
        title: "Deploy",
        line: "Inside your operation.",
        body: "We connect to the portals, files and data sources your team already uses, and work alongside the people who run them until the system is part of the routine.",
        proof: "In practice: our SII and Previred automations, built on the portals Chilean teams use every month.",
      },
      {
        title: "Run",
        line: "24/7, watched.",
        body: "We operate what we build: monitoring, daily reports and a check on every output, so it keeps working long after launch day.",
        proof: "In production: Quorelia's solar battery station and a daily battery-storage report.",
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Systems running in production today.",
    challengeLabel: "The challenge",
    builtLabel: "What we built",
    confidentialClient: "Confidential energy client",
    visitLabel: "Visit",
    cases: {
      quorelia: {
        sector: "Energy",
        challenge: "A solar battery station that has to operate day and night, with nobody standing next to it.",
        built: "The software that runs the station around the clock.",
        quote:
          "TurboDevs developed a 24/7 solar battery station for us that works day and night. It keeps running whether or not anyone is watching it, so the system does its job through the night just as it does during the day. They took the time to understand how our energy operation actually works, and built something we rely on every day.",
      },
      sainzIntec: {
        sector: "Industrial procurement",
        challenge: "Private bids and procurement requests expiring in an inbox before anyone answered them.",
        built: "An automated responder that answers private bids on its own.",
        quote:
          "TurboDevs built us a private-bid responder that works on its own — and it's bringing real new business to the company. Opportunities that used to slip past us now get answered without anyone on our team having to chase them. It has become part of how we win work, and it keeps going while we focus on delivering it.",
      },
      batteryStorage: {
        sector: "Energy",
        challenge:
          "A daily performance report for a grid-scale battery storage system, where a wrong number means a wrong operating decision.",
        built:
          "A deterministic KPI engine with a written narrative on top. Every number in the text is checked against the computed facts before the report goes out, backed by 648 automated tests.",
      },
      grantfox: {
        sector: "Web3 marketplace",
        challenge: "A live, wallet-native marketplace for AI prompts and agents, settled on Stellar.",
        built:
          "As outside contributors: deployment-safety checks, wallet-scoped authorization, and the purchase-and-delivery interface.",
      },
      vertigo: {
        sector: "Hospitality",
        challenge: "A restaurant that needed its website live quickly — and someone to keep it current.",
        built: "The website, shipped fast, with ongoing support since.",
        quote:
          "They shipped our website fast, and they've stayed with us since — always on top of what we need. When something needs to change, we tell them and it gets done, without us having to follow up. For a restaurant, that means one less thing to worry about, and a partner we can count on as the business grows.",
      },
    },
    openSourceTitle: "Open source",
    openSourceIntro: "Our own tools, public on GitHub — the engineering behind the client work.",
    openSource: {
      sii: {
        kicker: "Tax-authority automation",
        description:
          "A TypeScript core, CLI and MCP server automating Chile's tax authority (SII), with 1,178 hermetic tests.",
      },
      previred: {
        kicker: "Pension-portal automation",
        description:
          "Read-only automation of Chile's pension-contributions portal, designed so payments cannot be dispatched by construction.",
      },
      stellarfit: {
        kicker: "Web3 payments",
        description:
          "Subscription checkout settled on Stellar: access is granted only after the network confirms a single-use payment.",
      },
      glowcheck: {
        kicker: "Computer vision",
        description:
          "Face and skin analysis combining DeepFace/TensorFlow models with original skin-tone, erythema and asymmetry metrics.",
      },
      turbotrabajo: {
        kicker: "Production SaaS",
        description:
          "A job-application platform in production: Firebase auth, profile matching, a server-side token wallet and Flow.cl payments.",
      },
    },
  },
  products: {
    eyebrow: "Products",
    title: "Some problems we have solved more than once.",
    paragraph: "Ready-made systems grown out of our client and open-source work, set up for your company instead of built from scratch.",
    requestLabel: "Request access",
    items: {
      sii: {
        name: "SII automation",
        line: "Your company's workflows with Chile's tax authority, automated through a CLI and API — read-only by default.",
        basis: "Built on our open-source sii project, with 1,178 hermetic tests.",
      },
      previred: {
        name: "Previred automation",
        line: "Pension-contribution workflows on Previred, automated and read-only, with payments impossible by design.",
        basis: "Built on our open-source previred project.",
      },
      bids: {
        name: "Bid responder",
        line: "Answers private bids and procurement requests automatically, so opportunities are not lost in an inbox.",
        basis: "In production at Sainz Intec.",
      },
      energy: {
        name: "Energy reporting",
        line: "Daily KPI reports for solar and battery assets, with every number checked before the report goes out.",
        basis: "Built from our battery-storage reporting engagement.",
      },
    },
  },
  notes: {
    eyebrow: "Notes",
    title: "How we build, written down.",
    paragraph: "Short write-ups on the engineering decisions behind the work above.",
    readSuffix: "read",
    items: {
      "fail-closed-deployments": {
        title: "Why our deployments refuse to start",
        dek: "On Grantfox we made a set of misconfigurations impossible to run in production by having the process crash at boot instead of degrading quietly.",
        readTime: "5 min",
        body: [
          "We contribute to Grantfox, a wallet-native AI-prompt and agent marketplace built on Stellar, as outside contributors working against its live NestJS backend and Next.js frontend. A chunk of that work has had nothing to do with features. It has been going through the boot sequence and asking, for every environment variable that changes security behavior, what happens if this is simply left unset in production. In several places the honest answer was: the app starts anyway, using a default that was fine for a laptop and dangerous on a server.",
          "The clearest case was JWT_SECRET. Token-based auth is only as strong as the secret used to sign and verify tokens; anyone who holds that secret can mint a token claiming to be any user, because the server has no way to tell a self-issued token from one it issued itself. The backend used to fall back to a published dev-secret when JWT_SECRET wasn't set. That string exists in source history and local setup docs, which means it isn't a secret at all — it's a known value. A service running with it in production isn't weakly protected, it's unauthenticated, just with extra steps: forge a token with the well-known key, sign it, present it, and the app has no basis to refuse it.",
          "The fix was to stop tolerating the absence of JWT_SECRET once the app believes it's running for real. On boot, the app reads its environment mode, and outside of development it now requires JWT_SECRET to be explicitly set or it refuses to start. No fallback, no warning-and-continue. This is a deliberate trade: we gave up the convenience of it just runs in whatever environment someone forgot to configure, in exchange for a guarantee that a production process is never quietly running with a key an attacker can look up. A crash at deploy time is loud, immediate, and blocks the rollout. A silent fallback is invisible until someone finds it.",
          "The same pass turned up a second category that looks unrelated but isn't: PAYMENT_SIMULATION_ENABLED, MOCK_PAYMENT_ENABLED, MOCK_PAYMENT_FAIL, and DB_SEED_ON_STARTUP. Each of these exists for a real reason — you want to exercise the purchase flow without touching Stellar, or without a payment provider in the loop, or with a reproducible dataset when a fresh environment boots. The seed flag in particular writes a fabricated wallet with a 450-credit balance so there's something to test against. None of that is a problem in development. It becomes a problem the instant it's still on in a deployment real users can reach.",
          "We treat a seeded balance and a mocked payment success as the same failure mode, because structurally they are. Once that 450-credit wallet is written to the database, nothing downstream can tell it apart from a balance that arrived through an actual purchase — the wallet, transaction, and purchase code paths all read from the same tables and don't carry a provenance flag saying this credit was invented. A mock-payment flag left on has the identical property: it makes the purchase flow report success without money having moved, and that success is indistinguishable from a real one to everything reading it afterward. Fabricated state is fabricated state regardless of which flag produced it, so real deployments now refuse to start if any of these four are enabled, the same way they refuse to start without JWT_SECRET.",
          "The mechanism in both cases is the same shape: gate the unsafe behavior on the environment the process believes it's in, and make the gate fail closed rather than fail open. Fail open means an unset or misconfigured variable quietly resolves to assume dev, assume it is fine — which is exactly the setting where nobody is watching for it. Fail closed means the same missing configuration resolves to refuse to run, which turns a subtle security gap into an obvious, unmissable deploy failure. We'd rather have an engineer stare at a crashed boot log and set the right variable than have that gap sit live for however long it takes someone to notice.",
          "The general lesson we keep relearning is that developer-experience defaults and production-safety defaults are usually not the same value, and code that doesn't distinguish the two environments will eventually pick the convenient one at the worst time. It's cheaper to make that distinction explicit at process startup — one check, one place, fails loud — than to rely on every deployment being configured correctly by hand and hope the difference never matters.",
        ],
      },
      "llm-grounding": {
        title: "Teaching an LLM where the facts end",
        dek: "On a grid-scale battery reporting pipeline, we let an LLM write the sentences and never the numbers — then checked every number it wrote anyway.",
        readTime: "6 min",
        body: [
          "We built the daily performance report for a grid-scale battery energy storage system the same way we'd build any reporting pipeline, right up until the last step. SCADA data comes off the site, a Python KPI engine turns it into the numbers that matter — state of charge, charge and discharge cycles, availability, whatever the contract calls for — and those numbers get frozen into a fact set before anything else happens. The last step is prose: someone has to turn a table of KPIs into a report a human wants to read. That's the step we handed to an LLM, and it's also the step we trust the least, which is why the whole pipeline is built around not trusting it.",
          "The design choice underneath all of this is that the LLM never computes anything. It doesn't sum a column, doesn't average a week, doesn't derive a percentage from two numbers we gave it. Every number that appears in the final report was computed by the Python KPI engine, full stop, before the LLM ever sees the data. The model's job is strictly narration: given this frozen set of facts, write paragraphs a plant operator would want to read. That split matters because a deterministic KPI engine is testable in the normal sense — same input, same output, every time — and an LLM asked to also do arithmetic under the hood is neither deterministic nor, in our experience, reliably correct at it. So we don't ask it to. We ask it to write, and we let code do the only part of the job where being wrong is silent and expensive.",
          "'Frozen fact set' is doing real work in that sentence, not just sounding careful. It means the KPI engine's output is locked before the LLM is invoked — a fixed structure of numbers and labels that the model is given as context and cannot revise, recompute, or extend. The LLM can choose how to phrase a number, what order to present it in, which numbers to foreground for a given day's story, but it cannot introduce a number that isn't already sitting in that frozen set. If the model wants to say the system discharged for some number of hours, that figure has to already exist in the facts it was handed. Nothing downstream of the KPI engine gets to invent a fact.",
          "That constraint only matters if something enforces it, so after the LLM writes its draft, a separate grounding check reads the output back. Mechanically, it's straightforward: pull every numeric token out of the generated text — every figure, percentage, and count the model wrote down — and match each one against the frozen fact set. A number in the LLM's prose that isn't traceable to a number Python actually computed is a mismatch. It doesn't matter if the mismatch is a hallucinated statistic or a plausible-looking rounding of a real one that drifted in the retelling — either way, it's a number in the report that didn't come from the data, and that's exactly the failure mode this pipeline exists to catch. One unmatched numeric token anywhere in the output blocks that report from being published. Not flagged for review, not published with a caveat — blocked.",
          "We treat the grounding check as load-bearing enough that it needs its own test coverage, not just spot-checks against a few sample reports. The pipeline as a whole is backed by 648 tests, and none of them make a network call — the KPI math, the fact-freezing step, and the grounding check itself are all exercised deterministically, offline, on every run. That's a direct consequence of keeping computation and narration separate: the parts of the system that are the easiest to get catastrophically wrong (arithmetic on real energy and financial figures) are also the parts that are cheapest to test exhaustively, because they don't depend on what an LLM feels like producing that day.",
          "None of that protects you from the report simply not showing up. A pipeline that correctly refuses to publish a bad report is only half the story if nobody notices the report never ran at all — a stalled cron job and a rock-solid grounding check produce the same silence from the client's point of view. So there's a monitoring layer alongside the reporting logic: a dead-man's-switch check that expects a scheduled run to happen and raises an alert the moment one doesn't. Correctness and liveness are different failure modes, and we didn't want a fix for one to quietly stand in for the other.",
          "We didn't build it this way because LLMs are untrustworthy in some abstract sense — we built it this way because we were putting model output next to numbers a client would use to make real operating and financial decisions about a real physical asset, and 'usually right' isn't a property you can hand someone in that position. Anyone shipping LLM-generated text alongside numbers that matter is making the same bet whether they've named it or not: either the model's arithmetic is trusted implicitly, or something outside the model checks its work before a human sees it. Keeping the LLM out of the computation entirely, freezing the facts before it writes a word, and verifying every number it emits against that frozen set afterward isn't a hedge against a model being bad at math. It's a refusal to let a step we can't fully verify be the one deciding what the numbers are.",
        ],
      },
      "verified-claims-ledger": {
        title: "A ledger for every claim we publish",
        dek: "Why the sentence 'not yet disclosed' on this site and the field UNAVAILABLE in Grantfox's wallet API are the same engineering decision.",
        readTime: "5 min",
        body: [
          "Every public claim on this site is supposed to trace back to a named source — a repository, a commit, a screenshot, a README — not to our own recollection of what we built. We keep that trace in a ledger: a plain document that pairs each sentence we publish with where it came from and when we checked it. If a claim can't point at a row in that ledger, it doesn't ship. That sounds like a documentation habit. It's actually the same decision we make inside the software itself, and the clearest place to see it is a single API response inside Grantfox.",
          "Grantfox is a wallet-native marketplace for AI prompts and agents, built on Stellar, and we work on its backend and frontend as outside contributors. A wallet there carries two different kinds of balance: a ledger balance the backend can compute directly from the purchases and transactions it has recorded, and an on-chain balance that would require actually reading the Stellar network. We haven't integrated that on-chain read yet. The honest state of that piece of the system is: we don't know the number.",
          "The easy way to handle that gap is to fake it — return the ledger figure and label it the on-chain balance, or compute something plausible-looking and let the wallet screen render it like any other field. Nobody inspecting the JSON would necessarily catch it, and a dashboard where every field has a number looks more finished than one with a visible gap. We didn't do that. The API reports on-chain balance as UNAVAILABLE. Not zero, not an estimate, not the ledger number wearing an on-chain label — an explicit status that says the verification path doesn't exist yet.",
          "Transaction hashes get the same treatment. A real Stellar transaction hash is a 64-character hex string, and Grantfox populates that field only when one actually exists on-chain. When it doesn't — a transaction hasn't settled, or the flow in question doesn't produce one — the field is null. We could have shipped a placeholder, something hex-shaped that fills the field and satisfies whatever the frontend expects a string to look like there. We didn't, for the same reason the balance isn't estimated: a null is a true statement about what we know, and a fabricated hash is a lie wearing the shape of proof.",
          "Neither of those is a large decision. They're easy to miss in a diff, and no user is likely to ever ask why one wallet field says UNAVAILABLE while the rest show numbers. But they're the same decision, applied at the level of an API field instead of the level of a sentence, that governs what we let onto this site. An UNAVAILABLE status and a not yet disclosed label are the same move: when the honest answer is we don't have that number, say so instead of computing something that resembles it.",
          "That's why we don't publish Grantfox's fee or commission percentage anywhere on this site. We could estimate one from typical marketplace terms, or infer a range from the parts of the fee logic we've reviewed directly, and it would sit comfortably next to everything else in a services page. We label it not yet disclosed instead, because we don't have a source for it the way we have a source for the deployment hardening we shipped or the purchase flow we built. The same rule that keeps a null in the transaction-hash field keeps that line out of our copy.",
          "The cost is visible in both places. A wallet screen with UNAVAILABLE in it looks less finished than one where every field carries a number. A services page with not yet disclosed in it makes a flatter pitch than one with a fee percentage and a revenue projection sitting next to the rest of the numbers. Neither of us gets to pretend the gap isn't there just because filling it would read better. The alternative — inventing the missing piece — is cheap exactly once, and it's the same failure whether it surfaces as a fabricated wallet balance or a fabricated statistic on our own site.",
          "So the ledger isn't a disclaimer we bolt on after the fact to cover ourselves. It's the same discipline we build into the systems we ship, running in reverse on our own claims: before a sentence goes on this site, we ask what row backs it, the same way Grantfox's balance endpoint asks whether it actually has an on-chain read before it prints a figure. When the answer is no, the sentence — like the field — says so.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us which process can't stop.",
    paragraph: "We read every message ourselves and reply within a couple of days.",
    nameLabel: "Name",
    companyLabel: "Company",
    roleLabel: "Role",
    optionalLabel: "optional",
    emailLabel: "Work email",
    interestLabel: "What are you interested in?",
    interestPlaceholder: "Choose one",
    interests: {
      diagnose: "Diagnosing a process",
      build: "Building an automation or AI agent",
      products: "One of our products",
      run: "Running and supporting an existing system",
      other: "Something else",
    },
    messageLabel: "Tell us about the process",
    sendingLabel: "Sending…",
    sendButton: "Send",
    sentMessage: "Sent — we read every message ourselves and reply within a couple of days.",
    errorMessage: "Something went wrong sending that — try again, or email",
    errorCta: "directly.",
    directLabel: "Or write to us directly",
  },
  footer: {
    companyTitle: "Company",
    writingTitle: "Writing",
    contactTitle: "Contact",
    openSourceLabel: "Open source",
    sourceLabel: "This site's source",
  },
  whatsapp: {
    label: "WhatsApp",
    greeting: "Hi TurboDevs! I'd like to talk about a project.",
  },
  a11y: {
    skipToContent: "Skip to content",
    newTab: "opens in new tab",
    selectLanguage: "Select language",
  },
}
