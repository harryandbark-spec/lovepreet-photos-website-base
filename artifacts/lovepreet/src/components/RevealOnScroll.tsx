import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  once?: boolean
  margin?: string
  as?: keyof HTMLElementTagNameMap
}

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  y = 20,
  duration = 0.8,
  once = true,
  margin = '-80px',
  as = 'div',
}: RevealOnScrollProps) {
  const Component = motion[as] as typeof motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </Component>
  )
}
