'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { ScrollReveal } from './ScrollReveal'
import { Wrench, Cpu, Smartphone, Terminal, Monitor, Zap } from 'lucide-react'

const capabilities = [
  {
    Icon: Wrench,
    labelRu: 'Board-level ремонт плат',
    labelEn: 'Board-level repair',
    color: 'text-neon-cyan',
    iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    border: 'hover:border-neon-cyan/40',
    accent: 'via-neon-cyan/40',
    glow: 'hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]',
  },
  {
    Icon: Cpu,
    labelRu: 'Micro-soldering / BGA',
    labelEn: 'Micro-soldering / BGA',
    color: 'text-neon-green',
    iconBg: 'bg-neon-green/10 border-neon-green/20',
    border: 'hover:border-neon-green/40',
    accent: 'via-neon-green/40',
    glow: 'hover:shadow-[0_0_25px_rgba(57,255,20,0.1)]',
  },
  {
    Icon: Smartphone,
    labelRu: 'Android: bootloader / TWRP / Magisk',
    labelEn: 'Android: bootloader / TWRP / Magisk',
    color: 'text-neon-purple',
    iconBg: 'bg-neon-purple/10 border-neon-purple/20',
    border: 'hover:border-neon-purple/40',
    accent: 'via-neon-purple/40',
    glow: 'hover:shadow-[0_0_25px_rgba(191,0,255,0.1)]',
  },
  {
    Icon: Terminal,
    labelRu: 'Linux / Kali NetHunter',
    labelEn: 'Linux / Kali NetHunter',
    color: 'text-neon-pink',
    iconBg: 'bg-neon-pink/10 border-neon-pink/20',
    border: 'hover:border-neon-pink/40',
    accent: 'via-neon-pink/40',
    glow: 'hover:shadow-[0_0_25px_rgba(255,0,128,0.1)]',
  },
  {
    Icon: Monitor,
    labelRu: 'Диагностика и сборка ПК',
    labelEn: 'PC diagnostics & assembly',
    color: 'text-neon-cyan',
    iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    border: 'hover:border-neon-cyan/40',
    accent: 'via-neon-cyan/40',
    glow: 'hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]',
  },
  {
    Icon: Zap,
    labelRu: 'Прошивки / IMEI / Bootloader unlock',
    labelEn: 'Firmware / IMEI / Bootloader unlock',
    color: 'text-neon-green',
    iconBg: 'bg-neon-green/10 border-neon-green/20',
    border: 'hover:border-neon-green/40',
    accent: 'via-neon-green/40',
    glow: 'hover:shadow-[0_0_25px_rgba(57,255,20,0.1)]',
  },
]

export function HardwareSection() {
  const { t, locale } = useLanguage()

  return (
    <div>
      <ScrollReveal>
        <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-2xl">
          {t('hardware.desc')}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.labelEn} delay={i * 0.07}>
            <div className={`relative flex items-center gap-4 rounded-xl border border-border bg-surface p-5 overflow-hidden
                             transition-all duration-300 hover:-translate-y-0.5 ${cap.border} ${cap.glow}`}>

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${cap.accent} to-transparent`} />

              {/* Colored icon box */}
              <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${cap.iconBg}`}>
                <cap.Icon size={18} className={cap.color} strokeWidth={1.5} />
              </div>

              <span className="text-sm text-zinc-300 font-medium leading-snug">
                {locale === 'ru' ? cap.labelRu : cap.labelEn}
              </span>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
