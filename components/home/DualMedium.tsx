'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function DualMedium() {
  return (
    <section id="offerings" className="bg-linen py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-[0.65rem] text-champagne">What We Create</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish tracking-wider">
            The Dual Medium Advantage
          </h2>
          <p className="mt-6 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60 text-balance">
            Most studios force you to choose between a great photographer and a great
            cinematographer. We eliminate that compromise entirely.
          </p>
        </motion.div>

        <div className="mt-20 lg:mt-32 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 lg:gap-8">
          
          {/* Asymmetrical Images Container */}
          <div className="relative w-full lg:w-[55%] h-[600px] lg:h-[800px]">
            {/* Fine-Art Stills - Large Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 w-[85%] h-[80%] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Editorial fine-art still"
                fill
                className="object-cover transition-transform duration-[20s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Cinematic Films - Smaller Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-0 w-[55%] h-[45%] rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-10 border-4 border-linen"
            >
              <Image
                src="/placeholder.svg?height=450&width=800"
                alt="Cinematic film still"
                fill
                className="object-cover transition-transform duration-[15s] hover:scale-105"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer transition-colors hover:bg-black/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:scale-110">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="none" className="ml-1">
                    <path d="M1 1L13 8L1 15V1Z" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Text Container */}
          <div className="flex w-full lg:w-[40%] flex-col justify-center gap-16 lg:pt-20 lg:pl-10 bg-ink/30 backdrop-blur-lg rounded-xl p-6">
            
            {/* Stills Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative z-20"
            >
              <h3 className="font-display text-3xl italic text-ink">Fine-Art Stills</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-ink/65 text-balance">
                Editorial lighting, portraiture clarity, and quiet emotional
                documentation. Every frame is composed to live as a timeless
                heirloom on your walls and in your hands.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  'Medium format aesthetic quality',
                  'Natural & editorial lighting',
                  '350–700+ images delivered',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/50">
                    <span className="h-px w-6 bg-champagne/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Films Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative z-20"
            >
              <h3 className="font-display text-3xl italic text-ink">Cinematic Films</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-ink/65 text-balance">
                Premium soundscapes, culturally attuned pacing, and multi-day
                storytelling. Heirloom films that move with the emotion of every
                ritual and celebration.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  '3–8 minute feature films',
                  'Original music licensing',
                  'Multi-ceremony narrative arc',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/50">
                    <span className="h-px w-6 bg-champagne/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mx-auto mt-24 lg:mt-32 max-w-4xl rounded-3xl border border-champagne/30 bg-white/40 backdrop-blur-xl px-10 py-12 text-center shadow-lg"
        >
          <p className="font-sans text-lg leading-relaxed text-ink/75 text-balance">
            <span className="font-display text-2xl italic text-ink pr-2">
              Single Crew Synergy
            </span>
            &mdash; One team, synchronized timelines, and a cohesive visual
            identity across your entire multi-day itinerary. No separate vendors,
            no creative conflicts, no timeline gaps.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
