const FRAMES = [
  {
    title: 'The Vibrant Sangeet & Maiyan Rituals',
    location: 'Surrey, BC',
    img: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-2',
    aspect: 'h-full min-h-[420px]',
  },
  {
    title: 'The Sacred Anand Karaj',
    location: 'Langley, BC',
    img: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: '',
    aspect: 'h-full min-h-[200px]',
  },
  {
    title: 'Intimate Editorial Portraits',
    location: 'Lower Mainland, BC',
    img: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: '',
    aspect: 'h-full min-h-[200px]',
  },
  {
    title: 'The Grand Reception',
    location: 'Vancouver, BC',
    img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-2',
    aspect: 'h-full min-h-[420px]',
  },
  {
    title: 'The Baraat Procession',
    location: 'Surrey, BC',
    img: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: '',
    aspect: 'h-full min-h-[200px]',
  },
  {
    title: 'Mehndi & Getting Ready',
    location: 'Langley, BC',
    img: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: '',
    aspect: 'h-full min-h-[200px]',
  },
]

export function GalleryGrid() {
  return (
    <section id="gallery" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Portfolio</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            The Documented Chapters
          </h2>
          <p className="mt-5 max-w-xl text-center font-sans text-base leading-relaxed text-ink/60">
            Each frame a deliberate decision. Each ceremony, a chapter that deserves to be
            preserved with intention.
          </p>
        </div>

        {/* Editorial grid — desktop masonry-style, mobile stack */}
        <div className="mt-14 hidden grid-cols-3 grid-rows-[repeat(4,minmax(200px,1fr))] gap-4 lg:grid">
          {/* Col 1, rows 1-2 */}
          <GalleryFrame frame={FRAMES[0]} className="col-start-1 row-start-1 row-end-3" />
          {/* Col 2, row 1 */}
          <GalleryFrame frame={FRAMES[1]} className="col-start-2 row-start-1 row-end-2" />
          {/* Col 2, row 2 */}
          <GalleryFrame frame={FRAMES[2]} className="col-start-2 row-start-2 row-end-3" />
          {/* Col 3, rows 1-2 */}
          <GalleryFrame frame={FRAMES[3]} className="col-start-3 row-start-1 row-end-3" />
          {/* Col 1-2, row 3 */}
          <GalleryFrame frame={FRAMES[4]} className="col-start-1 col-end-3 row-start-3 row-end-4" />
          {/* Col 3, row 3 */}
          <GalleryFrame frame={FRAMES[5]} className="col-start-3 row-start-3 row-end-4" />
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
          {FRAMES.map((frame) => (
            <GalleryFrame key={frame.title} frame={frame} className="aspect-[3/4]" />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryFrame({
  frame,
  className,
}: {
  frame: (typeof FRAMES)[number]
  className?: string
}) {
  return (
    <figure
      className={`group relative overflow-hidden bg-linen ${className}`}
      aria-label={`${frame.title} — ${frame.location}`}
    >
      {/* Photo */}
      <img
        src={frame.img}
        alt={frame.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Default caption */}
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-400 group-hover:opacity-0">
        <p className="font-display text-base italic leading-tight text-white/80">
          {frame.title}
        </p>
      </figcaption>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-ink/65 p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <p className="font-display text-lg italic text-canvas">{frame.title}</p>
        <p className="eyebrow mt-2 text-[0.6rem] text-champagne">{frame.location}</p>
      </div>
    </figure>
  )
}
