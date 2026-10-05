import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { PRODUCTS } from "@/content/site"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { Products } from "@/components/sections/Products"
import { Contact } from "@/components/sections/Contact"

function renderWithContact() {
  return render(
    <LanguageProvider>
      <Products />
      <Contact />
    </LanguageProvider>,
  )
}

describe("Products", () => {
  it("is a named landmark listing every product with the work it grew out of", () => {
    renderWithContact()
    const region = screen.getByRole("region", { name: en.products.title })
    const cards = within(region).getAllByTestId("product")
    expect(cards).toHaveLength(PRODUCTS.length)
    PRODUCTS.forEach((key, i) => {
      const item = en.products.items[key]
      expect(within(cards[i]).getByRole("heading", { level: 3 })).toHaveTextContent(item.name)
      expect(cards[i]).toHaveTextContent(item.basis)
    })
  })

  it("sends a request for access to the contact form with 'products' already chosen", async () => {
    renderWithContact()
    const select = screen.getByLabelText(en.contact.interestLabel, { exact: false }) as HTMLSelectElement
    expect(select.value).toBe("")

    const first = screen.getAllByTestId("product")[0]
    const request = within(first).getByRole("link", { name: new RegExp(en.products.requestLabel) })
    expect(request).toHaveAttribute("href", "#contact")
    await userEvent.setup().click(request)

    expect(select.value).toBe("products")
  })
})
