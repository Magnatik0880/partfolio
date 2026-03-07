'use client'

import { type FC, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database, Bot, Shield, Globe,
  HeartPulse, Smartphone, ExternalLink, X,
  type LucideProps,
} from 'lucide-react'
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
  url?: string
  role?: Record<Locale, string>
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
  {
    colSpan: 'md:col-span-1',
    textColor: 'text-neon-cyan',
    borderHover: 'hover:border-neon-cyan/30',
    tagClass: 'border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan',
    glowHover: 'hover:shadow-[0_0_50px_rgba(0,255,255,0.15)]',
    gradientVar: '#00ffff',
    accentLine: 'via-neon-cyan/50',
    iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    num: '05',
    Icon: HeartPulse,
    category: { ru: 'СТОМАТОЛОГИЯ · МЕД', en: 'DENTAL · MEDICAL', kg: 'СТОМАТОЛОГИЯ · МЕД' },
    status: 'LIVE',
    url: 'https://примадентале.рф',
    role: {
      ru: 'Ведущий системный инженер',
      en: 'Principal Systems Engineer',
      kg: 'Башкы системалык инженер',
    },
  },
  {
    colSpan: 'md:col-span-2',
    textColor: 'text-neon-green',
    borderHover: 'hover:border-neon-green/30',
    tagClass: 'border-neon-green/20 bg-neon-green/5 text-neon-green',
    glowHover: 'hover:shadow-[0_0_50px_rgba(57,255,20,0.15)]',
    gradientVar: '#39ff14',
    accentLine: 'via-neon-green/50',
    iconBg: 'bg-neon-green/10 border-neon-green/20',
    num: '06',
    Icon: Smartphone,
    category: { ru: 'МОБИЛЬНЫЕ · ИТ-УСЛУГИ', en: 'MOBILE · IT SERVICES', kg: 'МОБИЛДИК · ИТ' },
    status: 'LIVE',
    url: 'https://mobo.kg',
    role: {
      ru: 'Основатель / Главный инженер',
      en: 'Founder / Principal Engineer',
      kg: 'Негиздөөчү / Башкы инженер',
    },
  },
]

export function ProjectsSection() {
  const { t, locale } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedIndex])

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null
  const selectedCfg = selectedIndex !== null ? bentoConfig[selectedIndex] : null

  return (
    <>
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
                onClick={() => setSelectedIndex(i)}
                className={`relative h-full rounded-2xl bg-surface overflow-hidden
                            transition-all duration-300 cursor-pointer
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
                  <h3 className={`text-xl font-bold mb-1 ${cfg.textColor}`}>
                    {t(`projects.${project.id}.title`)}
                  </h3>

                  {/* Role badge — shown only for commercial projects */}
                  {cfg.role && (
                    <p className="text-[10px] font-mono text-zinc-500 mb-3 tracking-wider">
                      ↳ {cfg.role[locale]}
                    </p>
                  )}

                  {/* No role = original mb-3 spacing already on title; add gap here */}
                  {!cfg.role && <div className="mb-2" />}

                  {/* Description — flex-1 pushes tech tags to bottom */}
                  <p className="text-sm text-zinc-400 mb-5 leading-relaxed flex-1">
                    {t(`projects.${project.id}.desc`)}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
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

                  {/* Visit website — shown only for live commercial projects */}
                  {cfg.url && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <motion.a
                        href={cfg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.04, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold
                                    px-3 py-1.5 rounded-lg border transition-colors duration-200
                                    opacity-70 hover:opacity-100 ${cfg.tagClass}`}
                      >
                        <ExternalLink size={10} strokeWidth={2.5} />
                        {locale === 'ru' ? 'Открыть сайт' : locale === 'en' ? 'Visit website' : 'Сайтты ачуу'}
                      </motion.a>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest shrink-0">
                        {locale === 'ru' ? '✦ Коммерческий' : locale === 'en' ? '✦ Commercial' : '✦ Коммерциялык'}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </ScrollReveal>
        )
      })}
    </div>

    {/* ── Project Modal ── */}
    <AnimatePresence>
      {selectedProject && selectedCfg && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            key="modal-card"
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl p-5 md:p-7 glass-card max-h-[88vh] overflow-y-auto"
            style={{ border: `1px solid ${selectedCfg.gradientVar}44` }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center
                         text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Close"
            >
              <X size={14} strokeWidth={2} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${selectedCfg.iconBg}`}>
                <selectedCfg.Icon size={18} className={selectedCfg.textColor} strokeWidth={1.5} />
              </div>
              <div>
                <span className={`text-[9px] font-mono tracking-[0.2em] uppercase opacity-70 ${selectedCfg.textColor}`}>
                  {selectedCfg.category[locale]}
                </span>
                <h3 className={`text-xl font-bold ${selectedCfg.textColor}`}>
                  {t(`projects.${selectedProject.id}.title`)}
                </h3>
              </div>
              <span className={`ml-auto text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border ${selectedCfg.tagClass} opacity-80`}>
                {selectedCfg.status}
              </span>
            </div>

            {/* Role */}
            {selectedCfg.role && (
              <p className="text-[11px] font-mono text-zinc-500 mb-4 tracking-wider">
                ↳ {selectedCfg.role[locale]}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {t(`projects.${selectedProject.id}.desc`)}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedProject.tech.map((tech) => (
                <span key={tech} className={`rounded-full border px-2.5 py-0.5 text-[11px] font-mono ${selectedCfg.tagClass}`}>
                  {tech}
                </span>
              ))}
            </div>

            {/* External link */}
            {selectedCfg.url && (
              <a
                href={selectedCfg.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-[12px] font-mono font-semibold
                            px-4 py-2 rounded-xl border transition-colors duration-200
                            opacity-80 hover:opacity-100 ${selectedCfg.tagClass}`}
              >
                <ExternalLink size={12} strokeWidth={2} />
                {locale === 'ru' ? 'Открыть сайт' : locale === 'en' ? 'Visit website' : 'Сайтты ачуу'}
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
