import { CONTACT_INFO, FOOTER_INFO } from "@/content/site"
import { Mark } from "@/components/sections/Nav"
import { useI18n } from "@/i18n/LanguageContext"

export function Footer() {
  const { t } = useI18n()
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(t.whatsapp.greeting)}`
  const link = "text-[14px] text-ink/75 transition-colors hover:text-ink"

  const columns = [
    {
      title: t.footer.companyTitle,
      links: [
        { label: t.nav.services, href: "#services" },
        { label: t.nav.work, href: "#work" },
        { label: t.nav.products, href: "#products" },
        { label: t.nav.contact, href: "#contact" },
      ],
    },
    {
      title: t.footer.writingTitle,
      links: [
        { label: t.nav.notes, href: "#notes" },
        { label: t.footer.openSourceLabel, href: "#open-source" },
      ],
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
      <div className="grid gap-10 border-t border-border py-14 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-serif text-[20px] text-ink">
            <Mark />
            TurboDevs
          </a>
          <p className="mt-3 max-w-[28ch] font-serif text-[17px] leading-snug text-muted">{t.hero.headline}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[13px] font-medium text-muted">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${link} break-all`}
                    {...("external" in item && item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {item.label}
                    {"external" in item && item.external && <span className="sr-only"> ({t.a11y.newTab})</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-border py-6 text-[13px] text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} TurboDevs</p>
        <a href={FOOTER_INFO.repoHref} target="_blank" rel="noreferrer" className="hover:text-ink">
          {t.footer.sourceLabel}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      </div>
    </footer>
  )
}
