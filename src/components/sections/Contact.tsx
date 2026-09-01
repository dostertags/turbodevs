import { useState } from "react"
import { GitFork, Send } from "lucide-react"

import { Reveal } from "@/components/motion/Reveal"
import { CONTACT_INFO } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"

type Status = "idle" | "sending" | "sent" | "error"

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>("idle")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.formEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`)
      setStatus("sent")
    } catch {
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
          <p role="status" className="py-6 text-center text-[15px] text-ink">
            {t.contact.sentMessage}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <input type="hidden" name="_subject" value="New message from turbodevs.web.app" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />

            <label htmlFor="contact-name" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-1">
              {t.contact.nameLabel} <span aria-hidden="true" className="text-accent">*</span>
              <input
                required
                id="contact-name"
                name="name"
                type="text"
                className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none focus-visible:border-accent"
              />
            </label>

            <label htmlFor="contact-email" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-1">
              {t.contact.emailLabel} <span aria-hidden="true" className="text-accent">*</span>
              <input
                required
                id="contact-email"
                name="email"
                type="email"
                className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none focus-visible:border-accent"
              />
            </label>

            <label htmlFor="contact-message" className="flex flex-col gap-1.5 text-[13px] text-muted sm:col-span-2">
              {t.contact.messageLabel} <span aria-hidden="true" className="text-accent">*</span>
              <textarea
                required
                id="contact-message"
                name="message"
                rows={4}
                className="resize-none rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none focus-visible:border-accent"
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
              </a>

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-bg transition-colors hover:bg-[#f0b85c] disabled:opacity-60"
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
              </p>
            )}
          </form>
        )}
      </Reveal>
    </section>
  )
}
