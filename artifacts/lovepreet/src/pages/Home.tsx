import { Hero } from '@/components/home/Hero'
import { DualMedium } from '@/components/home/DualMedium'
import { SynergySection } from '@/components/home/SynergySection'
import { CulturalShowcase } from '@/components/home/CulturalShowcase'
import { GalleryGrid } from '@/components/home/GalleryGrid'
import { EmotionalArc } from '@/components/home/EmotionalArc'
import { VideoReel } from '@/components/home/VideoReel'
import { Pricing } from '@/components/home/Pricing'
import { Timeline } from '@/components/home/Timeline'
import { Testimonial } from '@/components/home/Testimonial'
import { FaqAccordion } from '@/components/home/FaqAccordion'
import { CTABanner } from '@/components/home/CTABanner'
import { IntakeForm } from '@/components/home/IntakeForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <DualMedium />
      <SynergySection />
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
    </main>
  )
}
