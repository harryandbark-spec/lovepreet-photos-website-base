import { useInquiry } from '@/components/InquiryContext'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { motion } from 'framer-motion'

export function CTABanner() {
  const { open } = useInquiry()
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: 'linear-gradient(135deg, var(--champagne) 0%, var(--accent-secondary) 50%, var(--champagne) 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            backgroundColor: 'var(--champagne)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="mx-auto max-w-6xl px-4 md:px-8 relative z-10">
        <motion.div
          className="mb-12 h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }}
        />
      </div>

      <RevealOnScroll className="mx-auto max-w-3xl px-4 text-center md:px-8 relative z-10">
        <div className="mb-4 flex flex-col items-center gap-2">
          <motion.h2
            className="font-display text-4xl italic text-ink md:text-5xl lg:text-6xl"
            style={{ fontWeight: 500 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to Capture
            <br />
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, var(--ink) 0%, var(--champagne) 50%, var(--ink) 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Story?
            </motion.span>
          </motion.h2>
          <motion.div
            className="mt-3 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ backgroundColor: 'var(--champagne)' }} />
            <motion.div
              className="h-2 w-2 rotate-45"
              style={{ backgroundColor: 'var(--champagne)' }}
              animate={{ rotate: 45, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="h-px w-8" style={{ backgroundColor: 'var(--champagne)' }} />
          </motion.div>
        </div>

        <motion.p
          className="mb-10 font-sans text-base font-light tracking-wide md:text-lg"
          style={{ color: 'rgba(31,29,26,0.65)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Let&apos;s discuss your vision and find the perfect photography package for your special day.
        </motion.p>

        <motion.button
          onClick={open}
          className="premium-button magnetic-hover group inline-flex items-center gap-2 rounded-full border px-8 py-3.5 font-sans text-sm font-light uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:text-canvas"
          style={{ borderColor: 'var(--champagne)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--champagne)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span>Check Availability</span>
          <motion.svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.button>
      </RevealOnScroll>

      <motion.div
        className="mx-auto mt-12 max-w-6xl px-4 md:px-8 md:mt-16 relative z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--champagne), transparent)' }} />
      </motion.div>
    </section>
  )
}
