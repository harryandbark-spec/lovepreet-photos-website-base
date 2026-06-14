import { useInquiry } from '@/components/InquiryContext'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TIERS = [
  {
    name: 'The Essential',
    subtitle: 'Photography Only',
    description: 'Perfect for intimate ceremonies and single-day celebrations seeking fine-art photography coverage.',
    features: [
      '8 hours photography coverage',
      '350+ professionally edited images',
      'Private online gallery delivery',
      'Engagement session add-on available',
    ],
    cta: 'Inquire About Essentials',
    highlight: false,
  },
  {
    name: 'The Legacy',
    subtitle: 'Photos + Cinema',
    description: 'Our most popular collection — unified photography and cinema under one creative direction.',
    features: [
      '2 days photography + cinema',
      '500+ curated fine-art images',
      '5–8 minute cinematic feature film',
      'Same-day highlight reel',
      'Private family streaming link',
      'Engagement session included',
    ],
    cta: 'Reserve Your Date',
    highlight: true,
  },
  {
    name: 'The Full Experience',
    subtitle: 'Multi-Day + Live Stream',
    description: 'The complete Lovepreet experience for grand multi-day South Asian celebrations across the Lower Mainland.',
    features: [
      '3–4 day full coverage',
      '700+ fine-art images',
      '8–12 minute cinematic masterpiece',
      'HD live streaming all ceremonies',
      'Private stream link for global family',
      'Engagement session included',
      'Same-day sneak peek edit',
    ],
    cta: 'Inquire About Full Experience',
    highlight: false,
  },
]

export function Pricing() {
  const { open } = useInquiry()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Investment</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish" style={{ fontWeight: 500 }}>
            Your Legacy Collection
          </h2>
          <p className="mt-8 max-w-xl text-center font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.6)' }}>
            Every collection is custom-tailored. The prices below are starting
            points — final investment reflects your specific itinerary and vision.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: 'rgba(184,150,95,0.3)', backgroundColor: 'rgba(184,150,95,0.05)' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--champagne)' }} />
            <span className="eyebrow text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.7)' }}>Limited 2026 dates available</span>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col border transition-all duration-500"
              style={tier.highlight ? {
                borderColor: 'rgba(198,168,124,0.6)',
                backgroundColor: 'var(--ink)',
                color: 'var(--canvas)',
                boxShadow: hoveredCard === index 
                  ? '0 30px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(197,168,130,0.3)'
                  : '0 20px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(197,168,130,0.2)',
              } : {
                borderColor: 'rgba(31,29,26,0.12)',
                backgroundColor: 'var(--canvas)',
                boxShadow: hoveredCard === index ? '0 25px 80px rgba(0,0,0,0.15)' : 'none',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
            >
              {tier.highlight && (
                <motion.div
                  className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(197,168,130,0.3) 0%, transparent 50%, rgba(197,168,130,0.15) 100%)',
                  }}
                  animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
                />
              )}

              <div
                className="relative border-b px-8 py-8"
                style={{ borderColor: tier.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(31,29,26,0.08)' }}
              >
                {tier.highlight && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-px w-4" style={{ backgroundColor: 'var(--champagne)' }} />
                    <span className="eyebrow text-[0.6rem] text-champagne">Most Popular</span>
                  </div>
                )}
                <h3
                  className="font-display text-2xl"
                  style={{ color: tier.highlight ? 'var(--canvas)' : 'var(--ink)', fontWeight: 500 }}
                >
                  {tier.name}
                </h3>
                <p
                  className="eyebrow mt-1 text-[0.6rem]"
                  style={{ color: tier.highlight ? 'rgba(252,251,250,0.4)' : 'rgba(31,29,26,0.4)' }}
                >
                  {tier.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="h-px w-8"
                    style={{ backgroundColor: tier.highlight ? 'rgba(198,168,124,0.4)' : 'rgba(31,29,26,0.15)' }}
                  />
                </div>
                <p
                  className="mt-3 font-sans text-sm leading-relaxed"
                  style={{ color: tier.highlight ? 'rgba(252,251,250,0.55)' : 'rgba(31,29,26,0.55)' }}
                >
                  {tier.description}
                </p>
              </div>

              <div className="relative flex flex-1 flex-col px-8 py-8">
                <ul className="flex flex-1 flex-col gap-4">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <motion.span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45"
                        style={{ backgroundColor: tier.highlight ? 'var(--champagne)' : 'rgba(198,168,124,0.7)' }}
                        whileHover={{ scale: 1.5, rotate: 90 }}
                      />
                      <span
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: tier.highlight ? 'rgba(252,251,250,0.7)' : 'rgba(31,29,26,0.65)' }}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={open}
                  className="mt-8 block w-full py-4 text-center font-sans text-sm transition-all duration-300"
                  style={tier.highlight ? {
                    backgroundColor: 'var(--champagne)',
                    color: 'var(--ink)',
                  } : {
                    border: '1px solid rgba(31,29,26,0.2)',
                    color: 'var(--ink)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={e => {
                    if (!tier.highlight) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--ink)'
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--canvas)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!tier.highlight) {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = ''
                      ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'
                    }
                  }}
                >
                  {tier.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.4))' }} />
            <div className="h-1 w-1 rounded-full" style={{ backgroundColor: 'rgba(198,168,124,0.4)' }} />
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(198,168,124,0.4))' }} />
          </div>
          <p className="text-center font-sans text-sm" style={{ color: 'rgba(31,29,26,0.4)' }}>
            All collections include a private consultation. Final pricing confirmed after we
            map your specific itinerary.
          </p>
        </div>
      </div>
    </section>
  )
}
