# TurboDevs positioning and homepage copy (draft v1, 2026-10-05)

**Status 2026-10-05:** fully built and live. Products ship (owner will sell all four);
the hero carries a credited stock photograph (Manny Becerra / Unsplash, a Nevada solar farm,
never presented as client work); clients approved their quotes; contact uses the owner's
email and LinkedIn. The fail-closed terminal demo was removed rather than moved into a Note.
Still open: Grantfox's agreement to be listed under "In production with".

Step 1 of the redesign: what TurboDevs says, before how it looks. Built from
the AfterQuery study: one idea, services as numbered stages, proof as named
case studies, a contact form that qualifies the buyer. Every claim below is
traceable to `research/VERIFIED_FACTS.md`; lines marked **[confirm]** need the
owner before they ship.

---

## 1. The one idea

**Recommended**

> **Software for operations that can't stop.**

Why this one: it is the thread through everything we have actually built —
tax and pension filings that have deadlines (sii, previred), a solar battery
station that runs day and night (Quorelia), daily battery-storage reporting,
a bid responder that answers while the team sleeps (Sainz Intec), a
restaurant site that has to be up at dinner time (Vertigo). It also keeps
the "24/7" promise the owner already chose, but says it as a business
outcome instead of a tech feature. It contains no "AI", which is the point:
AI is how we build, not what we sell.

**Alternatives considered**

| Option | Upside | Why not first |
|---|---|---|
| "AI implementation for Chilean companies" | Rides demand; clear buyer | The exact "cheesy AI startup" signal we want to lose; every agency says it |
| "Automation for compliance and energy" | Our strongest proof sits here | Too narrow for Sainz Intec, Vertigo, Grantfox; caps the market |

---

## 2. Homepage, top to bottom

### Meta
- **Title:** TurboDevs — Software for operations that can't stop
- **Description:** TurboDevs is a software engineering studio. We find the process that costs your team hours or opportunities, replace it with software, and keep it running 24/7.

### Navigation
`Services` · `Work` · `Products` · `Notes` · `Contact`   **[Talk to us]** (one dark button)

Removed: Grantfox and Approach as top-level items (Grantfox moves into Work; Approach is now the Services stages).

### Hero
- **Eyebrow:** Software engineering studio
- **Headline:** Software for operations that can't stop.
- **Subheadline (owner's line, kept):** Built for high-stakes software where downtime isn't an option. We engineer resilient, production-ready systems — from solar power plant monitoring and tax compliance engines to Web3 payments — backed by 24/7 operational reliability.
- **Buttons:** `Talk to us` (primary) · `See the work` (secondary)
- **Image:** one real, black-and-white photograph of the work — the solar installation, a client's operation **[confirm: owner supplies photo + permission]**. No constellation, no chips, no stats line.

### Clients (only what we can name)
> Trusted in production by **Quorelia** · **Sainz Intec** · **Vertigo Restaurant** · contributor to **Grantfox**

Set as text wordmarks until logos arrive with permission. **[confirm: each client agrees to be listed]**

### The problem (one short paragraph)
- **Label:** The problem
- **Heading:** The work that keeps a business running is the work nobody has time to fix.
- **Body:** Filings with deadlines. Plants that report every day. Bids that expire in an inbox. These processes run on spreadsheets, portals and someone's memory — until the day they don't. We replace them with software that does the work, checks its own output, and keeps going at night.

### Services — four stages, one loop
- **Label:** How we work
- **Heading:** Four stages. Start at any one, or hand us the whole loop.

| | Stage | One line | What it means | Proof link |
|---|---|---|---|---|
| 01 | **Diagnose** | Find the process that costs you most. | We sit with the people who do the work, map the process step by step, and write down which steps cost hours, errors or missed opportunities — and which to automate first. | — |
| 02 | **Build** | Software that does the work. | Automations, integrations and AI agents built on your own files and systems. Numbers come from code; where a model writes, it writes about facts already computed, and every figure is checked before it goes out. | Sainz Intec bid responder |
| 03 | **Deploy** | Inside your operation. | We connect to the portals, files and data sources your team already uses and work alongside the people who run them, until the system is part of the routine. | sii · previred |
| 04 | **Run** | 24/7, watched. | We operate what we build: monitoring, daily reports and checks on every output, so it keeps working after launch day. | Quorelia · battery-storage reporting |

### Work — case studies, not quotes
- **Label:** Work
- **Heading:** Systems running in production today.

Each card: client · one-line problem · what we built · result · the client's own sentence. Results appear **only** when the client supplies the figure in writing.

1. **Quorelia — Energy.** A solar battery station that has to operate day and night. *Built:* the 24/7 software behind it. *Result:* **[confirm: one figure from Quorelia, or omit]**. *Quote:* "TurboDevs developed a 24/7 solar battery station for us that works day and night."
2. **Sainz Intec — Industrial procurement.** Private bids expiring before anyone answered them. *Built:* an automated private-bid responder. *Result:* "bringing real new business to the company" (client's words) **[confirm: a figure, e.g. bids answered per month]**.
3. **Battery-storage reporting — Energy (client confidential).** Daily performance reporting for a grid-scale battery system. *Built:* a deterministic KPI engine with a written narrative, every number checked before publication; 648 automated tests.
4. **Grantfox — Web3 marketplace.** Outside contributor to a live wallet-native marketplace on Stellar: deployment-safety hardening, wallet-scoped authorization, the purchase-and-delivery UI.
5. **Vertigo Restaurant — Hospitality.** Website shipped fast, supported since. *Quote:* "They shipped our website fast, and they've stayed with us since — always on top of what we need."

Open-source work (sii, previred, stellarfit, glowcheck, turbotrabajo) moves to a smaller "Open source" row below the case studies — it shows engineering depth without pretending to be client work.

### Products — request access
- **Label:** Products
- **Heading:** Some problems we have solved more than once.
- **Body:** Ready-made systems from our client and open-source work, set up for your company in days instead of months.

| Product | One line | Backed by |
|---|---|---|
| **SII automation** | Tax-authority workflows automated through a CLI and API, read-only by default. | sii repo |
| **Previred automation** | Pension-contribution portal workflows, read-only, with payments impossible by design. | previred repo |
| **Bid responder** | Answers private bids and procurement requests automatically. | Sainz Intec |
| **Energy reporting** | Daily KPI reports for solar and battery assets, every number checked. | battery-storage engagement |

Button: `Request access` → contact form with "Products" preselected.
**[confirm: owner is willing to sell each of these as a repeatable product]**

### Notes (renamed from field notes, now dated)
- **Label:** Notes
- **Heading:** How we build, written down.
- Keep the three existing articles; add a date to each; the fail-closed terminal demo moves inside the deployment article instead of sitting on the homepage.

### Contact — qualify the buyer
- **Heading:** Tell us which process can't stop.
- **Body:** We read every message ourselves and reply within two business days.
- **Fields:** First name · Last name · Company · Role · Work email · What are you interested in? · Tell us about the process
- **Interest options:** Diagnose a process · Build an automation or AI agent · One of our products · Run and support an existing system · Something else
- **Below the form:** email `dostertags@fen.uchile.cl` **[confirm: a company address such as contacto@ would read more professionally]** · WhatsApp link (as text, not a floating bubble)

### Footer
Three columns: **Company** (Services, Work, Products) · **Writing** (Notes, Open source) · **Contact** (email, WhatsApp, GitHub, LinkedIn **[confirm: company LinkedIn]**). Language switcher stays.

---

## 3. Voice rules

1. Short declarative sentences. One claim per sentence.
2. Say what the software does for the operation, not which stack it uses. Stack names go inside case studies.
3. No "AI-powered", "cutting-edge", "revolutionary", "seamless", "next-generation".
4. Talk about software working, not failing (owner's standing rule).
5. Numbers only from the ledger. A client's number only in writing from the client.

## 4. Removed from the homepage

Constellation background · rotating headline + its pause button · site-wide motion switch · scroll progress bar · 8 sector/business-line chips · "1,800+ tests · 5 public repos" line · floating WhatsApp bubble · live Web Vitals widget · fail-closed terminal demo (moves into a Note) · standalone Grantfox section (moves into Work) · "Approach" section (replaced by the four stages).

## 5. Decisions needed from the owner

1. Approve the one idea ("Software for operations that can't stop") or pick an alternative.
2. Permission from Quorelia, Sainz Intec and Vertigo to be named as case studies; any figure they will put in writing; logos.
3. Which of the four products you are willing to sell repeatedly.
4. A real photograph for the hero.
5. A company email address and LinkedIn page, if they exist.
