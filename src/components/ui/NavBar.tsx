'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { LanguageToggle } from './LanguageToggle'

const NAV_ITEMS = [
  { key: 'section.projects',       href: '#projects'       },
  { key: 'section.skills',         href: '#skills'         },
  { key: 'section.certifications', href: '#certifications' },
  { key: 'section.hardware',       href: '#hardware'       },
  { key: 'section.contact',        href: '#contact'        },
]

export function NavBar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-neon-cyan/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-black neon-text tracking-widest hover:opacity-80 transition-opacity"
        >
          SANCHO
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map(({ key, href }, i) => (
            <button
              key={key}
              onClick={() => handleNavClick(href)}
              className="group flex flex-col items-center gap-0.5 relative"
            >
              <span className="font-mono text-[9px] text-neon-cyan/30 group-hover:text-neon-cyan/70 transition-colors tabular-nums tracking-widest">
                0{i + 1}
              </span>
              <span className="text-xs text-zinc-400 group-hover:text-white transition-colors tracking-wider uppercase font-medium">
                {t(key)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-neon-cyan to-neon-cyan/0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-neon-cyan transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-neon-cyan/15"
          >
            <div className="px-6 pt-4 pb-5 flex flex-col">
              {NAV_ITEMS.map(({ key, href }, i) => (
                <motion.button
                  key={key}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.28, ease: 'easeOut' }}
                  onClick={() => handleNavClick(href)}
                  className="group text-left py-4 border-b border-white/5 last:border-0
                             flex items-center gap-4
                             border-l-2 border-l-transparent hover:border-l-neon-cyan
                             pl-0 hover:pl-3 transition-all duration-300"
                >
                  <span className="font-mono text-[11px] text-neon-cyan/35 group-hover:text-neon-cyan/80 transition-colors tabular-nums w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-zinc-300 text-base font-medium group-hover:text-white transition-colors tracking-wide">
                    {t(key)}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="ml-auto text-neon-cyan/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </motion.span>
                </motion.button>
              ))}

              {/* Menu footer */}
              <div className="pt-4 flex items-center justify-between">
                <span className="font-mono text-[10px] text-zinc-700 tracking-[0.2em]">// NAVIGATE</span>
                <span className="font-mono text-[10px] text-zinc-700 tracking-widest">SANCHO.KG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
