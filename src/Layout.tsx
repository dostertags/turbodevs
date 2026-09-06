import { lazy, Suspense } from "react"

import { Cursor } from "@/components/motion/Cursor"
import { ScrollProgress } from "@/components/motion/ScrollProgress"
import { Nav } from "@/components/sections/Nav"
import { Footer } from "@/components/sections/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useViewportSync } from "@/hooks/use-viewport-sync"
import { useI18n } from "@/i18n/LanguageContext"

// three.js + @react-three/fiber + drei + postprocessing are the heaviest
// dependency in this app by far. Loading them in the same chunk as the rest
// of the page means text and navigation wait on ~440KB of WebGL machinery
// that's purely decorative. Splitting it into its own chunk via React.lazy
// lets the real content paint first; the background fills in a beat later.
const Scene = lazy(() => import("@/three/Scene").then((m) => ({ default: m.Scene })))

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useI18n()
  useViewportSync()
  useSmoothScroll()

  return (
    <>
      {/*
        First thing in the tab order, visible only once focused. Without it a
        keyboard or screen-reader visitor walks the entire header — logo, five
        section links, the language menu and the CTA — on every visit before
        reaching any content.
      */}
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[80] focus-visible:rounded-full focus-visible:bg-accent focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-[13px] focus-visible:font-semibold focus-visible:text-bg"
      >
        {t.a11y.skipToContent}
      </a>

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main id="main" tabIndex={-1} className="relative z-10">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
