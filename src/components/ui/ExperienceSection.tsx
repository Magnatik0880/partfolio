'use client'

import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { experiences } from '@/data/experience'

const COLOR_MAP = {
  cyan:   { dot: 'bg-neon-cyan',   glow: 'shadow-[0_0_12px_rgba(0,255,255,0.6)]',   text: 'text-neon-cyan',   glass: 'glass-card-cyan'   },
  green:  { dot: 'bg-neon-green',  glow: 'shadow-[0_0_12px_rgba(57,255,20,0.6)]',   text: 'text-neon-green',  glass: 'glass-card-green'  },
  purple: { dot: 'bg-neon-purple', glow: 'shadow-[0_0_12px_rgba(191,0,255,0.6)]',   text: 'text-neon-purple', glass: 'glass-card-purple' },
  pink:   { dot: 'bg-neon-pink',   glow: 'shadow-[0_0_12px_rgba(255,0,128,0.6)]',   text: 'text-neon-pink',   glass: 'glass-card-pink'   },
}

export function ExperienceSection() {
  const isMobile = useIsMobile()

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/30 via-neon-purple/20 to-transparent md:-translate-x-1/2" />

      <div className="flex flex-col gap-8 md:gap-10">
        {experiences.map((exp, i) => {
          const c = COLOR_MAP[exp.color]
          const isLeft = i % 2 === 0

          return (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: isMobile ? 24 : 0, x: isMobile ? 0 : (isLeft ? -40 : 40) }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card — takes up ~45% on desktop */}
              <div className={`ml-10 md:ml-0 flex-1 md:max-w-[44%] ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                <div className={`glass-card ${c.glass} rounded-2xl p-4 md:p-5 hover:-translate-y-1 transition-transform duration-300`}>
                  {/* Year badge */}
                  <span className={`inline-block text-[10px] font-mono px-2.5 py-1 rounded-full border mb-3 ${c.text} border-current opacity-70`}>
                    {exp.year}
                  </span>

                  {/* Role */}
                  <h3 className={`text-base font-bold mb-1 ${c.text}`}>{exp.role}</h3>

                  {/* Company */}
                  <p className="text-xs font-mono text-zinc-500 mb-3 tracking-wider">
                    ↳ {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>

              {/* Center dot — positioned over the timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300, damping: 15 }}
                  className={`w-3.5 h-3.5 rounded-full ${c.dot} ${c.glow} ring-2 ring-black`}
                />
              </div>

              {/* Spacer for the other half on desktop */}
              <div className="hidden md:block flex-1 md:max-w-[44%]" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
