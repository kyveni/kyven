import { Fireflies } from '@/components/rwog/fireflies'
import { SiteNav } from '@/components/rwog/site-nav'
import { Hero } from '@/components/rwog/hero'
import { Story } from '@/components/rwog/story'
import { Launch } from '@/components/rwog/launch'
import { Status } from '@/components/rwog/status'
import { Roadmap } from '@/components/rwog/roadmap'
import { Faq } from '@/components/rwog/faq'
import { CtaFooter } from '@/components/rwog/cta-footer'

export default function Page() {
  return (
    <>
      <Fireflies />
      <SiteNav />
      <main>
        <Hero />
        <Story />
        <Launch />
        <Status />
        <Roadmap />
        <Faq />
        <CtaFooter />
      </main>
    </>
  )
}
