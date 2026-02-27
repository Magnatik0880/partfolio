'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const COLORS = ['#00ffff', '#00ffff', '#00ffff', '#39ff14', '#bf00ff']

export function ParticleCanvas({ count = 70 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const MAX_DIST = 120

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        // Parse hex color to rgba
        const r = parseInt(p.color.slice(1, 3), 16)
        const g = parseInt(p.color.slice(3, 5), 16)
        const b = parseInt(p.color.slice(5, 7), 16)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.4})`)
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = grad
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
