export default function Make() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl italic text-ink lg:text-5xl" style={{ fontWeight: 500 }}>
            Our Story
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: 'rgba(31,29,26,0.7)' }}>
            "It started with a single wedding — a borrowed camera and a feeling that never left."
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl italic" style={{ color: 'rgba(31,29,26,0.9)', fontWeight: 500 }}>
            The Craft
          </h2>
          <p className="mt-4 max-w-2xl text-base" style={{ color: 'rgba(31,29,26,0.7)' }}>
            Years later, that same instinct guides every frame – waiting for the moment no one poses for, blending the poetry of stills with the movement of film.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl italic" style={{ color: 'rgba(31,29,26,0.9)', fontWeight: 500 }}>
            South Asian Weddings
          </h2>
          <p className="mt-4 max-w-2xl text-base" style={{ color: 'rgba(31,29,26,0.7)' }}>
            Multi‑day celebrations, the vibrant chaos of Sangeet, the intimacy of Anand Karaj, the grandeur of the reception – I know when to be invisible and when to direct, capturing the richness of each ritual.
          </p>
        </div>

        <div className="text-center">
          <p className="font-display text-xl italic" style={{ color: 'rgba(31,29,26,0.8)' }}>
            This is the work I love – and I'd love to be part of your story too.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden" style={{ outline: '4px solid rgba(166,103,116,0.3)' }}>
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Lovepreet portrait"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
