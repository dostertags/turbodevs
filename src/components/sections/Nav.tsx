import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { Button } from "@/components/ui/Button"
import { track } from "@/lib/track"
import { NAV_SECTIONS } from "@/content/site"

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-6", className)} aria-hidden>
      <path d="M8.6 22.4 L16.3 9.8 L24.1 20.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8.6" cy="22.4" r="2.1" fill="currentColor" />
      <circle cx="16.3" cy="9.8" r="2.6" fill="#8a5a14" />
      <circle cx="24.1" cy="20.6" r="2.1" fill="currentColor" />
    </svg>
  )
}

export function Nav() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        closeButtonRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled || open ? "border-border bg-bg/92 backdrop-blur-md" : "border-transparent bg-bg/0",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-serif text-[20px] text-ink">
          <Mark />
          TurboDevs
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_SECTIONS.map((item) => (
            <li key={item.id}>
              <a
                href={"#" + item.id}
                onClick={() => track("nav_click", { id: item.id })}
                className="inline-block py-2 text-[14px] text-ink/75 transition-colors hover:text-ink"
              >
                {t.nav[item.id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button href="#contact" size="small" onClick={() => track("cta_click", { id: "nav_cta" })}>
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-ink"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-bg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <a href={"#" + item.id} onClick={() => setOpen(false)} className="block py-2.5 font-serif text-[22px] text-ink">
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  href="#contact"
                  className="w-full"
                  onClick={() => {
                    track("cta_click", { id: "drawer_cta" })
                    setOpen(false)
                  }}
                >
                  {t.nav.cta}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
