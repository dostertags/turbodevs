import { Layout } from "@/Layout"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Services } from "@/components/sections/Services"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { Products } from "@/components/sections/Products"
import { Notes } from "@/components/sections/Notes"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Services />
      <FeaturedWork />
      <Products />
      <Notes />
      <Contact />
    </Layout>
  )
}
