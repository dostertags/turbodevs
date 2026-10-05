import { ArrowRight } from "lucide-react"

import { RevealGroup, RevealItem } from "@/components/motion/Reveal"
import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { PRODUCTS } from "@/content/site"
import { useI18n } from "@/i18n/LanguageContext"
import { track } from "@/lib/track"

/** Preselects "One of our products" in the contact form the link scrolls to. */
function chooseProductsInterest() {
  const select = document.getElementById("contact-interest")
  if (select instanceof HTMLSelectElement) select.value = "products"
}

export function Products() {
  const { t } = useI18n()

  return (
    <Section id="products" labelledBy="products-title">
      <SectionHeader
        eyebrow={t.products.eyebrow}
        title={t.products.title}
        titleId="products-title"
        paragraph={t.products.paragraph}
        titleWidth="22ch"
      />

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
        {PRODUCTS.map((key) => {
          const item = t.products.items[key]
          return (
            <RevealItem key={key} data-testid="product" className="flex flex-col rounded-2xl bg-surface p-7 sm:p-8">
              <h3 className="font-serif text-[26px] leading-tight font-normal text-ink">{item.name}</h3>
              <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink/85">{item.line}</p>
              <p className="mt-4 text-[13.5px] text-accent">{item.basis}</p>
              <a
                href="#contact"
                onClick={() => {
                  chooseProductsInterest()
                  track("cta_click", { id: `product_${key}` })
                }}
                className="mt-6 inline-flex min-h-10 items-center gap-1.5 self-start text-[14.5px] font-medium text-ink underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-ink"
              >
                {t.products.requestLabel}
                <span className="sr-only">: {item.name}</span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
