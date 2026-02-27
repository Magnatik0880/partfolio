'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { skillGroups } from '@/data/profile'
import { ScrollReveal } from './ScrollReveal'
import type { SkillLevel } from '@/types'
import type { Locale } from '@/types'
import {
  Code2, Server, Brain, Cloud, Network, Cpu,
  Wrench, Bot, ShieldCheck, Globe,
  Zap, Smartphone, ScanSearch, Container,
  type LucideProps,
} from 'lucide-react'
import type { FC } from 'react'

/* ── Icon map ── */
const ICON_MAP: Record<string, FC<LucideProps>> = {
  Code2, Server, Brain, Cloud, Network, Cpu,
}

/* ── Level config ── */
const LEVEL_CFG: Record<SkillLevel, { dot: string; labelKey: string; ring: string }> = {
  primary:    { dot: 'bg-neon-cyan',  labelKey: 'skill.level.primary',    ring: 'border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan' },
  advanced:   { dot: 'bg-neon-green', labelKey: 'skill.level.advanced',   ring: 'border-neon-green/20 bg-neon-green/5 text-neon-green' },
  conceptual: { dot: 'bg-zinc-500',   labelKey: 'skill.level.conceptual', ring: 'border-zinc-600/40 bg-zinc-800/30 text-zinc-400' },
}

/* ── Card accent styles (6 cards, cycling) ── */
const CARD_STYLES = [
  { title: 'text-neon-cyan',   border: 'hover:border-neon-cyan/30',   icon: 'text-neon-cyan',   iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',   accent: 'via-neon-cyan/40',   glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]'   },
  { title: 'text-neon-green',  border: 'hover:border-neon-green/30',  icon: 'text-neon-green',  iconBg: 'bg-neon-green/10 border-neon-green/20',  accent: 'via-neon-green/40',  glow: 'hover:shadow-[0_0_30px_rgba(57,255,20,0.08)]'  },
  { title: 'text-neon-purple', border: 'hover:border-neon-purple/30', icon: 'text-neon-purple', iconBg: 'bg-neon-purple/10 border-neon-purple/20', accent: 'via-neon-purple/40', glow: 'hover:shadow-[0_0_30px_rgba(191,0,255,0.08)]' },
  { title: 'text-neon-cyan',   border: 'hover:border-neon-cyan/30',   icon: 'text-neon-cyan',   iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',   accent: 'via-neon-cyan/40',   glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]'   },
  { title: 'text-neon-pink',   border: 'hover:border-neon-pink/30',   icon: 'text-neon-pink',   iconBg: 'bg-neon-pink/10 border-neon-pink/20',   accent: 'via-neon-pink/40',   glow: 'hover:shadow-[0_0_30px_rgba(255,0,128,0.08)]'  },
  { title: 'text-neon-green',  border: 'hover:border-neon-green/30',  icon: 'text-neon-green',  iconBg: 'bg-neon-green/10 border-neon-green/20',  accent: 'via-neon-green/40',  glow: 'hover:shadow-[0_0_30px_rgba(57,255,20,0.08)]'  },
]

/* ── Stats ── */
const STATS: { num: string; label: Record<Locale, string> }[] = [
  { num: '16+', label: { ru: 'лет опыта',     en: 'years exp',   kg: 'жыл тажрыйба' } },
  { num: '100+', label: { ru: 'проектов',      en: 'projects',    kg: 'долбоор'       } },
  { num: '8',   label: { ru: 'направлений',   en: 'services',    kg: 'кызмат'        } },
  { num: '100%', label: { ru: 'удалённо',      en: 'remote',      kg: 'алыстан'       } },
]

/* ── Services ── */
const SERVICES: {
  Icon: FC<LucideProps>
  color: string; iconBg: string; accent: string; glow: string; border: string
  title: Record<Locale, string>
  desc:  Record<Locale, string>
  tags:  string[]
}[] = [
  {
    Icon: Globe,
    color: 'text-neon-cyan', iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    accent: 'via-neon-cyan/50', glow: 'hover:shadow-[0_0_35px_rgba(0,255,255,0.12)]',
    border: 'hover:border-neon-cyan/35',
    title: { ru: 'Разработка под ключ', en: 'Full-Stack Development', kg: 'Толук иштеп чыгуу' },
    desc:  { ru: 'CRM, ERP, внутренние платформы, SaaS. Multi-tenant архитектура, RBAC, масштабируемость.', en: 'CRM, ERP, internal platforms, SaaS. Multi-tenant, RBAC, scalable architecture.', kg: 'CRM, ERP, ички платформалар. Multi-tenant, RBAC, масштабдалуу.' },
    tags: ['Laravel', 'Python', 'Docker', 'PostgreSQL'],
  },
  {
    Icon: Bot,
    color: 'text-neon-green', iconBg: 'bg-neon-green/10 border-neon-green/20',
    accent: 'via-neon-green/50', glow: 'hover:shadow-[0_0_35px_rgba(57,255,20,0.12)]',
    border: 'hover:border-neon-green/35',
    title: { ru: 'AI & Автоматизация', en: 'AI & Automation', kg: 'AI & Автоматташтыруу' },
    desc:  { ru: 'Telegram-боты, LLM-агенты, интеграция ChatGPT/Claude, автоматизация бизнес-процессов.', en: 'Telegram bots, LLM agents, ChatGPT/Claude integration, business process automation.', kg: 'Telegram-боттор, LLM агенттер, ChatGPT/Claude интеграциясы.' },
    tags: ['OpenAI', 'Claude', 'Telegram', 'Python'],
  },
  {
    Icon: ShieldCheck,
    color: 'text-neon-purple', iconBg: 'bg-neon-purple/10 border-neon-purple/20',
    accent: 'via-neon-purple/50', glow: 'hover:shadow-[0_0_35px_rgba(191,0,255,0.12)]',
    border: 'hover:border-neon-purple/35',
    title: { ru: 'VPN / Сети / Безопасность', en: 'VPN / Networks / Security', kg: 'VPN / Тармак / Коопсуздук' },
    desc:  { ru: 'WireGuard, AmneziaWG, серверная инфраструктура, защищённые сети под ключ.', en: 'WireGuard, AmneziaWG, server infrastructure, secure private networks end-to-end.', kg: 'WireGuard, AmneziaWG, сервер инфраструктурасы, коопсуз тармактар.' },
    tags: ['WireGuard', 'Linux', 'VPS', 'Nginx'],
  },
  {
    Icon: Wrench,
    color: 'text-neon-pink', iconBg: 'bg-neon-pink/10 border-neon-pink/20',
    accent: 'via-neon-pink/50', glow: 'hover:shadow-[0_0_35px_rgba(255,0,128,0.12)]',
    border: 'hover:border-neon-pink/35',
    title: { ru: 'Ремонт железа', en: 'Hardware Repair', kg: 'Жабдуу оңдоо' },
    desc:  { ru: 'Micro-soldering, BGA, разблокировка загрузчика, прошивки IMEI, Custom ROM.', en: 'Micro-soldering, BGA, bootloader unlock, IMEI flashing, Custom ROM installation.', kg: 'Micro-soldering, BGA, загрузчик бошотуу, IMEI жазуу, Custom ROM.' },
    tags: ['Soldering', 'Android', 'TWRP', 'BGA'],
  },
  {
    Icon: Container,
    color: 'text-neon-cyan', iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    accent: 'via-neon-cyan/50', glow: 'hover:shadow-[0_0_35px_rgba(0,255,255,0.12)]',
    border: 'hover:border-neon-cyan/35',
    title: { ru: 'DevOps & Деплой', en: 'DevOps & Deploy', kg: 'DevOps & Деплой' },
    desc:  { ru: 'Настройка VPS, Docker, CI/CD, Nginx, SSL, мониторинг. Ваш проект в продакшене с первого дня.', en: 'VPS setup, Docker, CI/CD, Nginx, SSL, monitoring. Your project live from day one.', kg: 'VPS, Docker, CI/CD, Nginx, SSL орнотуу. Долбооруңуз биринчи күнүнөн продакшенда.' },
    tags: ['Docker', 'Nginx', 'CI/CD', 'Linux'],
  },
  {
    Icon: Smartphone,
    color: 'text-neon-green', iconBg: 'bg-neon-green/10 border-neon-green/20',
    accent: 'via-neon-green/50', glow: 'hover:shadow-[0_0_35px_rgba(57,255,20,0.12)]',
    border: 'hover:border-neon-green/35',
    title: { ru: 'Telegram Mini Apps', en: 'Telegram Mini Apps', kg: 'Telegram Mini Apps' },
    desc:  { ru: 'Веб-приложения внутри Telegram: магазины, сервисы, CRM, оплата. Аудитория миллионы — без App Store.', en: 'Web apps inside Telegram: shops, services, CRM, payments. Millions of users — no App Store needed.', kg: 'Telegram ичиндеги веб-колдонмолор: дүкөндөр, сервистер, CRM, төлөм.' },
    tags: ['TypeScript', 'React', 'Telegram API', 'WebApp'],
  },
  {
    Icon: ScanSearch,
    color: 'text-neon-purple', iconBg: 'bg-neon-purple/10 border-neon-purple/20',
    accent: 'via-neon-purple/50', glow: 'hover:shadow-[0_0_35px_rgba(191,0,255,0.12)]',
    border: 'hover:border-neon-purple/35',
    title: { ru: 'Консультации & Аудит', en: 'Consulting & Audit', kg: 'Консультация & Аудит' },
    desc:  { ru: 'Аудит кода и архитектуры, security review, оптимизация. Нахожу проблемы до того, как они стали дорогими.', en: 'Code & architecture audit, security review, optimization. I find problems before they become expensive.', kg: 'Код жана архитектура аудити, коопсуздук текшерүү, оптимизация.' },
    tags: ['Code Review', 'Architecture', 'Security', 'Optimization'],
  },
  {
    Icon: Zap,
    color: 'text-neon-pink', iconBg: 'bg-neon-pink/10 border-neon-pink/20',
    accent: 'via-neon-pink/50', glow: 'hover:shadow-[0_0_35px_rgba(255,0,128,0.12)]',
    border: 'hover:border-neon-pink/35',
    title: { ru: 'Парсинг & Автоматизация', en: 'Scraping & Automation', kg: 'Парсинг & Автоматташтыруу' },
    desc:  { ru: 'Сбор данных с любых сайтов, автоматизация рутинных задач, интеграции между сервисами.', en: 'Data collection from any site, routine task automation, service-to-service integrations.', kg: 'Ар кандай сайттардан маалымат чогултуу, тапшырмаларды автоматташтыруу.' },
    tags: ['Python', 'Playwright', 'Selenium', 'Scrapy'],
  },
]

export function SkillsSection() {
  const { t, locale } = useLanguage()

  return (
    <div>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
        {STATS.map(({ num, label }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, y: -2 }}
            className="relative rounded-2xl border border-border bg-surface p-5 text-center overflow-hidden cursor-default"
          >
            {/* Glow bg */}
            <div className="absolute inset-0 bg-neon-cyan/[0.02] pointer-events-none" />
            <div className="text-3xl sm:text-4xl font-black text-neon-cyan neon-text leading-none">{num}</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-1.5 uppercase tracking-widest">{label[locale]}</div>
          </motion.div>
        ))}
      </div>

      {/* ── Services — что можно заказать ── */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-[0.2em]">
            {locale === 'ru' ? '// Что можно заказать' : locale === 'en' ? '// Available for hire' : '// Эмне буюртмалоого болот'}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-14">
        {SERVICES.map(({ Icon, color, iconBg, accent, glow, border, title, desc, tags }, i) => (
          <motion.a
            key={title.en}
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`relative rounded-2xl border border-border bg-surface p-5 overflow-hidden
                        transition-colors duration-300 ${border} ${glow} cursor-pointer block`}
          >
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${accent} to-transparent`} />

            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${iconBg}`}
              >
                <Icon size={18} className={color} strokeWidth={1.5} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-sm font-bold leading-tight ${color}`}>{title[locale]}</h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">{desc[locale]}</p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((tag) => (
                <span key={tag} className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${iconBg} ${color} opacity-70`}>
                  {tag}
                </span>
              ))}
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-zinc-400 ml-auto`}>
                {locale === 'ru' ? 'Заказать →' : locale === 'en' ? 'Hire →' : 'Буюртма →'}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* ── Legend ── */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-[0.2em]">
            {locale === 'ru' ? '// Технический стек' : locale === 'en' ? '// Tech stack' : '// Техникалык стек'}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
        </div>
      </ScrollReveal>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs text-zinc-500 font-mono uppercase tracking-wider mr-1"
        >
          Level:
        </motion.span>
        {(['primary', 'advanced', 'conceptual'] as SkillLevel[]).map((level, i) => {
          const cfg = LEVEL_CFG[level]
          return (
            <motion.span
              key={level}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border cursor-default ${cfg.ring}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {t(cfg.labelKey)}
            </motion.span>
          )
        })}
      </div>

      {/* ── 6-card grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => {
          const s = CARD_STYLES[i % CARD_STYLES.length]
          const Icon = ICON_MAP[group.iconName] ?? Code2
          return (
            <ScrollReveal key={group.id} delay={i * 0.07}>
              <div className={`relative h-full rounded-2xl border border-border bg-surface p-5 overflow-hidden
                              hover:bg-surface-hover transition-all duration-300
                              hover:-translate-y-0.5 ${s.border} ${s.glow}`}>

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${s.accent} to-transparent`} />

                {/* Header: icon + title + count */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${s.iconBg}`}
                  >
                    <Icon size={16} className={s.icon} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className={`text-sm font-bold leading-tight flex-1 ${s.title}`}>
                    {group.title[locale]}
                  </h3>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border opacity-50 ${s.title} border-current`}>
                    {group.skills.length}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, j) => {
                    const lvl = LEVEL_CFG[skill.level]
                    return (
                      <motion.span
                        key={skill.label}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + j * 0.035, duration: 0.22, ease: 'easeOut' }}
                        whileHover={{ scale: 1.07, y: -1 }}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs cursor-default ${lvl.ring}`}
                      >
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${lvl.dot}`} />
                        {skill.label}
                      </motion.span>
                    )
                  })}
                </div>

              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
