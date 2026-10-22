import { BackToTop } from '@/components/site/BackToTop'
import { Contact } from '@/components/site/Contact'
import { Hero } from '@/components/site/Hero'
import { Manifesto } from '@/components/site/Manifesto'
import { Process } from '@/components/site/Process'
import { Services } from '@/components/site/Services'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export default function App() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <Process />
        <Manifesto />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
