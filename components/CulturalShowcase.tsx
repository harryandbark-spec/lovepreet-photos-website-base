'use client'

import { useState } from 'react'

const CEREMONIES = [
  {
    id: 'sangeet',
    label: 'Sangeet',
    title: 'The Night of Celebration',
    body: 'A vibrant evening of dance, music, and family storytelling. We capture the raw joy — the aunties breaking into dance, the groomsmen group choreography, and the candlelit moments between families meeting for the first time.',
    detail: 'Evening lighting · Multiple cameras · Candid + editorial',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'baraat',
    label: 'Baraat',
    title: 'The Grand Procession',
    body: 'The Baraat is pure cinematic energy — the dhol, the dancing, the arrival of the groom and his family. We position our crew across the procession route to capture every angle of this moving celebration.',
    detail: 'Outdoor · Drone-ready · High energy documentary',
    img: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'anand-karaj',
    label: 'Anand Karaj',
    title: 'The Sacred Ceremony',
    body: 'The Anand Karaj is the spiritual heart of a Sikh wedding — the four Lavaan circling the Guru Granth Sahib Ji. We approach this ceremony with the deepest reverence, capturing its profound meaning with stillness and care.',
    detail: 'Gurdwara lighting · Respectful positioning · Emotional focus',
    img: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'mehndi',
    label: 'Mehndi',
    title: 'The Art of Adornment',
    body: 'Intimate, warm, and full of quiet beauty. The Mehndi ceremony is where we find the details — the intricate henna patterns, the jewellery, the whispered excitement between the bride and her sisters.',
    detail: 'Detail macro photography · Natural light · Intimate documentary',
    img: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

export function CulturalShowcase() {
  const [active, setActive] = useState(0)
  const ceremony = CEREMONIES[active]

  return (
    <section id="cultural" className="bg-ink py-20 text-canvas lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">South Asian Weddings</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-canvas lg:text-5xl">
            Every Ritual. Fully Honoured.
          </h2>
          <p className="mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-canvas/55">
            Multi-day South Asian celebrations are layered with meaning. We have the
            cultural fluency and the creative range to document every chapter with the
            depth it deserves.
          </p>
        </div>

        {/* Tabs + content */}
        <div className="mt-14">
          {/* Tab bar */}
          <div
            className="flex gap-1 overflow-x-auto border-b border-white/10 pb-0"
            role="tablist"
            aria-label="Ceremony types"
          >
            {CEREMONIES.map((c, i) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${c.id}`}
                onClick={() => setActive(i)}
                className={`relative shrink-0 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 focus:outline-none ${
                  active === i
                    ? 'text-canvas'
                    : 'text-canvas/35 hover:text-canvas/65'
                }`}
              >
                {c.label}
                {active === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-champagne" />
                )}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            id={`panel-${ceremony.id}`}
            role="tabpanel"
            className="mt-0 grid gap-0 overflow-hidden lg:grid-cols-2"
            key={ceremony.id}
          >
            {/* Text side */}
            <div className="flex flex-col justify-center border-b border-white/8 py-10 pr-0 lg:border-b-0 lg:border-r lg:py-14 lg:pr-14">
              <h3 className="font-display text-3xl italic text-canvas lg:text-4xl">
                {ceremony.title}
              </h3>
              <p className="mt-6 font-sans text-base leading-relaxed text-canvas/60">
                {ceremony.body}
              </p>
              <div className="mt-8 border-l-2 border-champagne/50 pl-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-champagne/70">
                  {ceremony.detail}
                </p>
              </div>
            </div>

            {/* Image side */}
            <div className="relative overflow-hidden bg-ink/50 lg:ml-14">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={ceremony.img}
                  alt={ceremony.title}
                  className="h-full w-full object-cover opacity-75 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Streaming callout */}
        <div
          className="mt-16 overflow-hidden border border-champagne/25 p-8 lg:p-10"
          style={{
            background:
              'linear-gradient(135deg, rgba(197,168,130,0.06) 0%, rgba(197,168,130,0.02) 100%)',
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow text-[0.6rem] text-champagne">
                Global Family Access
              </span>
              <h3 className="mt-3 font-display text-2xl italic text-canvas lg:text-3xl">
                HD Live Streaming — Bring Every Family Member Into the Room
              </h3>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-canvas/55">
                For families who cannot travel from the UK, Australia, India, or
                across North America — we offer professional HD live streaming of your
                ceremonies. Crystal-clear picture, low-latency broadcast, and a private
                link shared securely with your family. They watch live. They feel present.
              </p>
              <ul className="mt-6 flex flex-wrap gap-4">
                {[
                  'Private secure stream link',
                  'HD 1080p broadcast',
                  'All ceremonies covered',
                  'Global accessibility',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-canvas/50"
                  >
                    <span className="h-px w-3 bg-champagne/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center self-start lg:self-center">
              <a
                href="#inquire"
                className="whitespace-nowrap rounded-full border border-champagne/40 px-7 py-3 font-sans text-sm text-canvas/80 transition-all duration-300 hover:border-champagne hover:text-canvas"
              >
                Ask About Streaming
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
