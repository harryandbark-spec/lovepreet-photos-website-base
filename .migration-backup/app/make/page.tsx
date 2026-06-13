import Image from 'next/image';

export default function Make() {
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Opening (Origin) */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl italic text-ink lg:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-ink/70">
            "It started with a single wedding in [city, year] – a borrowed camera and a feeling that never left."
          </p>
        </div>

        {/* Transition into Craft */}
        <div className="mb-12">
          <h2 className="font-display text-3xl italic text-ink/90">
            The Craft
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink/70">
            Years later, that same instinct guides every frame – waiting for the moment no one poses for, blending the poetry of stills with the movement of film.
          </p>
        </div>

        {/* The Specialization */}
        <div className="mb-12">
          <h2 className="font-display text-3xl italic text-ink/90">
            South Asian Weddings
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink/70">
            Multi‑day celebrations, the vibrant chaos of Sangeet, the intimacy of Anand Karaj, the grandeur of the reception – I know when to be invisible and when to direct, capturing the richness of each ritual.
          </p>
        </div>

        {/* Closing line */}
        <div className="text-center">
          <p className="font-display text-xl italic text-ink/80">
            This is the work I love – and I’d love to be part of your story too.
          </p>
        </div>

        {/* Placeholder for a portrait or behind‑the‑scenes image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-accent">
            <Image
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Lovepreet portrait placeholder"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
