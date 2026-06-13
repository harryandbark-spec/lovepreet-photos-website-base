import { useState } from 'react'

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
        <h2 className="text-center font-display text-4xl italic text-ink lg:text-5xl" style={{ fontWeight: 500 }}>
          Logistics &amp; Curations
        </h2>

        <div className="mx-auto mt-12 max-w-[800px]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q} className="border-b" style={{ borderColor: 'rgba(31,29,26,0.1)' }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl text-ink lg:text-2xl" style={{ fontWeight: 500 }}>
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 text-2xl leading-none text-champagne transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.7)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
