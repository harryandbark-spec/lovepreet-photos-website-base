import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInquiry } from '@/components/InquiryContext'

export function Hero() {
  const { open } = useInquiry()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 lg:pt-0"
      style={{ backgroundColor: 'var(--linen)' }}
    >
      {/* Mobile background image with overlay */}
      <div className="lg:hidden absolute inset-0">
        <motion.img
          style={{ y }}
          src="/hero-couple.jpg"
          alt="Luxury South Asian Wedding Couple"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundColor: 'rgba(197,168,130,0.15)' }} />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] lg:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:flex-row lg:items-center px-6 lg:px-10">
        <div className="relative z-10 flex flex-1 flex-col justify-center pt-10 pb-16 lg:py-0 lg:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-[0.65rem]"
            style={{ color: 'rgba(255,255,255,0.8) lg:rgba(31,29,26,0.4)' }}
          >
            Langley &middot; Surrey &middot; Vancouver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6"
          >
            <h1
              className="font-display leading-[1.05]"
              style={{
                color: 'white',
                fontSize: 'clamp(3.5rem,7vw,7rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
              aria-label="One Vision. Two Mediums. Captured as One."
            >
              One Vision.
              <br />
              Two Mediums.
              <br />
              <em style={{ color: 'var(--champagne)', paddingRight: '1rem' }}>Captured as One.</em>
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: 'rgba(184,150,95,0.8)' }} />
              <div
                className="h-px flex-1 max-w-[160px]"
                style={{ background: 'linear-gradient(to right, rgba(184,150,95,0.8), transparent)' }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-8 max-w-md font-sans text-base leading-relaxed lg:text-lg text-balance"
            style={{ color: 'rgba(255,255,255,0.9) lg:rgba(31,29,26,0.6)' }}
          >
            Fine-art photography and heirloom cinema for luxury South Asian
            celebrations — crafted under one creative direction, so you stay
            completely present in every moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <button
              onClick={open}
              className="magnetic-hover group relative overflow-hidden rounded-full px-10 py-4 font-sans text-[0.8rem] font-medium tracking-wide transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--accent-secondary)',
                color: 'var(--canvas)',
                boxShadow: '0 0 0 rgba(166,103,116,0)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(166,103,116,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 rgba(166,103,116,0)')}
            >
              <span className="relative z-10">Start the Conversation</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            </button>

            <a
              href="#gallery"
              className="group flex items-center gap-3 eyebrow text-[0.65rem] transition-colors hover:text-white lg:hover:text-ink"
              style={{ color: 'rgba(255,255,255,0.7) lg:rgba(31,29,26,0.5)' }}
            >
              <span className="relative">
                View Portfolio
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'white lg:var(--ink)' }}
                />
              </span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors group-hover:border-white/30 lg:hover:border-ink/30"
                style={{ borderColor: 'rgba(255,255,255,0.3) lg:rgba(31,29,26,0.1)' }}
              >
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* Desktop image - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden lg:block relative mt-0 w-full lg:w-[55%] xl:w-[58%] h-[85vh] rounded-l-[150px] overflow-hidden shadow-2xl film-grain warm-tint"
        >
          <motion.img
            style={{ y }}
            src="/hero-couple.jpg"
            alt="Luxury South Asian Wedding Couple"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[20s] ease-out hover:scale-110"
          />
          <div
            className="absolute inset-0 rounded-l-[150px] pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.1)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{ backgroundColor: 'rgba(197,168,130,0.1)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
