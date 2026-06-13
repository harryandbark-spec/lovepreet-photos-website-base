import { motion } from 'framer-motion'

export function SynergySection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'rgba(243, 239, 234, 0.6)' }}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="eyebrow text-[0.65rem] text-champagne">Why Choose Us</span>

          <h2
            className="mx-auto mt-6 max-w-3xl font-display text-4xl italic leading-[1.15] text-ink lg:text-5xl lg:leading-[1.2]"
            style={{ fontWeight: 500 }}
          >
            Single Crew Synergy
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(184,150,95,0.5)' }} />
            <div className="h-1 w-1 rotate-45" style={{ backgroundColor: 'rgba(184,150,95,0.5)' }} />
            <div className="h-px w-8" style={{ backgroundColor: 'rgba(184,150,95,0.5)' }} />
          </div>

          <p
            className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-balance"
            style={{ color: 'rgba(31,29,26,0.65)' }}
          >
            One team, synchronized timelines, and a cohesive visual identity across your entire
            multi-day itinerary. No separate vendors, no creative conflicts, no timeline gaps.
          </p>

          <p
            className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-balance"
            style={{ color: 'rgba(31,29,26,0.5)' }}
          >
            Your photographer and cinematographer work as one unit, anticipating each other&apos;s
            frames and building a shared visual language that tells your story without compromise.
          </p>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-px"
          style={{ borderTop: '1px solid rgba(31,29,26,0.08)', borderBottom: '1px solid rgba(31,29,26,0.08)' }}
        >
          {[
            { value: '1', label: 'Unified Creative Director' },
            { value: '0', label: 'Vendor Conflicts' },
            { value: '∞', label: 'Visual Coherence' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-8 px-4"
            >
              <span
                className="font-display text-4xl italic text-ink lg:text-5xl"
                style={{ fontWeight: 500 }}
              >
                {stat.value}
              </span>
              <span
                className="eyebrow mt-3 text-[0.6rem] text-center"
                style={{ color: 'rgba(31,29,26,0.4)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
