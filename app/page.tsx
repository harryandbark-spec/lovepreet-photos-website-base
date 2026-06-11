import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { DualMedium } from '@/components/DualMedium'
import { CulturalShowcase } from '@/components/CulturalShowcase'
import { GalleryGrid } from '@/components/GalleryGrid'
import { EmotionalArc } from '@/components/EmotionalArc'
import { VideoReel } from '@/components/VideoReel'
import { Pricing } from '@/components/Pricing'
import { Timeline } from '@/components/Timeline'
import { Testimonial } from '@/components/Testimonial'
import { FaqAccordion } from '@/components/FaqAccordion'
import CTABanner from '@/components/CTABanner'
import { IntakeForm } from '@/components/IntakeForm'
import TopFooter from '@/components/TopFooter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DualMedium />
        <CulturalShowcase />
        <GalleryGrid />
        <EmotionalArc />
        <VideoReel />
        <Pricing />
        <Timeline />
        <Testimonial />
        <FaqAccordion />
        <CTABanner />
        <IntakeForm />
        <TopFooter />
      </main>
      <Footer />
    </>
  )
}
