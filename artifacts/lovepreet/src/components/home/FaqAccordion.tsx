import { useState } from 'react'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Do you accommodate multi-day South Asian wedding itineraries?',
    a: 'Absolutely. Our collections are entirely custom-tailored to cover Sangeet, Maiyan, Temple Ceremonies, and Receptions seamlessly.',
  },
  {
    q: 'What are the benefits of booking your unified Photos & Films team?',
    a: 'A single cohesive creative direction. Our photographers and cinematographers never fight for the same angle — lighting matches perfectly, and you only deal with one point of contact.',
  },
  {
    q: 'What is your typical delivery window?',
    a: 'Sneak peeks within 7 days. Complete galleries and cinema features delivered within 8-12 weeks.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill out the form below or call us at +1 604-365-7401. We will schedule a private consultation to map out your timeline.',
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="logistics" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="text-center">
          <h2 className="font-display text-4xl italic text-ink lg:text-5xl" style={{ fontWeight: 500 }}>
            Logistics &amp; Curations
          </h2>
        </RevealOnScroll>

        <div className="mx-auto mt-12 max-w-[800px]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b"
                style={{ borderColor: 'rgba(31,29,26,0.1)' }}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  whileHover={{ backgroundColor: 'rgba(31,29,26,0.02)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-display text-xl text-ink lg:text-2xl" style={{ fontWeight: 500 }}>
                    {faq.q}
                  </span>
                  <motion.span
                    className="shrink-0 text-2xl leading-none text-champagne"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    +
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="pb-6 font-sans text-base leading-relaxed"
                        style={{ color: 'rgba(31,29,26,0.7)' }}
                      >
                        {faq.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
