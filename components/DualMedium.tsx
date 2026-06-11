export function DualMedium() {
  return (
    <section id="offerings" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">What We Create</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            The Dual Medium Advantage
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed text-ink/55">
            Most studios force you to choose between a great photographer and a great
            cinematographer. We eliminate that compromise entirely.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Fine-Art Stills */}
          <div className="flex flex-col">
            <div className="group relative aspect-[4/5] overflow-hidden bg-canvas">
              <img
                src="https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Editorial fine-art still — bride in soft natural light"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="mt-6 border-t border-ink/8 pt-6">
              <h3 className="font-display text-2xl text-ink">Fine-Art Stills</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink/65">
                Editorial lighting, portraiture clarity, and quiet emotional
                documentation. Every frame is composed to live as a timeless
                heirloom on your walls and in your hands.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {[
                  'Medium format aesthetic quality',
                  'Natural & editorial lighting',
                  '350–700+ images delivered',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-ink/55">
                    <span className="h-px w-4 bg-champagne/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cinematic Films */}
          <div className="flex flex-col">
            <div className="group relative aspect-video overflow-hidden bg-canvas">
              <img
                src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cinematic film still — ceremony emotion"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M1 1L13 8L1 15V1Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-ink/8 pt-6">
              <h3 className="font-display text-2xl text-ink">Cinematic Films</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink/65">
                Premium soundscapes, culturally attuned pacing, and multi-day
                storytelling. Heirloom films that move with the emotion of every
                ritual and celebration.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {[
                  '3–8 minute feature films',
                  'Original music licensing',
                  'Multi-ceremony narrative arc',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-ink/55">
                    <span className="h-px w-4 bg-champagne/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="mx-auto mt-14 max-w-3xl border border-champagne/50 bg-canvas px-8 py-7 text-center">
          <p className="font-sans text-base leading-relaxed text-ink/75">
            <span className="font-display text-xl italic text-ink">
              Single Crew Synergy
            </span>{' '}
            &mdash; One team, synchronized timelines, and a cohesive visual
            identity across your entire multi-day itinerary. No separate vendors,
            no creative conflicts, no timeline gaps.
          </p>
        </div>
      </div>
    </section>
  )
}
