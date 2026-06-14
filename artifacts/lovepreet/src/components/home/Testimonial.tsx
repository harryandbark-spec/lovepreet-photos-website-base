import { RevealOnScroll } from '@/components/RevealOnScroll'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      "Lovepreet and the team didn't just capture our wedding — they protected our peace. Managing a 4-day Sikh wedding across Surrey and Langley is chaotic, but their crew was synchronized, calm, and invisible. The final film felt like a theatrical masterpiece.",
    couple: 'Aman & Nav',
    venue: 'Surrey & Langley',
    date: 'October 2024',
    celebration: 'Multi-Day Sikh Wedding',
  },
  {
    quote:
      "We had family flying in from the UK and Australia who couldn't make it in person. The live streaming service meant they watched the Anand Karaj in real time — my mother-in-law in Birmingham was crying on FaceTime afterward. The quality was stunning.",
    couple: 'Priya & Harjit',
    venue: 'Langley, BC',
    date: 'August 2024',
    celebration: 'Full Experience Package',
  },
  {
    quote:
      "As a couple, we were completely at ease throughout — we never felt like we were performing for a camera. The photos capture who we actually are. When we opened our gallery, we were in tears. These are images we will pass down for generations.",
    couple: 'Simran & Deep',
    venue: 'Vancouver, BC',
    date: 'June 2024',
    celebration: 'Premium Multi-Day',
  },
]

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Client Stories</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish" style={{ fontWeight: 500 }}>
            Words from Our Couples
          </h2>
        </RevealOnScroll>

        <figure
          className="mx-auto mt-16 max-w-3xl text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-center" aria-hidden="true">
                <span className="font-display text-8xl italic leading-none select-none" style={{ color: 'rgba(198,168,124,0.3)' }}>
                  &ldquo;
                </span>
              </div>
              <blockquote className="-mt-6 font-display text-2xl italic leading-[1.55] text-ink lg:text-3xl">
                {TESTIMONIALS[currentIndex].quote}
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
                <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.6))' }} />
                <div className="h-1 w-1 rotate-45" style={{ backgroundColor: 'rgba(198,168,124,0.6)' }} />
                <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(198,168,124,0.6))' }} />
              </div>
              <figcaption className="mt-6 flex flex-col items-center gap-1.5">
                <span className="font-display text-xl text-ink">{TESTIMONIALS[currentIndex].couple}</span>
                <span className="eyebrow text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.4)' }}>
                  {TESTIMONIALS[currentIndex].venue} &middot; {TESTIMONIALS[currentIndex].date}
                </span>
                <span className="mt-1 font-mono text-xs" style={{ color: 'rgba(198,168,124,0.65)' }}>
                  {TESTIMONIALS[currentIndex].celebration}
                </span>
              </figcaption>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  backgroundColor: index === currentIndex ? 'var(--champagne)' : 'rgba(198,168,124,0.3)',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'rgba(31,29,26,0.15)' }}
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
              style={{ borderColor: 'rgba(31,29,26,0.15)' }}
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </figure>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {TESTIMONIALS.slice(1).map((t, index) => (
            <motion.div
              key={t.couple}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 lg:p-10"
              style={{
                backgroundColor: 'var(--linen)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              <span className="font-display text-5xl italic leading-none select-none" style={{ color: 'rgba(198,168,124,0.3)' }} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="-mt-2 font-display text-xl italic leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(31,29,26,0.08)' }}>
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 transition-all duration-300 group-hover:w-8" style={{ backgroundColor: 'rgba(198,168,124,0.6)' }} />
                  <p className="font-display text-base italic text-ink">{t.couple}</p>
                </div>
                <p className="eyebrow mt-2 text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.4)' }}>
                  {t.venue} &middot; {t.date}
                </p>
                <p className="mt-1.5 font-mono text-xs" style={{ color: 'rgba(198,168,124,0.55)' }}>
                  {t.celebration}
                </p>
              </figcaption>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
