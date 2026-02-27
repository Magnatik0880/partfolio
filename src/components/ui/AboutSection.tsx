'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { ScrollReveal } from './ScrollReveal'
import { ShieldCheck, SlidersHorizontal, Cpu, Rocket } from 'lucide-react'

const PILLARS = [
  { key: 'reliability', Icon: ShieldCheck,       color: 'text-neon-cyan',   border: 'border-neon-cyan/20',   bg: 'bg-neon-cyan/10',   glow: 'hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]'   },
  { key: 'control',     Icon: SlidersHorizontal, color: 'text-neon-green',  border: 'border-neon-green/20',  bg: 'bg-neon-green/10',  glow: 'hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]'  },
  { key: 'automation',  Icon: Cpu,               color: 'text-neon-purple', border: 'border-neon-purple/20', bg: 'bg-neon-purple/10', glow: 'hover:shadow-[0_0_20px_rgba(191,0,255,0.1)]' },
  { key: 'production',  Icon: Rocket,            color: 'text-neon-pink',   border: 'border-neon-pink/20',   bg: 'bg-neon-pink/10',   glow: 'hover:shadow-[0_0_20px_rgba(255,0,128,0.1)]'  },
]

// System layer stack — bottom → top
const STACK_LAYERS = [
  { label: 'Hardware',  color: 'text-neon-pink/65',   dot: 'bg-neon-pink',   num: '00' },
  { label: 'Networks',  color: 'text-neon-purple/65', dot: 'bg-neon-purple', num: '01' },
  { label: 'Servers',   color: 'text-neon-cyan/65',   dot: 'bg-neon-cyan',   num: '02' },
  { label: 'Security',  color: 'text-neon-green/65',  dot: 'bg-neon-green',  num: '03' },
  { label: 'AI',        color: 'text-neon-cyan/65',   dot: 'bg-neon-cyan',   num: '04' },
  { label: 'Software',  color: 'text-neon-green/65',  dot: 'bg-neon-green',  num: '05' },
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 px-6 border-y border-border/50 bg-surface/30 overflow-hidden">

      {/* Decorative radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neon-cyan/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: description + system stack ── */}
          <ScrollReveal direction="left">
            <div>

              {/* Tag */}
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-neon-cyan text-xs font-mono tracking-widest uppercase">
                  {t('about.tag')}
                </span>
              </div>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {t('about.body')}
              </p>

              {/* System layer stack — vertical with connecting line */}
              <div className="relative mt-8 pl-7">
                {/* Vertical line */}
                <div className="absolute left-[9px] top-1 bottom-1 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/30 to-transparent" />

                <div className="flex flex-col gap-2.5">
                  {STACK_LAYERS.map((layer, i) => (
                    <motion.div
                      key={layer.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.35 }}
                      className="flex items-center gap-3"
                    >
                      {/* Dot on the timeline */}
                      <span
                        className={`absolute left-[5px] w-[9px] h-[9px] rounded-full border-2 border-background ${layer.dot}`}
                      />
                      <span className={`text-[10px] font-mono tabular-nums opacity-40 ${layer.color}`}>
                        {layer.num}
                      </span>
                      <span className={`text-sm font-mono font-medium ${layer.color}`}>
                        {layer.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* ── Right: "How I Think" callout + pillars ── */}
          <ScrollReveal direction="right">
            <div className="space-y-5">

              {/* Terminal-style callout */}
              <div className="relative rounded-xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden">
                {/* Left neon accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-neon-cyan via-neon-cyan/50 to-transparent" />

                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 pt-3.5 pb-2 border-b border-border/50">
                  <span className="text-[9px] font-mono text-neon-cyan/60 uppercase tracking-[0.25em]">
                    &gt; HOW I THINK
                  </span>
                  <div className="ml-auto flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neon-pink/30" />
                    <span className="w-2 h-2 rounded-full bg-neon-green/30" />
                    <span className="w-2 h-2 rounded-full bg-neon-cyan/30" />
                  </div>
                </div>

                {/* Quote body */}
                <div className="px-5 py-4">
                  <p className="text-zinc-100 text-base sm:text-lg italic leading-relaxed">
                    &ldquo;{t('about.thinking')}&rdquo;
                  </p>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-2 gap-3">
                {PILLARS.map(({ key, Icon, color, border, bg, glow }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3, ease: 'easeOut' }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`flex items-center gap-3 rounded-xl border ${border} ${bg} px-4 py-3
                                transition-colors duration-300 ${glow} cursor-default`}
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`w-7 h-7 rounded-md border ${border} flex items-center justify-center flex-shrink-0 bg-black/20`}
                    >
                      <Icon size={14} className={color} strokeWidth={1.5} />
                    </motion.div>
                    <span className={`text-sm font-semibold ${color}`}>
                      {t(`about.pillar.${key}`)}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
