import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Send } from "lucide-react"

import { Reveal } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CONTACT_INFO, INTERESTS } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

type Status = "idle" | "sending" | "sent" | "error"

/** Shape of a FormSubmit AJAX reply. `success` arrives as the string "true". */
type FormSubmitReply = { success?: boolean | string; message?: string }

const isDelivered = (body: FormSubmitReply) => body.success === true || body.success === "true"

// 16px text: below that, iOS Safari zooms the page in on focus and never back out.
const FIELD =
  "w-full rounded-lg border border-border-strong bg-bg px-3.5 py-2.5 text-[16px] text-ink outline-none focus-visible:border-ink"

function Label({ htmlFor, text, required, optional }: { htmlFor: string; text: string; required?: boolean; optional?: string }) {
  return (
    <label htmlFor={htmlFor} className="text-[13.5px] font-medium text-ink">
      {text}
      {required && (
        <span aria-hidden="true" className="text-accent">
          {" "}*
        </span>
      )}
      {optional && <span className="font-normal text-muted"> ({optional})</span>}
    </label>
  )
}

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>("idle")
  const [errorDetail, setErrorDetail] = useState<string | null>(null)
  const sentRef = useRef<HTMLParagraphElement>(null)

  // Sending is the one irreversible thing a visitor does here, so the
  // confirmation is announced *and* focused.
  useEffect(() => {
    if (status === "sent") sentRef.current?.focus()
  }, [status])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorDetail(null)
    const form = e.currentTarget
    const data = new FormData(form)
    track("form_submit", { interest: String(data.get("interest") ?? "") })
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.formEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      // FormSubmit answers 200 with `{"success":"false"}` for the failures
      // that actually happen (an unactivated inbox, a rate limit), so the
      // body, not the status, decides whether the message was delivered.
      const body: FormSubmitReply = await res.json().catch(() => ({}))
      if (!res.ok || !isDelivered(body)) {
        throw new Error(body.message || `FormSubmit responded ${res.status}`)
      }
      setStatus("sent")
      track("form_sent")
    } catch (error) {
      const detail = error instanceof Error ? error.message : null
      setErrorDetail(detail)
      setStatus("error")
      track("form_error", { reason: (detail ?? "unknown").slice(0, 64) })
    }
  }

  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(t.whatsapp.greeting)}`

  return (
    <Section id="contact" labelledBy="contact-title" width="narrow">
      <SectionHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        titleId="contact-title"
        paragraph={t.contact.paragraph}
      />

      <Reveal delay={0.1} className="mt-10 rounded-2xl bg-surface p-6 sm:p-9">
        {status === "sent" ? (
          <p ref={sentRef} tabIndex={-1} role="status" className="py-6 text-center text-[16px] text-ink">
            {t.contact.sentMessage}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="New message from turbodevs.web.app" />
            {/* FormSubmit's AJAX endpoint cannot render a captcha; the honeypot is what works. */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name" text={t.contact.nameLabel} required />
              <input required id="contact-name" name="name" type="text" autoComplete="name" className={FIELD} />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-company" text={t.contact.companyLabel} required />
              <input required id="contact-company" name="company" type="text" autoComplete="organization" className={FIELD} />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-role" text={t.contact.roleLabel} optional={t.contact.optionalLabel} />
              <input id="contact-role" name="role" type="text" autoComplete="organization-title" className={FIELD} />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email" text={t.contact.emailLabel} required />
              <input
                required
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                className={FIELD}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="contact-interest" text={t.contact.interestLabel} required />
              <select required id="contact-interest" name="interest" defaultValue="" className={FIELD}>
                <option value="" disabled>
                  {t.contact.interestPlaceholder}
                </option>
                {INTERESTS.map((key) => (
                  <option key={key} value={key}>
                    {t.contact.interests[key]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="contact-message" text={t.contact.messageLabel} required />
              <textarea required id="contact-message" name="message" rows={5} className={`${FIELD} resize-none`} />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[14.5px] font-medium text-bg transition-colors hover:bg-ink-hover disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? t.contact.sendingLabel : t.contact.sendButton}
                <Send aria-hidden="true" className="size-4" />
              </button>
              <span role="status" className="sr-only">
                {status === "sending" ? t.contact.sendingLabel : ""}
              </span>
            </div>

            {status === "error" && (
              <p role="alert" className="text-[14px] text-danger sm:col-span-2">
                {t.contact.errorMessage}{" "}
                <a href={`mailto:${CONTACT_INFO.formEmail}`} className="underline">
                  {CONTACT_INFO.formEmail}
                </a>{" "}
                {t.contact.errorCta}
                {errorDetail && <span className="mt-1 block text-muted">{errorDetail}</span>}
              </p>
            )}
          </form>
        )}
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14.5px]">
        <span className="text-muted">{t.contact.directLabel}:</span>
        <a href={`mailto:${CONTACT_INFO.formEmail}`} className="text-ink underline decoration-border-strong underline-offset-4 hover:decoration-ink">
          {CONTACT_INFO.formEmail}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("whatsapp_click")}
          className="inline-flex items-center gap-1 text-ink underline decoration-border-strong underline-offset-4 hover:decoration-ink"
        >
          {t.whatsapp.label}
          <span className="sr-only"> ({t.a11y.newTab})</span>
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
        <a
          href={CONTACT_INFO.linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-ink underline decoration-border-strong underline-offset-4 hover:decoration-ink"
        >
          LinkedIn
          <span className="sr-only"> ({t.a11y.newTab})</span>
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </Section>
  )
}
