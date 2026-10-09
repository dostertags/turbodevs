import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CAPABILITIES, ENGAGEMENTS, INDUSTRIES, INDUSTRY_PHOTO, MEDIA_CREDITS, STATS } from "@/content/site"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { Capabilities } from "@/components/sections/Capabilities"
import { Industries } from "@/components/sections/Industries"
import { Engagement } from "@/components/sections/Engagement"
import { Stats } from "@/components/sections/Stats"
import { Footer } from "@/components/sections/Footer"

const wrap = (ui: React.ReactNode) => render(<LanguageProvider>{ui}</LanguageProvider>)

describe("Stats", () => {
  it("shows every figure with the label that says exactly what it counts", () => {
    wrap(<Stats />)
    const stats = screen.getAllByTestId("stat")
    expect(stats).toHaveLength(STATS.length)
    STATS.forEach(({ key, value }, i) => {
      expect(stats[i]).toHaveTextContent(value)
      expect(stats[i]).toHaveTextContent(en.stats.items[key])
    })
  })
})

describe("Capabilities", () => {
  it("lists all eight capabilities as headed cards", () => {
    wrap(<Capabilities />)
    const cards = screen.getAllByTestId("capability")
    expect(cards).toHaveLength(CAPABILITIES.length)
    CAPABILITIES.forEach((key, i) =>
      expect(within(cards[i]).getByRole("heading", { level: 3 })).toHaveTextContent(en.capabilities.items[key].title),
    )
  })
})

describe("Industries", () => {
  it("lists every industry and credits the stock photograph", () => {
    wrap(<Industries />)
    expect(screen.getAllByTestId("industry")).toHaveLength(INDUSTRIES.length)
    expect(screen.getByRole("img", { name: en.industries.photoAlt })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: new RegExp(INDUSTRY_PHOTO.credit) })).toHaveAttribute(
      "href",
      INDUSTRY_PHOTO.creditHref,
    )
  })
})

describe("Engagement", () => {
  it("offers four ways to work together and a route to the contact form", () => {
    wrap(<Engagement />)
    expect(screen.getAllByTestId("engagement")).toHaveLength(ENGAGEMENTS.length)
    expect(screen.getByRole("link", { name: en.engagement.cta })).toHaveAttribute("href", "#contact")
  })
})

describe("Footer", () => {
  it("credits every stock clip and the photograph", () => {
    wrap(<Footer />)
    const credits = screen.getByTestId("media-credits")
    for (const name of [...MEDIA_CREDITS.footage, MEDIA_CREDITS.photo]) expect(credits).toHaveTextContent(name)
  })
})
