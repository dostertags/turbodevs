import { useEffect, useRef, useState } from "react"
import { GitFork, Send } from "lucide-react"

import { Reveal } from "@/components/motion/Reveal"
import { CONTACT_INFO } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

type Status = "idle" | "sending" | "sent" | "error"

/** Shape of a FormSubmit AJAX reply. `success` arrives as the string "true". */
type FormSubmitReply = { success?: boolean | string; message?: string }

const isDelivered = (body: FormSubmitReply) => body.success === true || body.success === "true"

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>("idle")
  const [errorDetail, setErrorDetail] = useState<string | null>(null)
  const sentRef = useRef<HTMLParagraphElement>(null)

  // Sending a message is the one irreversible thing a visitor does here, so
  // confirmation has to be announced *and* focused — otherwise a screen-reader
  // user who submits is left on a button that no longer exists, with the
  // focus ring reset to the top of the document.
  useEffect(() => {
    if (status === "sent") sentRef.current?.focus()
  }, [status])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorDetail(null)
    const form = e.currentTarget
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.formEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })

      // The previous version trusted `res.ok` alone. FormSubmit answers 200
      // with `{"success":"false", "message":"..."}` for the failures that
      // actually happen in practice — an inbox whose one-time activation link
      // was never clicked, a rejected captcha, a rate limit — so a visitor
      // could read "Sent — we reply within a couple of days" for a message
      // that was never delivered, and nobody on either side would know. The
      // body is now the source of truth, and its message is shown verbatim.
      const body: FormSubmitReply = await res.json().catch(() => ({}))
      if (!res.ok || !isDelivered(body)) {
        throw new Error(body.message || `FormSubmit responded ${res.status}`)
      }
      setStatus("sent")
    } catch (error) {
      setErrorDetail(error instanceof Error ? error.message : null)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="text-center">
        <p className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase">
          {t.contact.eyebrow}
        </p>
        <h2 className="mt-3 text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[36px]">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">{t.contact.paragraph}</p>
      </Reveal>

      <Reveal delay={0.1} className="tg-glass mt-10 rounded-2xl p-6 sm:p-9">
        {status === "sent" ? (
          <p ref={sentRef} tabIndex={-1} role="status" className="py-6 text-center text-[15px] text-ink">
            {t.contact.sentMessage}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="New message from turbodevs.web.app" />
            {/*
              `_captcha` is off deliberately: FormSubmit's AJAX endpoint has no
              page on which to render a challenge, so requesting one only
              produced failures the visitor could not resolve. The honeypot
              below is the mechanism that actually works for AJAX submissions —
              a field no human ever sees or fills in.
            */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <label htmlFor="contact-name" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-1">
              {/* Label and its required marker share one line — as separate
                  children of a column flexbox, the asterisk wrapped onto a
                  line of its own under every field label. */}
              <span>
                {t.contact.nameLabel} <span aria-hidden="true" className="text-accent">*</span>
              </span>
              <input
                required
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                // 16px, not 14px: iOS Safari zooms the whole page in when a
                // focused field's text is smaller than 16px, and never zooms
                // back out — the visitor is left scrolled sideways mid-form.
                className="rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[16px] text-ink outline-none focus-visible:border-accent"
              />
            </label>

            <label htmlFor="contact-email" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-1">
              <span>
                {t.contact.emailLabel} <span aria-hidden="true" className="text-accent">*</span>
              </span>
              <input
                required
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                className="rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[16px] text-ink outline-none focus-visible:border-accent"
              />
            </label>

            <label htmlFor="contact-message" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-2">
              <span>
                {t.contact.messageLabel} <span aria-hidden="true" className="text-accent">*</span>
              </span>
              <textarea
                required
                id="contact-message"
                name="message"
                rows={4}
                className="resize-none rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[16px] text-ink outline-none focus-visible:border-accent"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
              <a
                href={CONTACT_INFO.githubHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                <GitFork aria-hidden="true" className="size-4" />
                github.com/dostertags
                <span className="sr-only"> ({t.a11y.newTab})</span>
              </a>

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-bg transition-colors hover:bg-[#f0b85c] disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? t.contact.sendingLabel : t.contact.sendButton}
                <Send aria-hidden="true" className="size-4" />
              </button>
              <span role="status" className="sr-only">
                {status === "sending" ? t.contact.sendingLabel : ""}
              </span>
            </div>

            {status === "error" && (
              <p role="alert" className="text-[13px] text-[#e0836a] sm:col-span-2">
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
    </section>
  )
}
