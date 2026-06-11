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
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish">
            Words from Our Couples
          </h2>
        </div>

        {/* Featured quote */}
        <figure className="mx-auto mt-16 max-w-3xl text-center">
          {/* Decorative opening mark */}
          <div className="flex justify-center" aria-hidden="true">
            <span className="font-display text-8xl italic leading-none text-champagne/30 select-none">
              &ldquo;
            </span>
          </div>
          <blockquote className="-mt-6 font-display text-2xl italic leading-[1.55] text-ink lg:text-3xl">
            {TESTIMONIALS[0].quote}
          </blockquote>
          {/* Flourish divider */}
          <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-champagne/60" />
            <div className="h-1 w-1 rotate-45 bg-champagne/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-champagne/60" />
          </div>
          <figcaption className="mt-6 flex flex-col items-center gap-1.5">
            <span className="font-display text-xl text-ink">
              {TESTIMONIALS[0].couple}
            </span>
            <span className="eyebrow text-[0.6rem] text-ink/40">
              {TESTIMONIALS[0].venue} &middot; {TESTIMONIALS[0].date}
            </span>
            <span className="mt-1 font-mono text-xs text-champagne/65">
              {TESTIMONIALS[0].celebration}
            </span>
          </figcaption>
        </figure>

        {/* Secondary testimonials */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.couple}
              className="group flex flex-col bg-linen p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] lg:p-10"
            >
              <span className="font-display text-5xl italic leading-none text-champagne/30 select-none" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="-mt-2 font-display text-xl italic leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/8 pt-6">
                {/* Couple name with serif display treatment */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 bg-champagne/60 transition-all duration-300 group-hover:w-8" />
                  <p className="font-display text-base italic text-ink">{t.couple}</p>
                </div>
                <p className="eyebrow mt-2 text-[0.6rem] text-ink/40">
                  {t.venue} &middot; {t.date}
                </p>
                <p className="mt-1.5 font-mono text-xs text-champagne/55">
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
