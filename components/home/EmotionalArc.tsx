const PHASES = [
  {
    number: '01',
    phase: 'Getting Ready',
    title: 'Quiet Before the Crescendo',
    body: 'The early morning light. The bridesmaids adjusting a dupatta. The groom\'s hands trembling slightly as his father ties his turban. These unguarded moments before the ceremony are where the most honest emotions live — and we never miss them.',
    img: '/placeholder.svg?height=560&width=900',
    align: 'left',
  },
  {
    number: '02',
    phase: 'The Ceremony',
    title: 'Sacred Stillness, Moving Story',
    body: 'Whether it\'s the Lavaan circling the Guru Granth Sahib Ji, the exchange of garlands, or the first moment a couple\'s eyes meet at the altar — we capture the ceremony\'s spiritual weight without disturbing it.',
    img: '/placeholder.svg?height=560&width=900',
    align: 'right',
  },
  {
    number: '03',
    phase: 'First Dance',
    title: 'The World Narrows to Two',
    body: 'A first dance is not a performance — it\'s the first moment of true privacy in a day surrounded by hundreds. We frame it accordingly, wide enough to feel the room, intimate enough to feel the moment.',
    img: '/placeholder.svg?height=560&width=900',
    align: 'left',
  },
  {
    number: '04',
    phase: 'The Reception',
    title: 'Pure, Uninhibited Joy',
    body: 'The speeches that reduce a room to tears. The moment the dhol begins and every generation joins the dance floor. The reception is where culture and celebration collide — and we document every glorious second of it.',
    img: '/placeholder.svg?height=560&width=900',
    align: 'right',
  },
]

export function EmotionalArc() {
  return (
    <section className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">The Story Arc</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            The Emotional Journey
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60">
            A wedding day has a natural rhythm — a sequence of emotions that builds,
            peaks, and settles into something deeply felt. We follow that arc deliberately.
          </p>
        </div>

        {/* Phases */}
        <div className="mt-16 flex flex-col gap-0">
          {PHASES.map((phase, i) => (
            <div
              key={phase.number}
              className={`grid items-center gap-0 border-t border-ink/8 lg:grid-cols-2 ${
                i === PHASES.length - 1 ? 'border-b' : ''
              }`}
            >
              {/* Image — alternates left/right on desktop */}
              <div
                className={`relative overflow-hidden bg-linen ${
                  phase.align === 'right' ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={phase.img}
                    alt={phase.phase}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-0 py-10 ${
                  phase.align === 'right'
                    ? 'lg:order-1 lg:pr-14'
                    : 'lg:order-2 lg:pl-14'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl italic text-champagne/40">
                    {phase.number}
                  </span>
                  <span className="eyebrow text-[0.6rem] text-ink/40">{phase.phase}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink lg:text-3xl">
                  {phase.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/65">
                  {phase.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
