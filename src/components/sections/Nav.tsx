import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/LanguageContext"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { MotionToggle } from "@/components/MotionToggle"
import { track } from "@/lib/track"
import { NAV_SECTIONS } from "@/content/site"

function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="size-6" aria-hidden>
      <path
        d="M8.6 22.4 L16.3 9.8 L24.1 20.6"
        fill="none"
        stroke="#e2a545"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.6" cy="22.4" r="2.1" fill="#e2a545" />
      <circle cx="16.3" cy="9.8" r="2.4" fill="#f2efe9" />
      <circle cx="24.1" cy="20.6" r="2.1" fill="#e2a545" />
    </svg>
  )
}

export function Nav({ motionOff, onToggleMotion }: { motionOff: boolean; onToggleMotion: () => void }) {
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
    // Escape has to close it: the drawer covers the page, and without this the
    // only way out is to find the small X by touch or by tabbing back to it.
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300",
        scrolled ? "tg-glass" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-[13px] font-extrabold tracking-[0.02em] text-ink"
        >
          <Mark />
          TurboDevs
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_SECTIONS.map((item) => (
            <li key={item.id}>
              <a
                href={"#" + item.id}
                onClick={() => track("nav_click", { id: item.id })}
                className="inline-block py-2 text-[12px] font-semibold tracking-[0.06em] text-muted uppercase transition-colors hover:text-ink"
              >
                {t.nav[item.navKey]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <MotionToggle motionOff={motionOff} onToggle={onToggleMotion} />
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={() => track("cta_click", { id: "nav_start" })}
            className="rounded-full bg-accent px-5 py-2 text-[12px] font-bold tracking-[0.02em] text-bg transition-colors hover:bg-accent-hover"
          >
            {t.nav.startProject}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MotionToggle motionOff={motionOff} onToggle={onToggleMotion} />
          <LanguageSwitcher />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full text-ink"
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
            transition={{ duration: 0.25 }}
            className="tg-glass tg-glass-solid overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <a
                    href={"#" + item.id}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[13px] font-semibold tracking-[0.04em] text-ink uppercase"
                  >
                    {t.nav[item.navKey]}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => {
                    track("cta_click", { id: "drawer_start" })
                    setOpen(false)
                  }}
                  className="block rounded-full bg-accent px-5 py-2.5 text-center text-[13px] font-bold text-bg"
                >
                  {t.nav.startProject}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
