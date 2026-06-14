import { useEffect, useRef, useState } from 'react'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { ImageSkeleton } from '@/components/LoadingSkeleton'

const FRAMES = [
  {
    title: 'The Vibrant Sangeet & Maiyan Rituals',
    location: 'Surrey, BC',
    img: '/placeholder-wedding-1.jpg',
  },
  {
    title: 'The Sacred Anand Karaj',
    location: 'Langley, BC',
    img: '/placeholder-wedding-2.jpg',
  },
  {
    title: 'Intimate Editorial Portraits',
    location: 'Lower Mainland, BC',
    img: '/placeholder-wedding-3.jpg',
  },
  {
    title: 'The Grand Reception',
    location: 'Vancouver, BC',
    img: '/placeholder-wedding-4.jpg',
  },
  {
    title: 'The Baraat Procession',
    location: 'Surrey, BC',
    img: '/placeholder-wedding-5.jpg',
  },
  {
    title: 'Mehndi & Getting Ready',
    location: 'Langley, BC',
    img: '/placeholder-wedding-6.jpg',
  },
]

export function GalleryGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set())

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll<HTMLElement>('.gallery-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.animation = `staggerReveal 0.7s cubic-bezier(0.16,1,0.3,1) ${el.dataset.delay ?? '0ms'} both`
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-28" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Portfolio</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish" style={{ fontWeight: 500 }}>
            The Documented Chapters
          </h2>
          <p className="mt-8 max-w-xl text-center font-sans text-base leading-relaxed" style={{ color: 'rgba(31,29,26,0.6)' }}>
            Each frame a deliberate decision. Each ceremony, a chapter that deserves to be
            preserved with intention.
          </p>
        </RevealOnScroll>

        <div className="mt-14 hidden grid-cols-3 gap-4 lg:grid" style={{ gridTemplateRows: 'repeat(3,minmax(220px,1fr))' }}>
          <GalleryFrame frame={FRAMES[0]} className="col-start-1 row-start-1 row-span-2" delay="80ms" index={0} />
          <GalleryFrame frame={FRAMES[1]} className="col-start-2 row-start-1" delay="160ms" index={1} />
          <GalleryFrame frame={FRAMES[2]} className="col-start-2 row-start-2" delay="240ms" index={2} />
          <GalleryFrame frame={FRAMES[3]} className="col-start-3 row-start-1 row-span-2" delay="120ms" index={3} />
          <GalleryFrame frame={FRAMES[4]} className="col-start-1 col-span-2 row-start-3" delay="200ms" index={4} />
          <GalleryFrame frame={FRAMES[5]} className="col-start-3 row-start-3" delay="280ms" index={5} />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 lg:hidden">
          {FRAMES.map((frame, i) => (
            <GalleryFrame
              key={frame.title}
              frame={frame}
              className="aspect-[3/4]"
              delay={`${i * 80}ms`}
              index={i}
            />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.5))' }} />
          <div className="h-1 w-1 rounded-full" style={{ backgroundColor: 'rgba(198,168,124,0.5)' }} />
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(198,168,124,0.5))' }} />
        </div>
      </div>
    </section>
  )
}

function GalleryFrame({
  frame,
  className,
  delay,
  index,
}: {
  frame: (typeof FRAMES)[number]
  className?: string
  delay?: string
  index: number
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <figure
      className={`gallery-reveal group relative overflow-hidden cursor-pointer film-grain warm-tint ${className}`}
      aria-label={`${frame.title} — ${frame.location}`}
      data-delay={delay}
      style={{ opacity: 0, backgroundColor: 'var(--linen)' }}
    >
      {!isLoaded && (
        <div className="absolute inset-0">
          <ImageSkeleton className="h-full w-full" />
        </div>
      )}
      <img
        src={frame.img}
        alt={frame.title}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:scale-[1.07] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />

      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}
      />

      <figcaption className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-2">
        <p className="font-display text-base italic leading-tight" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {frame.title}
        </p>
      </figcaption>

      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-all duration-450 ease-out group-hover:opacity-100"
        style={{ backgroundColor: 'rgba(31,29,26,0.7)' }}
      >
        <div className="mb-3 h-px w-8 transition-all duration-500 group-hover:w-14" style={{ backgroundColor: 'var(--champagne)' }} />
        <p className="font-display text-lg italic leading-snug" style={{ color: 'var(--canvas)' }}>{frame.title}</p>
        <p className="eyebrow mt-2 text-[0.6rem] text-champagne">{frame.location}</p>
        <p className="mt-3 eyebrow text-[0.55rem] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          View Chapter
        </p>
      </div>
    </figure>
  )
}
