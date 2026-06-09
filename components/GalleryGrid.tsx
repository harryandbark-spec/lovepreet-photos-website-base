const FRAMES = [
  {
    title: 'The Vibrant Sangeet & Maiyan Rituals',
    aspect: 'aspect-[2/3]',
  },
  {
    title: 'The Sacred Anand Karaj Ceremony',
    aspect: 'aspect-video',
  },
  {
    title: 'Intimate Editorial Portraits',
    aspect: 'aspect-square',
  },
  {
    title: 'The Grand Reception',
    aspect: 'aspect-[3/4]',
  },
]

export function GalleryGrid() {
  return (
    <section id="gallery" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <h2 className="text-center font-display text-4xl italic text-ink lg:text-5xl">
          The Documented Chapters
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {FRAMES.map((frame) => (
            <figure
              key={frame.title}
              className={`group relative flex ${frame.aspect} items-end overflow-hidden bg-linen transition-all duration-500 hover:scale-[1.02]`}
              aria-label={`${frame.title} — Langley, British Columbia`}
              loading="lazy"
            >
              <figcaption className="relative z-10 m-6 font-display text-lg italic text-ink/50 transition-opacity duration-500 group-hover:opacity-0">
                {frame.title}
              </figcaption>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-ink/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="m-6">
                  <p className="font-display text-xl italic text-canvas">
                    {frame.title}
                  </p>
                  <p className="eyebrow mt-2 text-[0.65rem] text-champagne">
                    Langley, British Columbia
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
