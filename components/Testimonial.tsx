const TESTIMONIALS = [
  {
    quote:
      "Lovepreet and the team didn't just capture our wedding — they protected our peace. Managing a 4-day Sikh wedding across Surrey and Langley is chaotic, but their crew was synchronized, calm, and invisible. The final film felt like a theatrical masterpiece.",
    couple: 'Aman & Nav',
    venue: 'Surrey & Langley',
    date: 'October 2024',
    celebration: 'Multi-Day Sikh Wedding',
  },
  {
    quote:
      "We had family flying in from the UK and Australia who couldn't make it in person. The live streaming service meant they watched the Anand Karaj in real time — my mother-in-law in Birmingham was crying on FaceTime afterward. The quality was stunning.",
    couple: 'Priya & Harjit',
    venue: 'Langley, BC',
    date: 'August 2024',
    celebration: 'Full Experience Package',
  },
  {
    quote:
      "As a couple, we were completely at ease throughout — we never felt like we were performing for a camera. The photos capture who we actually are. When we opened our gallery, we were in tears. These are images we will pass down for generations.",
    couple: 'Simran & Deep',
    venue: 'Vancouver, BC',
    date: 'June 2024',
    celebration: 'Premium Multi-Day',
  },
]

export function Testimonial() {
  return (
    <section className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Client Stories</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl">
            Words from Our Couples
          </h2>
        </div>

        {/* Featured quote — large */}
        <figure className="mx-auto mt-14 max-w-3xl text-center">
          <span className="font-display text-7xl italic leading-none text-champagne/40">
            &ldquo;
          </span>
          <blockquote className="-mt-5 font-display text-2xl italic leading-relaxed text-ink lg:text-3xl">
            {TESTIMONIALS[0].quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-1">
            <span className="font-display text-lg text-ink">
              {TESTIMONIALS[0].couple}
            </span>
            <span className="eyebrow text-[0.6rem] text-ink/40">
              {TESTIMONIALS[0].venue} &middot; {TESTIMONIALS[0].date}
            </span>
            <span className="mt-1 font-mono text-xs text-champagne/70">
              {TESTIMONIALS[0].celebration}
            </span>
          </figcaption>
        </figure>

        {/* Secondary testimonials — 2 column */}
        <div className="mt-16 grid gap-px border border-ink/8 bg-ink/8 lg:grid-cols-2">
          {TESTIMONIALS.slice(1).map((t) => (
            <div key={t.couple} className="flex flex-col bg-linen p-8 lg:p-10">
              <span className="font-display text-4xl italic leading-none text-champagne/35">
                &ldquo;
              </span>
              <blockquote className="-mt-2 font-display text-xl italic leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/8 pt-6">
                <p className="font-display text-base text-ink">{t.couple}</p>
                <p className="eyebrow mt-1 text-[0.6rem] text-ink/40">
                  {t.venue} &middot; {t.date}
                </p>
                <p className="mt-1 font-mono text-xs text-champagne/60">
                  {t.celebration}
                </p>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
