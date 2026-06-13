import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CEREMONIES = [
  {
    id: 'sangeet',
    label: 'Sangeet',
    title: 'The Night of Celebration',
    body: 'A vibrant evening of dance, music, and family storytelling. We capture the raw joy — the aunties breaking into dance, the groomsmen group choreography, and the candlelit moments between families meeting for the first time.',
    detail: 'Evening lighting · Multiple cameras · Candid + editorial',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85&fit=crop',
  },
  {
    id: 'baraat',
    label: 'Baraat',
    title: 'The Grand Procession',
    body: 'The Baraat is pure cinematic energy — the dhol, the dancing, the arrival of the groom and his family. We position our crew across the procession route to capture every angle of this moving celebration.',
    detail: 'Outdoor · Drone-ready · High energy documentary',
    img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=85&fit=crop',
  },
  {
    id: 'anand-karaj',
    label: 'Anand Karaj',
    title: 'The Sacred Ceremony',
    body: 'The Anand Karaj is the spiritual heart of a Sikh wedding — the four Lavaan circling the Guru Granth Sahib Ji. We approach this ceremony with the deepest reverence, capturing its profound meaning with stillness and care.',
    detail: 'Gurdwara lighting · Respectful positioning · Emotional focus',
    img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1200&q=85&fit=crop',
  },
  {
    id: 'mehndi',
    label: 'Mehndi',
    title: 'The Art of Adornment',
    body: 'Intimate, warm, and full of quiet beauty. The Mehndi ceremony is where we find the details — the intricate henna patterns, the jewellery, the whispered excitement between the bride and her sisters.',
    detail: 'Detail macro photography · Natural light · Intimate documentary',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=85&fit=crop',
  },
]

export function CulturalShowcase() {
  const [active, setActive] = useState(0)
  const ceremony = CEREMONIES[active]

  return (
    <section id="cultural" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'var(--canvas)', color: 'var(--ink)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-[0.65rem] text-champagne">South Asian Weddings</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish">
            Every Ritual. Fully Honoured.
          </h2>
          <p className="mt-6 max-w-2xl text-center font-sans text-base leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.6)' }}>
            Multi-day South Asian celebrations are layered with meaning. We have the
            cultural fluency and the creative range to document every chapter with the
            depth it deserves.
          </p>
        </motion.div>

        <div className="mt-20 lg:mt-28 relative">
          <div className="relative w-full lg:w-[75%] lg:ml-auto aspect-[4/3] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={ceremony.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={ceremony.img}
                  alt={ceremony.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(31,29,26,0.2), transparent)' }} />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45%] mt-[-50px] lg:mt-0 z-10"
          >
            <div
              className="rounded-[30px] p-8 lg:p-12"
              style={{
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                color: 'var(--ink)',
              }}
            >
              <div className="flex gap-6 overflow-x-auto border-b pb-6 mb-8 no-scrollbar" style={{ borderColor: 'rgba(31,29,26,0.1)' }}>
                {CEREMONIES.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-start shrink-0"
                  >
                    <span
                      className="eyebrow text-[0.55rem] tracking-widest transition-colors"
                      style={{ color: active === i ? 'var(--champagne)' : 'rgba(31,29,26,0.3)' }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="mt-1 font-display text-lg italic transition-colors"
                      style={{ color: active === i ? 'var(--ink)' : 'rgba(31,29,26,0.4)' }}
                    >
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={ceremony.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display text-3xl italic text-ink lg:text-4xl">
                    {ceremony.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-px w-8" style={{ backgroundColor: 'rgba(198,168,124,0.5)' }} />
                    <div className="h-px w-20" style={{ background: 'linear-gradient(to right, rgba(198,168,124,0.5), transparent)' }} />
                  </div>
                  <p className="mt-6 font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.7)' }}>
                    {ceremony.body}
                  </p>
                  <div className="mt-8 pl-5" style={{ borderLeft: '2px solid rgba(198,168,124,0.4)' }}>
                    <p className="eyebrow text-[0.65rem] tracking-[0.2em] text-champagne">
                      {ceremony.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 overflow-hidden rounded-[30px] p-8 lg:p-12 shadow-xl"
          style={{
            border: '1px solid rgba(198,168,124,0.2)',
            backgroundColor: 'var(--linen)',
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow text-[0.65rem] text-champagne">Global Family Access</span>
              <h3 className="mt-3 font-display text-3xl italic text-ink lg:text-4xl">
                HD Live Streaming
              </h3>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-balance" style={{ color: 'rgba(31,29,26,0.65)' }}>
                For families who cannot travel from the UK, Australia, India, or
                across North America — we offer professional HD live streaming of your
                ceremonies. Crystal-clear picture, low-latency broadcast, and a private
                link shared securely with your family. They watch live. They feel present.
              </p>
              <ul className="mt-8 flex flex-wrap gap-5">
                {[
                  'Professional broadcast quality',
                  'Private password-protected stream',
                  'Global family access',
                  'Multi-camera live mix',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 eyebrow text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.5)' }}>
                    <span className="h-1 w-1 rounded-full bg-champagne" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center lg:pl-10">
              <a
                href="#inquire"
                className="whitespace-nowrap rounded-full border px-8 py-3.5 font-sans text-sm font-light uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:bg-champagne hover:text-canvas"
                style={{ borderColor: 'var(--champagne)' }}
              >
                Add Live Streaming
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
