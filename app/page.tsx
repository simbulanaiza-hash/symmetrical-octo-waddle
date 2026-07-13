import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Tools } from "@/components/tools"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  )
}
