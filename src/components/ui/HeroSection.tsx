'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { ParticleCanvas } from './ParticleCanvas'
import type { Locale } from '@/types'

const TYPED_STRINGS: Record<Locale, string[]> = {
  ru: [
    'Python · Laravel · Docker',
    'WireGuard · VPN · Linux',
    'ИИ-боты · LLM · OpenAI',
    'Hardware · Паяльник · Android',
  ],
  en: [
    'Python · Laravel · Docker',
    'WireGuard · VPN · Linux',
    'AI Bots · LLM · OpenAI',
    'Hardware · Soldering · Android',
  ],
  kg: [
    'Python · Laravel · Docker',
    'WireGuard · VPN · Linux',
    'ЖИ-боттор · LLM · OpenAI',
    'Hardware · Паяндоо · Android',
  ],
}

export function HeroSection() {
  const { t, locale } = useLanguage()
  const shouldReduceMotion = useReducedMotion()
  const [typedIndex, setTypedIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(TYPED_STRINGS[locale][0])
      return
    }

    const strings = TYPED_STRINGS[locale]
    const current = strings[typedIndex % strings.length]

    const tick = () => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          const next = current.slice(0, prev.length + 1)
          if (next === current) {
            timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
            return next
          }
          timeoutRef.current = setTimeout(tick, 65)
          return next
        } else {
          const next = current.slice(0, prev.length - 1)
          if (next === '') {
            setIsDeleting(false)
            setTypedIndex((i) => i + 1)
            return next
          }
          timeoutRef.current = setTimeout(tick, 35)
          return next
        }
      })
    }

    timeoutRef.current = setTimeout(tick, 150)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [typedIndex, isDeleting, locale, shouldReduceMotion])

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDisplayText('')
    setIsDeleting(false)
    setTypedIndex(0)
  }, [locale])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Layer 1: Particle background */}
      <ParticleCanvas />

      {/* Layer 2: Animated aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            width: '55vw', height: '55vw',
            top: '-15%', left: '-10%',
            background: 'radial-gradient(circle, rgba(0,255,255,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute rounded-full"
          style={{
            width: '50vw', height: '50vw',
            bottom: '-10%', right: '-5%',
            background: 'radial-gradient(circle, rgba(191,0,255,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 0.95, 1], opacity: [0.5, 1, 0.6, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute rounded-full"
          style={{
            width: '35vw', height: '35vw',
            top: '30%', left: '35%',
            background: 'radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Layer 3: Scrolling grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] grid-animated"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Layer 4: Easter Egg — "The 8" cipher */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* Giant pulsing 8 watermark */}
        <div className="absolute right-[-8%] top-1/2" style={{ transform: 'translateY(-50%)' }}>
          <motion.span
            animate={{ scale: [1, 1.05, 1], opacity: [0.022, 0.048, 0.022] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="font-black text-neon-cyan block"
            style={{ fontSize: 'clamp(260px, 42vw, 660px)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            8
          </motion.span>
        </div>

        {/* Floating birth-date digits — scattered, staggered reveal */}
        {[
          { char: '0', x: '12%',  y: '18%', delay: 2.0, color: 'rgba(0,255,255,0.12)' },
          { char: '8', x: '7%',   y: '28%', delay: 2.3, color: 'rgba(0,255,255,0.22)', big: true },
          { char: '0', x: '18%',  y: '75%', delay: 2.6, color: 'rgba(0,255,255,0.10)' },
          { char: '1', x: '10%',  y: '85%', delay: 2.9, color: 'rgba(0,255,255,0.14)' },
          { char: '1', x: '88%',  y: '15%', delay: 3.2, color: 'rgba(57,255,20,0.10)'  },
          { char: '9', x: '91%',  y: '25%', delay: 3.5, color: 'rgba(57,255,20,0.08)'  },
          { char: '9', x: '86%',  y: '78%', delay: 3.8, color: 'rgba(57,255,20,0.08)'  },
          { char: '2', x: '92%',  y: '88%', delay: 4.1, color: 'rgba(57,255,20,0.10)'  },
        ].map(({ char, x, y, delay, color, big }) => (
          <motion.span
            key={`${char}-${x}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, 0, 6, 0] }}
            transition={{ delay, duration: 1, ease: 'easeOut', y: { delay: delay + 1, duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            className="absolute font-black font-mono"
            style={{
              left: x, top: y,
              fontSize: big ? '2.2rem' : '1.1rem',
              color,
              filter: big ? `drop-shadow(0 0 8px ${color})` : 'none',
            }}
          >
            {char}
          </motion.span>
        ))}

        {/* Hex cipher hint — bottom left, appears last */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 1.5 }}
          className="absolute bottom-24 left-6 font-mono tracking-[0.18em]"
          style={{ fontSize: '9px' }}
        >
          <span style={{ color: 'rgba(0,255,255,0.18)' }}>// </span>
          <span style={{ color: 'rgba(0,255,255,0.30)' }}>0x08</span>
          <span style={{ color: 'rgba(0,255,255,0.12)' }}> · </span>
          <span style={{ color: 'rgba(0,255,255,0.30)' }}>0x01</span>
          <span style={{ color: 'rgba(0,255,255,0.12)' }}> · </span>
          <span style={{ color: 'rgba(0,255,255,0.30)' }}>0x7C8</span>
        </motion.div>

      </div>

      {/* Main content — 2-column on desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-28 lg:py-0 min-h-screen lg:min-h-0">

        {/* LEFT: Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-green/25 bg-neon-green/5 text-neon-green text-xs tracking-widest uppercase font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            {t('contact.available')}
          </motion.div>

          {/* SANCHO — big neon name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-none tracking-tight mb-3"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            <span className="neon-text">SANCHO</span>
          </motion.h1>

          {/* Full name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-zinc-400 text-base sm:text-lg mb-2 font-light tracking-[0.3em] uppercase"
          >
            {t('header.name')}
          </motion.p>

          {/* Job title + subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4"
          >
            <p className="text-lg sm:text-xl font-semibold text-foreground">
              {t('header.title')}
            </p>
            <p className="text-sm sm:text-base font-mono text-neon-cyan/70 tracking-wider">
              {t('header.subtitle')}
            </p>
          </motion.div>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5 max-w-lg"
          >
            {t('hero.description')}
          </motion.p>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="h-7 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span className="font-mono text-neon-green text-sm sm:text-base">
              {displayText}
              <span className="animate-pulse text-neon-cyan ml-0.5">|</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://t.me/sancho_mobo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-neon-cyan text-neon-cyan text-sm font-semibold
                         hover:bg-neon-cyan hover:text-black transition-all duration-300 glow-cyan-hover
                         font-mono tracking-wider"
            >
              Telegram ↗
            </a>
            <a
              href="https://wa.me/996550590501"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-neon-green text-neon-green text-sm font-semibold
                         hover:bg-neon-green hover:text-black transition-all duration-300
                         font-mono tracking-wider"
            >
              WhatsApp ↗
            </a>
            <a
              href="https://github.com/sancho-mobo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-zinc-600 text-zinc-300 text-sm font-semibold
                         hover:border-white/40 hover:text-white transition-all duration-300
                         font-mono tracking-wider"
            >
              GitHub ↗
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('#projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3 rounded-full border border-zinc-700 text-zinc-400 text-sm font-semibold
                         hover:border-neon-cyan/40 hover:text-neon-cyan transition-all duration-300
                         font-mono tracking-wider"
            >
              {t('section.projects')} ↓
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Professional photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                width: 'calc(100% + 24px)',
                height: 'calc(100% + 24px)',
                top: '-12px',
                left: '-12px',
                border: '1px dashed rgba(0,255,255,0.25)',
              }}
            />

            {/* Outer glow ambient */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: '0 0 50px rgba(0,255,255,0.12), 0 0 100px rgba(0,255,255,0.06)',
              }}
            />

            {/* Inner glow border ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none z-10"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,255,255,0.08)',
                border: '2px solid rgba(0,255,255,0.3)',
                borderRadius: '50%',
              }}
            />

            {/* Corner accent dots */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-2 h-2 rounded-full bg-neon-cyan z-20"
                style={{
                  boxShadow: '0 0 6px #00ffff, 0 0 12px #00ffff',
                  top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 51}% - 4px)`,
                  left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 51}% - 4px)`,
                }}
              />
            ))}

            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-full"
              style={{ width: '280px', height: '280px' }}
            >
              <Image
                src="/avatar.jpg"
                alt="Санжар Термечиков"
                fill
                priority
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* Mouse outline */}
        <div className="w-[22px] h-[34px] rounded-full border border-neon-cyan/40 flex justify-center pt-[6px]">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[3px] h-[6px] rounded-full bg-neon-cyan"
          />
        </div>
        {/* Chevrons */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-[2px]"
        >
          <div className="w-[6px] h-[6px] border-r border-b border-neon-cyan/60 rotate-45" />
          <div className="w-[6px] h-[6px] border-r border-b border-neon-cyan/30 rotate-45 -mt-[3px]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
