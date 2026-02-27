'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import type { Locale } from '@/types'

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
  { value: 'kg', label: 'KG' },
]

// Each slot is 28px wide, 1px gap between → sliding indicator
const SLOT_W = 28

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()
  const activeIdx = LOCALES.findIndex((l) => l.value === locale)

  return (
    <div className="relative flex h-8 items-center rounded-full border border-border bg-surface px-1 gap-0">
      {/* Sliding highlight */}
      <motion.div
        className="absolute h-6 rounded-full bg-neon-cyan/15 border border-neon-cyan/30"
        style={{ width: SLOT_W }}
        animate={{ x: activeIdx * SLOT_W }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />

      {LOCALES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setLocale(value)}
          style={{ width: SLOT_W }}
          className={`relative z-10 h-6 text-xs font-bold transition-colors duration-200 ${
            locale === value ? 'text-neon-cyan' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
