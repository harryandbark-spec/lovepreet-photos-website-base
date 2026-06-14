import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Extract numeric value from string
    const numericMatch = value.match(/(\d+)/)
    if (!numericMatch) {
      setDisplayValue(0)
      return
    }

    const targetNumber = parseInt(numericMatch[0], 10)
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (targetNumber - startValue) * easeOutQuart)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible, value, duration])

  // Format the display value to match original format
  const formatDisplay = () => {
    if (value.includes('+')) {
      return `${displayValue}+`
    }
    if (value.includes('%')) {
      return `${displayValue}%`
    }
    if (value.includes('-')) {
      // Handle ranges like "8-12"
      const rangeMatch = value.match(/(\d+)-(\d+)/)
      if (rangeMatch) {
        const start = parseInt(rangeMatch[1], 10)
        const end = parseInt(rangeMatch[2], 10)
        const progress = displayValue / start
        const currentEnd = Math.floor(start + (end - start) * progress)
        return `${displayValue}-${currentEnd}`
      }
    }
    if (value.includes('Day') || value.includes('Wk')) {
      return `${displayValue}${value.replace(/\d+/, '')}`
    }
    if (value.includes('Crew')) {
      return `${displayValue} Crew`
    }
    return displayValue.toString()
  }

  return (
    <span ref={ref} className="font-display text-3xl italic text-canvas">
      {formatDisplay()}
    </span>
  )
}
