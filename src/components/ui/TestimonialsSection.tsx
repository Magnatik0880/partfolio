'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

const ACCENT_COLORS = [
  { text: 'text-neon-cyan',   glass: 'glass-card-cyan',   quote: 'rgba(0,255,255,0.6)'   },
  { text: 'text-neon-green',  glass: 'glass-card-green',  quote: 'rgba(57,255,20,0.6)'   },
  { text: 'text-neon-purple', glass: 'glass-card-purple', quote: 'rgba(191,0,255,0.6)'   },
  { text: 'text-neon-pink',   glass: 'glass-card-pink',   quote: 'rgba(255,0,128,0.6)'   },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {testimonials.map((t, i) => {
        const c = ACCENT_COLORS[i % ACCENT_COLORS.length]

        return (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className={`glass-card ${c.glass} rounded-2xl p-4 md:p-6 flex flex-col gap-3 md:gap-4 cursor-default`}
          >
            {/* Opening quote */}
            <div
              className="text-4xl font-black leading-none select-none"
              style={{ color: c.quote, textShadow: `0 0 12px ${c.quote}` }}
            >
              "
            </div>

            {/* Testimonial text */}
            <p className="text-sm text-zinc-300 leading-relaxed flex-1 -mt-3">
              {t.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              {/* Avatar (initials) */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${c.text}`}
                style={{ background: `${c.quote.replace('0.6', '0.1')}`, border: `1px solid ${c.quote.replace('0.6', '0.3')}` }}
              >
                {getInitials(t.name)}
              </div>
              <div>
                <p className={`text-sm font-semibold ${c.text}`}>{t.name}</p>
                <p className="text-[11px] text-zinc-500 font-mono">{t.role}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
