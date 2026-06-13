import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PHASES = [
  {
    number: '01',
    title: 'The Intentional Consult',
    body: 'We begin by mapping out your multi-day timelines, ceremonial locations, and natural lighting windows to ensure every event is documented flawlessly without disrupting the flow of your day.',
  },
  {
    number: '02',
    title: 'The Celebration Capture',
    body: 'Our synchronized crew manages both fine-art stills and heirloom cinematography seamlessly. We anticipate the moments before they happen, moving quietly to capture raw emotion and high-energy celebration alike.',
  },
  {
    number: '03',
    title: 'The Masterpiece Delivery',
    body: "Within our agreed delivery window, you receive a curated fine-art gallery and a breathtaking cinematic film. Every image is color-graded, every clip is scored, ready to become your family's first heirloom.",
  },
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1])

  return (
    <section id="experience" className="py-24 lg:py-32" ref={containerRef} style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-[0.65rem] text-champagne">The Process</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish">
            The Cohesive Journey
          </h2>
        </motion.div>

        <div className="mt-20 lg:mt-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky top-32 h-[500px] lg:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <motion.div style={{ scale }} className="w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=1000&q=85&fit=crop"
                  alt="Couple walking"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:py-32">
            <div className="flex flex-col gap-24 lg:gap-48">
              {PHASES.map((phase) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col pl-8 lg:pl-12"
                  style={{ borderLeft: '2px solid rgba(198,168,124,0.2)' }}
                >
                  <span
                    className="absolute -left-[3px] top-0 h-8 w-[2px]"
                    style={{ backgroundColor: 'var(--champagne)' }}
                  />

                  <span className="font-display text-6xl lg:text-8xl italic select-none" style={{ color: 'rgba(31,29,26,0.1)' }}>
                    {phase.number}
                  </span>

                  <h3 className="mt-6 font-display text-3xl lg:text-4xl text-ink">
                    {phase.title}
                  </h3>

                  <p className="mt-6 font-sans text-base lg:text-lg leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.6)' }}>
                    {phase.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
