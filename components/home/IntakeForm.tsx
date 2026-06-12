'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  venues: string
  story: string
}

const STEPS = [
  { label: 'About You', step: 1 },
  { label: 'Your Wedding', step: 2 },
  { label: 'Your Vision', step: 3 },
]

const inputClass =
  'w-full border border-ink/15 bg-canvas px-4 py-3.5 font-sans text-base text-ink placeholder:text-ink/30 transition-colors duration-200 focus:border-ink/50 focus:outline-none'

export function IntakeForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    venues: '',
    story: '',
  })

  function set(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  function next() {
    setStep((s) => Math.min(s + 1, 3))
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="inquire" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col">
            <span className="eyebrow text-[0.65rem] text-champagne">Private Inquiry</span>
            <h2 className="mt-4 font-display text-4xl italic text-ink lg:text-5xl">
              Secure Your Timeline.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/65">
              Dates across the Lower Mainland book up to a year in advance.
              Let&apos;s start mapping your legacy collection today.
            </p>

            {/* Trust signals */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { icon: '◎', text: 'Private consultation within 48 hours' },
                { icon: '◎', text: 'No obligation — just an honest conversation' },
                { icon: '◎', text: 'Fully custom collections, no packages forced' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 text-champagne" style={{ fontSize: '0.6rem' }}>
                    {item.icon}
                  </span>
                  <span className="font-sans text-sm text-ink/60">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+16043657401"
              className="group relative mt-10 inline-block w-fit font-display text-xl italic text-ink"
            >
              Prefer to talk? +1 604-365-7401
              <span className="absolute -bottom-0.5 left-0 h-px w-full bg-champagne transition-all duration-300 group-hover:w-0" />
            </a>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center border border-champagne/40 bg-canvas px-8 py-12">
                <span className="font-display text-5xl italic text-champagne/30">&ldquo;</span>
                <p className="mt-2 font-display text-3xl italic text-ink">Thank you.</p>
                <p className="mt-5 max-w-sm font-sans text-base leading-relaxed text-ink/60">
                  Your inquiry has been received. We&apos;ll be in touch within
                  48 hours to schedule your private consultation.
                </p>
                <div className="mt-8 border-t border-ink/8 pt-6 w-full">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/30">
                    Lovepreet Photos &amp; Films
                  </p>
                </div>
              </div>
            ) : (
              <div className="border border-ink/10 bg-canvas">
                {/* Step progress */}
                <div className="flex border-b border-ink/8">
                  {STEPS.map((s) => (
                    <div
                      key={s.step}
                      className={`flex flex-1 flex-col items-center gap-1.5 py-4 transition-colors duration-300 ${
                        step === s.step
                          ? 'border-b-2 border-champagne'
                          : step > s.step
                            ? 'border-b-2 border-champagne/30'
                            : 'border-b-2 border-transparent'
                      }`}
                    >
                      <span
                        className={`font-mono text-[0.6rem] uppercase tracking-[0.18em] transition-colors ${
                          step >= s.step ? 'text-ink/60' : 'text-ink/25'
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="px-8 py-8">
                  {/* Step 1: About You */}
                  {step === 1 && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="font-display text-2xl italic text-ink">
                          Tell us who you are.
                        </p>
                        <p className="mt-2 font-sans text-sm text-ink/50">
                          We&apos;d love to know a bit about you before we talk about your day.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="eyebrow text-[0.6rem] text-ink/50">
                          Your Names
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={data.name}
                          onChange={(e) => set('name', e.target.value)}
                          placeholder="e.g. Simran & Deep"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="eyebrow text-[0.6rem] text-ink/50">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={data.email}
                          onChange={(e) => set('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="eyebrow text-[0.6rem] text-ink/50">
                          Phone{' '}
                          <span className="normal-case tracking-normal text-ink/30">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={data.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          placeholder="+1 (604) 000-0000"
                          className={inputClass}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={next}
                        disabled={!data.name || !data.email}
                        className="mt-2 w-full bg-ink px-6 py-4 font-sans text-sm text-canvas transition-opacity hover:opacity-90 disabled:opacity-30"
                      >
                        Continue &rarr;
                      </button>
                    </div>
                  )}

                  {/* Step 2: Your Wedding */}
                  {step === 2 && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="font-display text-2xl italic text-ink">
                          Tell us about your celebration.
                        </p>
                        <p className="mt-2 font-sans text-sm text-ink/50">
                          Even rough details help us understand the scope of your vision.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="event-type"
                          className="eyebrow text-[0.6rem] text-ink/50"
                        >
                          Event Type
                        </label>
                        <select
                          id="event-type"
                          value={data.eventType}
                          onChange={(e) => set('eventType', e.target.value)}
                          required
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="" disabled>
                            Select your celebration
                          </option>
                          <option>Multi-Day South Asian Wedding</option>
                          <option>Intimate Ceremony &amp; Reception</option>
                          <option>Engagement Portraiture Session</option>
                          <option>Other &mdash; let&apos;s talk</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="date"
                          className="eyebrow text-[0.6rem] text-ink/50"
                        >
                          Wedding Date(s)
                        </label>
                        <input
                          id="date"
                          type="text"
                          value={data.date}
                          onChange={(e) => set('date', e.target.value)}
                          placeholder="e.g. June 20–23, 2026"
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="venues"
                          className="eyebrow text-[0.6rem] text-ink/50"
                        >
                          Venues &amp; Locations
                        </label>
                        <input
                          id="venues"
                          type="text"
                          value={data.venues}
                          onChange={(e) => set('venues', e.target.value)}
                          placeholder="e.g. Langley, Surrey, Burnaby"
                          className={inputClass}
                        />
                      </div>

                      <div className="mt-2 flex gap-3">
                        <button
                          type="button"
                          onClick={back}
                          className="w-full border border-ink/15 px-6 py-4 font-sans text-sm text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="button"
                          onClick={next}
                          disabled={!data.eventType}
                          className="w-full bg-ink px-6 py-4 font-sans text-sm text-canvas transition-opacity hover:opacity-90 disabled:opacity-30"
                        >
                          Continue &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Vision */}
                  {step === 3 && (
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="font-display text-2xl italic text-ink">
                          Tell us your vision.
                        </p>
                        <p className="mt-2 font-sans text-sm text-ink/50">
                          What do you want to remember? What feeling should your film evoke?
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="story"
                          className="eyebrow text-[0.6rem] text-ink/50"
                        >
                          Your Story &amp; Vision
                        </label>
                        <textarea
                          id="story"
                          value={data.story}
                          onChange={(e) => set('story', e.target.value)}
                          rows={6}
                          placeholder="Tell us about your visual inspiration, cultural traditions you want honoured, and what you dream your wedding photos and film will feel like..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <div className="mt-2 flex gap-3">
                        <button
                          type="button"
                          onClick={back}
                          className="w-full border border-ink/15 px-6 py-4 font-sans text-sm text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
                        >
                          &larr; Back
                        </button>
                        <button
                          type="submit"
                          className="w-full bg-ink px-6 py-4 font-sans text-sm text-canvas transition-opacity hover:opacity-90"
                        >
                          Send Inquiry
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
