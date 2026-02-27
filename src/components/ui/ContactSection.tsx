'use client'

import { motion } from 'framer-motion'
import { MapPin, Globe, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { ScrollReveal } from './ScrollReveal'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">

      {/* Decorative radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-cyan/[0.04] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-neon-green/[0.03] blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Status badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            {t('contact.available')}
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 neon-text">
            {t('contact.title')}
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.15}>
          <p className="text-zinc-400 text-lg mb-10">
            {t('header.title')}
          </p>
        </ScrollReveal>

        {/* Info chips — Lucide icons, neon-tinted */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { icon: MapPin, color: 'text-neon-cyan', border: 'border-neon-cyan/20', bg: 'bg-neon-cyan/5', text: t('contact.location') },
              { icon: Globe,  color: 'text-neon-purple', border: 'border-neon-purple/20', bg: 'bg-neon-purple/5', text: t('contact.languages') },
            ].map(({ icon: Icon, color, border, bg, text }, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.04, y: -1 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${border} ${bg} text-zinc-300 text-sm font-mono cursor-default`}
              >
                <Icon size={13} className={`${color} flex-shrink-0`} strokeWidth={1.5} />
                {text}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="https://t.me/Terme4ikov"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-cyan text-black font-bold text-base
                         shadow-[0_0_30px_rgba(0,255,255,0.3)] tracking-wider font-mono"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Telegram
            </motion.a>
            <motion.a
              href="https://wa.me/996550590501"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.3 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-green text-black font-bold text-base
                         shadow-[0_0_30px_rgba(57,255,20,0.3)] tracking-wider font-mono"
            >
              <MessageCircle size={16} strokeWidth={2} />
              WhatsApp
            </motion.a>
            <motion.a
              href="mailto:sanzhar@mobo.kg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26, duration: 0.3 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full border border-white/15 text-zinc-400 font-bold text-base
                         hover:border-white/30 hover:text-white transition-colors duration-300
                         tracking-wider font-mono"
            >
              Email ↗
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Footer note with separator */}
        <ScrollReveal delay={0.35}>
          <div className="mt-16">
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />
            <p className="text-zinc-600 text-xs font-mono">
              SANCHO · t.me/Terme4ikov · wa.me/996550590501 · sanzhar@mobo.kg
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
