'use client'

import { useState } from 'react'

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('[v0] Intake form submitted')
    setSubmitted(true)
  }

  return (
    <section id="inquire" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col">
            <h2 className="font-display text-4xl italic text-ink lg:text-5xl">
              Secure Your Timeline.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/70">
              Dates across the Lower Mainland wedding seasons book up to a year
              in advance. Let&apos;s start mapping your legacy collection today.
            </p>
            <a
              href="tel:+16043657401"
              className="group relative mt-8 inline-block w-fit font-display text-2xl italic text-ink"
            >
              Prefer to talk? +1 604-365-7401
              <span className="absolute -bottom-1 left-0 h-px w-full bg-champagne transition-all duration-300 group-hover:w-0" />
            </a>
          </div>

          {/* Right column - form */}
          <div>
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-start justify-center border border-champagne px-8 py-10">
                <p className="font-display text-3xl italic text-ink">
                  Thank you.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
                  Your inquiry has been received. We&apos;ll be in touch shortly
                  to schedule your private consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="event-type"
                    className="eyebrow text-xs text-ink/60"
                  >
                    Event Classification
                  </label>
                  <select
                    id="event-type"
                    name="event-type"
                    defaultValue=""
                    className="border border-ink/20 bg-canvas px-4 py-3 font-sans text-base text-ink focus:border-ink focus:outline-none"
                  >
                    <option value="" disabled>
                      Select your celebration
                    </option>
                    <option>Multi-Day South Asian Wedding</option>
                    <option>Intimate Ceremony &amp; Reception</option>
                    <option>Engagement Portraiture Session</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="date-venues"
                    className="eyebrow text-xs text-ink/60"
                  >
                    Wedding Date &amp; Venues
                  </label>
                  <input
                    id="date-venues"
                    name="date-venues"
                    type="text"
                    placeholder="e.g. June 2026 · Langley, Surrey, Vancouver"
                    className="border border-ink/20 bg-canvas px-4 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="story" className="eyebrow text-xs text-ink/60">
                    Your Story
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    rows={5}
                    placeholder="Tell us about your visual inspiration & celebration story."
                    className="resize-none border border-ink/20 bg-canvas px-4 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ink px-6 py-4 font-sans text-sm text-canvas transition-opacity hover:opacity-90"
                >
                  Request Availability Blueprint
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
