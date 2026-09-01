import { lazy, Suspense } from "react"

import { Cursor } from "@/components/motion/Cursor"
import { ScrollProgress } from "@/components/motion/ScrollProgress"
import { Nav } from "@/components/sections/Nav"
import { Footer } from "@/components/sections/Footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useViewportSync } from "@/hooks/use-viewport-sync"

// three.js + @react-three/fiber + drei + postprocessing are the heaviest
// dependency in this app by far. Loading them in the same chunk as the rest
// of the page means text and navigation wait on ~440KB of WebGL machinery
// that's purely decorative. Splitting it into its own chunk via React.lazy
// lets the real content paint first; the background fills in a beat later.
const Scene = lazy(() => import("@/three/Scene").then((m) => ({ default: m.Scene })))

export function Layout({ children }: { children: React.ReactNode }) {
  useViewportSync()
  useSmoothScroll()

  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  )
}
