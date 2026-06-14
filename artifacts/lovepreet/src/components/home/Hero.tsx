import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInquiry } from '@/components/InquiryContext'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Hero() {
  const { open } = useInquiry()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: 'var(--ink)' }}
    >
      {/* Full-screen hero image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <img
          src="/hero-couple.jpg"
          alt="Luxury South Asian Wedding Couple"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Dramatic gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundColor: 'rgba(197,168,130,0.12)' }} />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Location tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="eyebrow text-[0.7rem] tracking-[0.3em]"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              LANGLEY · SURREY · VANCOUVER
            </motion.p>

            {/* Dramatic headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display leading-[0.95]"
              style={{
                color: 'white',
                fontSize: 'clamp(3rem, 8vw, 9rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: '0.9',
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Your Love Story,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: 'var(--champagne)' }}
              >
                Captured Forever.
              </motion.span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="mt-8 h-px"
              style={{ backgroundColor: 'var(--champagne)' }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-balance"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Fine-art photography and heirloom cinema for luxury South Asian
              celebrations — crafted under one creative vision.
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white/20"
                      style={{
                        backgroundColor: `rgba(255,255,255,${0.2 + i * 0.1})`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <AnimatedCounter value="500+" duration={2500} />
                  <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    couples served
                  </span>
                </div>
              </div>
              <div className="h-px w-12" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <div className="flex items-center gap-1">
                <AnimatedCounter value="98%" duration={2500} />
                <span className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  satisfaction
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
              className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <motion.button
                onClick={open}
                className="premium-button group relative overflow-hidden rounded-full px-10 py-4 font-sans text-sm font-medium tracking-wide transition-all duration-300"
                style={{
                  backgroundColor: 'var(--accent-secondary)',
                  color: 'var(--canvas)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(166,103,116,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start the Conversation</span>
              </motion.button>

              <motion.a
                href="#gallery"
                className="group flex items-center gap-3 font-sans text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                whileHover={{ x: 5 }}
              >
                <span className="relative">
                  View Portfolio
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: 'var(--champagne)' }}
                  />
                </span>
                <motion.span
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors group-hover:border-champagne/50"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  &rarr;
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[0.55rem] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-12 w-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
