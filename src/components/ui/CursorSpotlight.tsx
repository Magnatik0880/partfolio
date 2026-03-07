'use client'

import { useEffect } from 'react'

export function CursorSpotlight() {
  useEffect(() => {
    // Only enable on devices that support hover (non-touch)
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div className="cursor-spotlight" aria-hidden="true" />
}
