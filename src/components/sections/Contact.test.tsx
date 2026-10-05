import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { LanguageProvider } from "@/i18n/LanguageContext"
import { en } from "@/i18n/locales/en"
import { Contact } from "@/components/sections/Contact"
import { INTERESTS } from "@/content/site"

/**
 * The form is the only conversion path the studio owns, and it used to decide
 * "delivered" from the HTTP status alone. FormSubmit answers 200 with
 * `{"success":"false"}` for the failures that actually happen — an inbox whose
 * activation link was never clicked, a rejected captcha, a rate limit — so the
 * visitor read "Sent" while nothing arrived. These tests pin the distinction.
 */

function renderContact() {
  return render(
    <LanguageProvider>
      <Contact />
    </LanguageProvider>,
  )
}

function reply(body: unknown, ok = true, status = 200) {
  return Promise.resolve({ ok, status, json: () => Promise.resolve(body) } as Response)
}

async function fillAndSubmit() {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText(new RegExp(`^${en.contact.nameLabel}`)), "Ada")
  await user.type(screen.getByLabelText(new RegExp(en.contact.companyLabel)), "Analytical Engines")
  await user.type(screen.getByLabelText(new RegExp(en.contact.emailLabel)), "ada@example.com")
  await user.selectOptions(screen.getByLabelText(en.contact.interestLabel, { exact: false }), "build")
  await user.type(screen.getByLabelText(new RegExp(en.contact.messageLabel)), "A payments integration.")
  await user.click(screen.getByRole("button", { name: new RegExp(en.contact.sendButton) }))
}

describe("Contact form delivery", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('confirms only when FormSubmit reports success:"true"', async () => {
    vi.mocked(fetch).mockReturnValue(reply({ success: "true", message: "The form was submitted successfully." }))
    renderContact()
    await fillAndSubmit()

    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent(en.contact.sentMessage))
  })

  it('does NOT claim success when the reply is 200 with success:"false"', async () => {
    vi.mocked(fetch).mockReturnValue(
      reply({ success: "false", message: "Please activate your email by clicking the link we sent you." }),
    )
    renderContact()
    await fillAndSubmit()

    const alert = await screen.findByRole("alert")
    expect(alert).toHaveTextContent(en.contact.errorMessage)
    // FormSubmit's own explanation is surfaced, because it is the only thing
    // that tells the owner their inbox was never activated.
    expect(alert).toHaveTextContent("activate your email")
    expect(screen.queryByText(en.contact.sentMessage)).not.toBeInTheDocument()
  })

  it("reports an error when the request fails outright", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("Network down"))
    renderContact()
    await fillAndSubmit()

    expect(await screen.findByRole("alert")).toHaveTextContent(en.contact.errorMessage)
    expect(screen.queryByText(en.contact.sentMessage)).not.toBeInTheDocument()
  })

  it("moves focus to the confirmation so it is announced and reachable", async () => {
    vi.mocked(fetch).mockReturnValue(reply({ success: "true" }))
    renderContact()
    await fillAndSubmit()

    await waitFor(() => expect(screen.getByRole("status")).toHaveFocus())
  })

  it("asks for no captcha it cannot render, and carries a honeypot instead", () => {
    const { container } = renderContact()
    expect(container.querySelector('input[name="_captcha"]')).toHaveValue("false")
    expect(container.querySelector('input[name="_honey"]')).toBeInTheDocument()
  })

  it("qualifies the enquiry: company, role, and what the visitor is interested in", async () => {
    vi.mocked(fetch).mockReturnValue(reply({ success: "true" }))
    renderContact()
    const select = screen.getByLabelText(en.contact.interestLabel, { exact: false })
    for (const key of INTERESTS) {
      expect(within(select).getByRole("option", { name: en.contact.interests[key] })).toHaveValue(key)
    }
    // Role is the one optional field — asking for a title must not cost a lead.
    expect(screen.getByLabelText(new RegExp(en.contact.roleLabel))).not.toBeRequired()

    await fillAndSubmit()
    const body = vi.mocked(fetch).mock.calls[0][1]!.body as FormData
    expect(body.get("company")).toBe("Analytical Engines")
    expect(body.get("interest")).toBe("build")
  })

  it("offers a direct email and WhatsApp alongside the form", () => {
    renderContact()
    expect(screen.getAllByRole("link", { name: /dostertags@fen\.uchile\.cl/ })[0]).toHaveAttribute(
      "href",
      "mailto:dostertags@fen.uchile.cl",
    )
    expect(screen.getByRole("link", { name: new RegExp(en.whatsapp.label) }).getAttribute("href")).toMatch(
      /^https:\/\/wa\.me\/56976953752\?text=/,
    )
  })

  it("labels the fields for autofill and sizes them so iOS does not zoom", () => {
    renderContact()
    const name = screen.getByLabelText(new RegExp(`^${en.contact.nameLabel}`))
    const email = screen.getByLabelText(new RegExp(en.contact.emailLabel))
    expect(name).toHaveAttribute("autocomplete", "name")
    expect(email).toHaveAttribute("autocomplete", "email")
    // Anything below 16px triggers Safari's focus zoom on iPhone.
    for (const field of [name, email]) {
      expect(field.className).toContain("text-[16px]")
    }
  })
})
