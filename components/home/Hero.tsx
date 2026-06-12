'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-linen pt-28 lg:pt-0"
    >
      {/* Subtle background noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:flex-row lg:items-center px-6 lg:px-10">
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center pt-10 pb-16 lg:py-0 lg:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-ink/40"
          >
            Langley &middot; Surrey &middot; Vancouver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6"
          >
            <h1 className="font-display leading-[1.05] text-ink [font-size:clamp(3.5rem,7vw,7rem)]" style={{ fontWeight: 400, letterSpacing: '-0.02em' }}>
              One Vision.
              <br />
              Two Mediums.
              <br />
              <em className="text-champagne pr-4 italic">Captured as One.</em>
            </h1>
            
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-champagne/60" />
              <div className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-champagne/60 to-transparent" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-8 max-w-md font-sans text-base leading-relaxed text-ink/60 lg:text-lg text-balance"
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
            <a
              href="#inquire"
              className="group relative overflow-hidden rounded-full bg-accent px-10 py-4 font-sans text-[0.8rem] font-medium tracking-wide text-canvas transition-all duration-500 hover:shadow-[0_12px_40px_rgba(58,142,159,0.3)] hover:-translate-y-1"
            >
              <span className="relative z-10">Start the Conversation</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            </a>
            
            <a
              href="#gallery"
              className="group flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-ink"
            >
              <span className="relative">
                View Portfolio
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 transition-colors group-hover:border-ink/30">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Image (Asymmetrical) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mt-10 w-full lg:mt-0 lg:w-[45%] xl:w-[50%] h-[60vh] lg:h-[85vh] rounded-t-[100px] lg:rounded-t-none lg:rounded-l-[150px] overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero-couple.png"
            alt="Punjabi wedding couple walking through a tree-lined path"
            fill
            priority
            className="object-cover object-top transition-transform duration-[20s] ease-out hover:scale-110"
          />
          {/* Soft inner shadow for depth */}
          <div className="absolute inset-0 rounded-t-[100px] lg:rounded-t-none lg:rounded-l-[150px] shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none" />
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-[#c5a882]/10 mix-blend-overlay pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
}
