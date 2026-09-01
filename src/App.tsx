import { Layout } from "@/Layout"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { Grantfox } from "@/components/sections/Grantfox"
import { Approach } from "@/components/sections/Approach"
import { FailClosedDemo } from "@/components/sections/FailClosedDemo"
import { Notes } from "@/components/sections/Notes"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <FeaturedWork />
      <Grantfox />
      <Approach />
      <FailClosedDemo />
      <Notes />
      <Contact />
    </Layout>
  )
}
