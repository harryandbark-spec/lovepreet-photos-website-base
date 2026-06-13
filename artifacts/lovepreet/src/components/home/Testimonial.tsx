import { RevealOnScroll } from '@/components/RevealOnScroll'

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
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <RevealOnScroll className="flex flex-col items-center">
          <span className="eyebrow text-[0.65rem] text-champagne">Client Stories</span>
          <h2 className="mt-4 text-center font-display text-4xl italic text-ink lg:text-5xl heading-flourish" style={{ fontWeight: 500 }}>
            Words from Our Couples
          </h2>
        </RevealOnScroll>

        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <div className="flex justify-center" aria-hidden="true">
            <span className="font-display text-8xl italic leading-none select-none" style={{ color: 'rgba(198,168,124,0.3)' }}>
              &ldquo;
            </span>
          </div>
          <blockquote className="-mt-6 font-display text-2xl italic leading-[1.55] text-ink lg:text-3xl">
            {TESTIMONIALS[0].quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(198,168,124,0.6))' }} />
            <div className="h-1 w-1 rotate-45" style={{ backgroundColor: 'rgba(198,168,124,0.6)' }} />
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(198,168,124,0.6))' }} />
          </div>
          <figcaption className="mt-6 flex flex-col items-center gap-1.5">
            <span className="font-display text-xl text-ink">{TESTIMONIALS[0].couple}</span>
            <span className="eyebrow text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.4)' }}>
              {TESTIMONIALS[0].venue} &middot; {TESTIMONIALS[0].date}
            </span>
            <span className="mt-1 font-mono text-xs" style={{ color: 'rgba(198,168,124,0.65)' }}>
              {TESTIMONIALS[0].celebration}
            </span>
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.couple}
              className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 lg:p-10"
              style={{
                backgroundColor: 'var(--linen)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              <span className="font-display text-5xl italic leading-none select-none" style={{ color: 'rgba(198,168,124,0.3)' }} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="-mt-2 font-display text-xl italic leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(31,29,26,0.08)' }}>
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 transition-all duration-300 group-hover:w-8" style={{ backgroundColor: 'rgba(198,168,124,0.6)' }} />
                  <p className="font-display text-base italic text-ink">{t.couple}</p>
                </div>
                <p className="eyebrow mt-2 text-[0.6rem]" style={{ color: 'rgba(31,29,26,0.4)' }}>
                  {t.venue} &middot; {t.date}
                </p>
                <p className="mt-1.5 font-mono text-xs" style={{ color: 'rgba(198,168,124,0.55)' }}>
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
