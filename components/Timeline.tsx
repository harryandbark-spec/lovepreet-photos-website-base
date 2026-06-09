const PHASES = [
  {
    number: '01',
    title: 'The Intentional Consult',
    body: 'Mapping multi-day timelines, ceremonial locations, and lighting windows.',
  },
  {
    number: '02',
    title: 'The Celebration Capture',
    body: 'One coordinated crew managing stills and cinematography seamlessly.',
  },
  {
    number: '03',
    title: 'The Masterpiece Delivery',
    body: 'Fine-art galleries and heirloom films within agreed delivery windows.',
  },
]

export function Timeline() {
  return (
    <section id="experience" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h2 className="text-center font-display text-4xl italic text-ink lg:text-5xl">
          The Cohesive Journey
        </h2>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-champagne/40 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {PHASES.map((phase) => (
              <div key={phase.number} className="relative flex flex-col">
                <span className="relative z-10 bg-linen pr-4 font-display text-5xl italic text-champagne">
                  {phase.number}
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-sm font-sans text-base leading-relaxed text-ink/70">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
