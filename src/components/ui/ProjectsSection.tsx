'use client'

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Database, Bot, Shield, Globe, type LucideProps } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { projects } from '@/data/profile'
import { ScrollReveal } from './ScrollReveal'
import type { Locale } from '@/types'

interface BentoEntry {
  colSpan: string
  textColor: string
  borderHover: string
  tagClass: string
  glowHover: string
  gradientVar: string
  accentLine: string
  iconBg: string
  num: string
  Icon: FC<LucideProps>
  category: Record<Locale, string>
  status: string
}

const bentoConfig: BentoEntry[] = [
  {
    colSpan: 'md:col-span-2',
    textColor: 'text-neon-cyan',
    borderHover: 'hover:border-neon-cyan/30',
    tagClass: 'border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan',
    glowHover: 'hover:shadow-[0_0_50px_rgba(0,255,255,0.15)]',
    gradientVar: '#00ffff',
    accentLine: 'via-neon-cyan/50',
    iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    num: '01',
    Icon: Database,
    category: { ru: 'ВЕБ · ПЛАТФОРМА', en: 'WEB · PLATFORM', kg: 'ВЕБ · ПЛАТФОРМА' },
    status: 'LIVE',
  },
  {
    colSpan: 'md:col-span-1',
    textColor: 'text-neon-green',
    borderHover: 'hover:border-neon-green/30',
    tagClass: 'border-neon-green/20 bg-neon-green/5 text-neon-green',
    glowHover: 'hover:shadow-[0_0_50px_rgba(57,255,20,0.15)]',
    gradientVar: '#39ff14',
    accentLine: 'via-neon-green/50',
    iconBg: 'bg-neon-green/10 border-neon-green/20',
    num: '02',
    Icon: Bot,
    category: { ru: 'ИИ · ЧАТ-БОТ', en: 'AI · CHAT-BOT', kg: 'ЖИ · ЧАТ-БОТ' },
    status: 'ACTIVE',
  },
  {
    colSpan: 'md:col-span-1',
    textColor: 'text-neon-purple',
    borderHover: 'hover:border-neon-purple/30',
    tagClass: 'border-neon-purple/20 bg-neon-purple/5 text-neon-purple',
    glowHover: 'hover:shadow-[0_0_50px_rgba(191,0,255,0.15)]',
    gradientVar: '#bf00ff',
    accentLine: 'via-neon-purple/50',
    iconBg: 'bg-neon-purple/10 border-neon-purple/20',
    num: '03',
    Icon: Shield,
    category: { ru: 'ИНФРА · VPN', en: 'INFRA · VPN', kg: 'ИНФРА · VPN' },
    status: 'PRODUCTION',
  },
  {
    colSpan: 'md:col-span-2',
    textColor: 'text-neon-pink',
    borderHover: 'hover:border-neon-pink/30',
    tagClass: 'border-neon-pink/20 bg-neon-pink/5 text-neon-pink',
    glowHover: 'hover:shadow-[0_0_50px_rgba(255,0,128,0.15)]',
    gradientVar: '#ff0080',
    accentLine: 'via-neon-pink/50',
    iconBg: 'bg-neon-pink/10 border-neon-pink/20',
    num: '04',
    Icon: Globe,
    category: { ru: 'ВЕБ · РАЗРАБОТКА', en: 'WEB · DEVELOPMENT', kg: 'ВЕБ · ИШТЕП ЧЫГУУ' },
    status: 'AVAILABLE',
  },
]

export function ProjectsSection() {
  const { t, locale } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project, i) => {
        const cfg = bentoConfig[i]
        return (
          <ScrollReveal key={project.id} delay={i * 0.08} className={`${cfg.colSpan} group`}>

            {/* Outer shell — hosts the rotating conic-gradient ::before border */}
            <div
              className="project-card-border h-full rounded-2xl overflow-hidden p-[1px]"
              style={{ '--card-neon': cfg.gradientVar } as React.CSSProperties}
            >

              {/* Inner card */}
              <div
                className={`relative h-full rounded-2xl bg-surface overflow-hidden
                            transition-all duration-300 cursor-default
                            group-hover:bg-surface-hover group-hover:-translate-y-1
                            ${cfg.borderHover} ${cfg.glowHover}`}
              >

                {/* Top accent gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px
                               bg-gradient-to-r from-transparent ${cfg.accentLine} to-transparent`}
                />

                {/* Watermark number — faint behind content */}
                <div
                  className={`absolute top-0 right-3 text-[7rem] font-black leading-none
                               select-none pointer-events-none ${cfg.textColor}`}
                  style={{ opacity: 0.04 }}
                >
                  {cfg.num}
                </div>

                {/* Card content */}
                <div className="relative z-10 p-6 h-full flex flex-col">

                  {/* Header: icon box · category label · status badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center
                                  flex-shrink-0 ${cfg.iconBg}`}
                    >
                      <cfg.Icon size={16} className={cfg.textColor} strokeWidth={1.5} />
                    </motion.div>
                    <span
                      className={`flex-1 text-[9px] font-mono tracking-[0.2em] uppercase
                                  opacity-70 ${cfg.textColor}`}
                    >
                      {cfg.category[locale]}
                    </span>
                    <span
                      className={`text-[9px] font-mono tracking-wider px-2 py-0.5
                                  rounded border ${cfg.tagClass} opacity-80`}
                    >
                      {cfg.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${cfg.textColor}`}>
                    {t(`projects.${project.id}.title`)}
                  </h3>

                  {/* Description — flex-1 pushes tech tags to bottom */}
                  <p className="text-sm text-zinc-400 mb-5 leading-relaxed flex-1">
                    {t(`projects.${project.id}.desc`)}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, j) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.04, duration: 0.2, ease: 'easeOut' }}
                        whileHover={{ scale: 1.08, y: -1 }}
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-mono cursor-default ${cfg.tagClass}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </ScrollReveal>
        )
      })}
    </div>
  )
}
