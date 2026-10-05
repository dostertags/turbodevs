import { MotionConfig } from "motion/react"

import { Nav } from "@/components/sections/Nav"
import { Footer } from "@/components/sections/Footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useI18n } from "@/i18n/LanguageContext"
import { useAnalytics } from "@/hooks/use-analytics"
import { useMotionOff } from "@/motion/MotionPreference"
import { DUR } from "@/motion/tokens"

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useI18n()
  const motionOff = useMotionOff()
  useSmoothScroll(motionOff)
  useAnalytics()

  return (
    <MotionConfig reducedMotion={motionOff ? "always" : "user"} transition={{ duration: DUR.enter }}>
      {/* First thing in the tab order, visible only once focused. */}
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[80] focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-[13px] focus-visible:font-semibold focus-visible:text-bg"
      >
        {t.a11y.skipToContent}
      </a>

      <Nav />
      <main id="main" tabIndex={-1} className="relative">
        {children}
      </main>
      <Footer />
    </MotionConfig>
  )
}
