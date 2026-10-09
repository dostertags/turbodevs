import { Layout } from "@/Layout"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Stats } from "@/components/sections/Stats"
import { Services } from "@/components/sections/Services"
import { Capabilities } from "@/components/sections/Capabilities"
import { Industries } from "@/components/sections/Industries"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { Products } from "@/components/sections/Products"
import { Engagement } from "@/components/sections/Engagement"
import { Notes } from "@/components/sections/Notes"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Stats />
      <Services />
      <Capabilities />
      <Industries />
      <FeaturedWork />
      <Products />
      <Engagement />
      <Notes />
      <Contact />
    </Layout>
  )
}
