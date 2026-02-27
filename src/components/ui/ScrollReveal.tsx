'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const initialOffset = {
    up:    { y: 40, x: 0 },
    left:  { y: 0,  x: -40 },
    right: { y: 0,  x: 40 },
    none:  { y: 0,  x: 0 },
  }[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
