import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"

const PHONE = "56976953752"

/** Sections whose own controls sit in the bottom-right corner the button occupies. */
const CONFLICTS = ["#demo", "#contact"]

/**
 * A fixed channel button that yields the corner instead of fighting for it.
 *
 * It used to sit at `z-[70]` — above the header (z-50) and above everything
 * else — permanently covering whatever was in the bottom-right corner: the
 * fail-closed demo's switches, the contact form's Send button, and the last
 * sector chip in the hero on a 390px phone. A floating shortcut to a
 * conversation is worth keeping, but not at the price of covering the primary
 * action of the section a visitor is actually using, so it now sits *below*
 * the header and hides itself while either of those sections is on screen.
 */
export function WhatsAppButton() {
  const { t } = useI18n()
  const [hidden, setHidden] = useState(false)
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.whatsapp.greeting)}`

  useEffect(() => {
    const targets = CONFLICTS.map((sel) => document.querySelector(sel)).filter(
      (el): el is Element => el !== null,
    )
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        setHidden(visible.size > 0)
      },
      // Only yield once a meaningful part of the section is on screen, so the
      // button doesn't flicker on and off at the boundary.
      { threshold: 0.25 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.whatsapp.label}: +${PHONE}`}
      // aria-hidden + tabIndex track the visual state so the button is not a
      // focusable target while it is translated off screen.
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={cn(
        "fixed right-4 bottom-4 z-40 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-[14px] font-semibold text-bg shadow-[0_8px_28px_rgba(37,211,102,0.4)] transition-[transform,opacity] duration-300 hover:scale-[1.05] focus-visible:scale-[1.05] sm:size-auto sm:gap-2.5 sm:rounded-full sm:py-3 sm:pr-5 sm:pl-4 md:right-8 md:bottom-8",
        hidden && "pointer-events-none translate-y-24 opacity-0",
      )}
    >
      {/* Official WhatsApp glyph, inline so it never depends on a network request. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 shrink-0 fill-current sm:size-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="hidden sm:inline">{t.whatsapp.label}</span>
    </a>
  )
}
