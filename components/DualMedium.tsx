export function DualMedium() {
  return (
    <section id="offerings" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h2 className="text-center font-display text-4xl italic text-ink lg:text-5xl">
          The Dual Medium Advantage
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Fine-Art Stills */}
          <div className="flex flex-col">
            <div
              className="flex aspect-[4/5] items-end bg-canvas"
              role="img"
              aria-label="Editorial fine-art still of a bride in soft natural lighting."
              loading="lazy"
            >
              <p className="m-6 font-display text-base italic text-ink/40">
                Editorial portraiture &mdash; soft natural lighting and refined
                clarity.
              </p>
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">
              Fine-Art Stills
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
              Editorial lighting, portraiture clarity, and quiet emotional
              documentation. Every frame is composed to live as a timeless
              heirloom on your walls and in your hands.
            </p>
          </div>

          {/* Cinematic Films */}
          <div className="flex flex-col">
            <div
              className="flex aspect-video items-end bg-canvas"
              role="img"
              aria-label="Cinematic film still capturing movement and emotion during a ceremony."
              loading="lazy"
            >
              <p className="m-6 font-display text-base italic text-ink/40">
                Cinematic storytelling &mdash; premium soundscapes and cultural
                pacing.
              </p>
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">
              Cinematic Films
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink/70">
              Premium soundscapes, culturally attuned pacing, and multi-day
              storytelling. Heirloom films that move with the emotion of every
              ritual and celebration.
            </p>
          </div>
        </div>

        {/* Callout badge */}
        <div className="mx-auto mt-14 max-w-3xl border border-champagne px-8 py-6 text-center">
          <p className="font-sans text-base leading-relaxed text-ink/80">
            <span className="font-display text-xl italic text-ink">
              Single Crew Synergy
            </span>{' '}
            &mdash; One team, synchronized timelines, and a cohesive visual
            identity across your entire multi-day itinerary.
          </p>
        </div>
      </div>
    </section>
  )
}
