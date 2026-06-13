const PHASES = [
  {
    number: '01',
    phase: 'Morning Preparation',
    title: 'Anticipation & Intimacy',
    body: 'The quiet moments before the ceremony begins. The getting ready rituals, the family gatherings, the nervous laughter and the tears that haven\'t fallen yet. We document this chapter without intrusion.',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85&fit=crop',
    align: 'left',
  },
  {
    number: '02',
    phase: 'The Ceremony',
    title: 'Reverence & Joy',
    body: 'From the sacred vows to the dancing baraat, we move fluidly between meditative stillness and kinetic energy. The ceremony is captured with the gravity it deserves — every ritual, every emotion.',
    img: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=900&q=85&fit=crop',
    align: 'right',
  },
  {
    number: '03',
    phase: 'The Portraits',
    title: 'Editorial & Eternal',
    body: 'Golden-hour light, architectural frames, and the natural chemistry between you two. Our portrait sessions are short, intentional, and designed to create heirloom images — not just photographs.',
    img: 'https://images.unsplash.com/photo-1610173827869-f8a1a17c65f3?w=900&q=85&fit=crop',
    align: 'left',
  },
  {
    number: '04',
    phase: 'The Reception',
    title: 'Celebration & Release',
    body: 'The night unfolds into pure celebration. First dances, speeches that bring the room to tears, the floor erupting with the entire family. We are everywhere and nowhere — present but invisible.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85&fit=crop',
    align: 'right',
  },
]

export function EmotionalArc() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--linen)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">The Story Arc</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl" style={{ fontWeight: 500 }}>
            The Emotional Journey
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.6)' }}>
            A wedding day has a natural rhythm — a sequence of emotions that builds,
            peaks, and settles into something deeply felt. We follow that arc deliberately.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-0">
          {PHASES.map((phase, i) => (
            <div
              key={phase.number}
              className="grid items-center gap-0 border-t lg:grid-cols-2"
              style={{
                borderColor: 'rgba(31,29,26,0.08)',
                borderBottom: i === PHASES.length - 1 ? '1px solid rgba(31,29,26,0.08)' : undefined,
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ order: phase.align === 'right' ? 2 : 1 }}
              >
                <div className="aspect-[16/10] overflow-hidden film-grain warm-tint">
                  <img
                    src={phase.img}
                    alt={phase.phase}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div
                className="flex flex-col justify-center px-0 py-10"
                style={{
                  order: phase.align === 'right' ? 1 : 2,
                  paddingLeft: phase.align === 'right' ? undefined : '3.5rem',
                  paddingRight: phase.align === 'right' ? '3.5rem' : undefined,
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl italic" style={{ color: 'rgba(198,168,124,0.4)' }}>
                    {phase.number}
                  </span>
                  <span className="eyebrow text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.4)' }}>{phase.phase}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink lg:text-3xl" style={{ fontWeight: 500 }}>
                  {phase.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.65)' }}>
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
