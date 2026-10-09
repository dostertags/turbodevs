import { CAPABILITIES, CONTACT_INFO, FOOTER_INFO, INDUSTRIES, MEDIA_CREDITS } from "@/content/site"
import { Mark } from "@/components/sections/Nav"
import { useI18n } from "@/i18n/LanguageContext"

type FooterLink = { label: string; href: string; external?: boolean }

/** A wide footer that doubles as a map of what the studio does, after palantir.com. */
export function Footer() {
  const { t } = useI18n()
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(t.whatsapp.greeting)}`

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: t.footer.companyTitle,
      links: [
        { label: t.nav.services, href: "#services" },
        { label: t.nav.work, href: "#work" },
        { label: t.nav.products, href: "#products" },
        { label: t.nav.notes, href: "#notes" },
        { label: t.footer.openSourceLabel, href: "#open-source" },
      ],
    },
    {
      title: t.footer.capabilitiesTitle,
      links: CAPABILITIES.map((key) => ({ label: t.capabilities.items[key].title, href: "#capabilities" })),
    },
    {
      title: t.footer.industriesTitle,
      links: INDUSTRIES.map((key) => ({ label: t.industries.items[key].name, href: "#industries" })),
    },
    {
      title: t.footer.contactTitle,
      links: [
        { label: CONTACT_INFO.formEmail, href: `mailto:${CONTACT_INFO.formEmail}` },
        { label: t.whatsapp.label, href: whatsappHref, external: true },
        { label: "LinkedIn", href: CONTACT_INFO.linkedinHref, external: true },
        { label: "GitHub", href: CONTACT_INFO.githubHref, external: true },
      ],
    },
  ]

  return (
    <footer className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-10 border-t border-border py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_repeat(4,minmax(0,1fr))]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-serif text-[20px] text-ink">
            <Mark />
            TurboDevs
          </a>
          <p className="mt-3 max-w-[28ch] font-serif text-[17px] leading-snug text-muted">{t.hero.headline}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[12px] font-medium tracking-[0.06em] text-muted uppercase">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] break-words text-ink/80 transition-colors hover:text-ink"
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {item.label}
                    {item.external && <span className="sr-only"> ({t.a11y.newTab})</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-border py-6 text-[12.5px] text-muted lg:flex-row lg:items-start lg:justify-between">
        <p>© {new Date().getFullYear()} TurboDevs</p>
        <p data-testid="media-credits" className="max-w-[70ch] lg:text-right">
          {t.footer.footageLabel}: {MEDIA_CREDITS.footage.join(", ")} / {MEDIA_CREDITS.footageSource}. {t.footer.photoLabel}:{" "}
          {MEDIA_CREDITS.photo} / {MEDIA_CREDITS.photoSource}.
        </p>
        <a href={FOOTER_INFO.repoHref} target="_blank" rel="noreferrer" className="hover:text-ink">
          {t.footer.sourceLabel}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      </div>
    </footer>
  )
}
