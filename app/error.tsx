'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-canvas px-6 py-24 text-center text-ink">
      <div className="max-w-md">
        <p className="eyebrow mb-4 text-champagne">Error</p>
        <h2 className="mb-6 font-display text-4xl font-medium md:text-5xl">Something went wrong</h2>
        <p className="mb-10 font-sans font-light leading-relaxed text-ink/70 text-balance">
          We encountered an unexpected issue while trying to load this experience. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex rounded-full border border-champagne/30 bg-transparent px-8 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:border-champagne hover:bg-champagne/5"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
