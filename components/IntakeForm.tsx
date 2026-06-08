'use client'

import { useState } from 'react'

export function IntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', details: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-background"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Start the Conversation
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your vision and let&apos;s create something unforgettable.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border-2 border-muted bg-background text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-muted bg-background text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          {/* Phone field (optional) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Phone <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (604) 000-0000"
              className="w-full px-4 py-3 border-2 border-muted bg-background text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent transition-colors duration-200"
            />
          </div>

          {/* Details field */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Project Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              placeholder="Tell us about your event, timeline, and vision..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-muted bg-background text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {submitted ? 'Message Sent!' : 'Send'}
            </button>

            {/* Helper text */}
            <p className="text-sm text-center text-muted-foreground mt-4">
              {submitted
                ? "Thanks for reaching out! We'll be in touch shortly."
                : "We'll get back to you shortly."}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
