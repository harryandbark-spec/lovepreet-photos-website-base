import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function DualMedium() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section id="offerings" className="py-24 lg:py-32 overflow-hidden" ref={ref} style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-[0.65rem] text-champagne">What We Create</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish tracking-wider" style={{ fontWeight: 500 }}>
            The Dual Medium Advantage
          </h2>
          <p className="mt-6 max-w-xl text-center font-sans text-base leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.6)' }}>
            Most studios force you to choose between a great photographer and a great
            cinematographer. We eliminate that compromise entirely.
          </p>
        </motion.div>

        <div className="mt-20 lg:mt-32 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 lg:gap-8">
          <div className="relative w-full lg:w-[55%] h-[600px] lg:h-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 w-[85%] h-[80%] rounded-[40px] overflow-hidden shadow-2xl film-grain warm-tint"
            >
              <motion.div style={{ y: y1 }}>
                <div
                  className="absolute inset-0 h-full w-full transition-transform duration-[20s] hover:scale-105"
                  style={{ backgroundColor: 'var(--linen)' }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-2xl italic" style={{ color: 'rgba(31,29,26,0.3)' }}>
                      Placeholder Image
                    </span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 30, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, x: 0, y: 0, clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-0 w-[55%] h-[45%] rounded-[30px] overflow-hidden z-10 film-grain warm-tint"
              style={{
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                border: '4px solid var(--linen)',
              }}
            >
              <motion.div style={{ y: y2 }}>
                <div
                  className="absolute inset-0 h-full w-full transition-transform duration-[15s] hover:scale-105"
                  style={{ backgroundColor: 'var(--linen)' }}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-2xl italic" style={{ color: 'rgba(31,29,26,0.3)' }}>
                      Placeholder Image
                    </span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer transition-colors hover:bg-black/40">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="none" className="ml-1">
                    <path d="M1 1L13 8L1 15V1Z" fill="white" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div
            className="flex w-full lg:w-[40%] flex-col justify-center gap-16 lg:pt-20 lg:pl-10 rounded-xl p-6"
            style={{ backgroundColor: 'rgba(31,29,26,0.04)', backdropFilter: 'blur(12px)' }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative z-20"
            >
              <h3 className="font-display text-3xl italic text-ink">Fine-Art Stills</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.65)' }}>
                Editorial lighting, portraiture clarity, and quiet emotional
                documentation. Every frame is composed to live as a timeless
                heirloom on your walls and in your hands.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  'Medium format aesthetic quality',
                  'Natural & editorial lighting',
                  '350–700+ images delivered',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 eyebrow text-[0.65rem] tracking-widest"
                    style={{ color: 'rgba(31,29,26,0.5)' }}
                  >
                    <span className="h-px w-6" style={{ backgroundColor: 'rgba(198,168,124,0.7)' }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative z-20"
            >
              <h3 className="font-display text-3xl italic text-ink">Cinematic Films</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.65)' }}>
                Premium soundscapes, culturally attuned pacing, and multi-day
                storytelling. Heirloom films that move with the emotion of every
                ritual and celebration.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  '3–8 minute feature films',
                  'Original music licensing',
                  'Multi-ceremony narrative arc',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 eyebrow text-[0.65rem] tracking-widest"
                    style={{ color: 'rgba(31,29,26,0.5)' }}
                  >
                    <span className="h-px w-6" style={{ backgroundColor: 'rgba(198,168,124,0.7)' }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
