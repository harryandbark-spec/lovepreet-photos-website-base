import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { DualMedium } from '@/components/DualMedium'
import { GalleryGrid } from '@/components/GalleryGrid'
import { Timeline } from '@/components/Timeline'
import { Testimonial } from '@/components/Testimonial'
import { FaqAccordion } from '@/components/FaqAccordion'
import { IntakeForm } from '@/components/IntakeForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DualMedium />
        <GalleryGrid />
        <Timeline />
        <Testimonial />
        <FaqAccordion />
        <IntakeForm />
      </main>
      <Footer />
    </>
  )
}
