'use client'

/**
 * CertificationsSection
 * ─ Responsive grid of certification cards (3-col desktop / 2-col tablet / 1-col mobile)
 * ─ Modal image viewer with ESC, backdrop click, body scroll lock
 * ─ Accessible: role="dialog", aria-modal, aria-label, focus-on-open, keyboard nav
 * ─ SEO: JSON-LD EducationalOccupationalCredential schema
 *
 * To add / edit certificates:
 *   1. Update the CERTS array below.
 *   2. Place certificate images in:  public/assets/certificates/<name>.jpg
 *      and set imagePath: '/assets/certificates/<name>.jpg'
 */

import { useState, useEffect, useCallback, useRef, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, Terminal, BookOpen, Coffee,
  ExternalLink, Eye, X,
  type LucideProps,
} from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { ScrollReveal } from './ScrollReveal'
import type { Locale } from '@/types'

/* ═══════════════════════════════════════════════════════════
   Certificate data — add your certs here
   ═══════════════════════════════════════════════════════════ */
export interface Cert {
  id: string
  title: string
  issuer: string
  credentialId?: string
  issueDate?: string       // ISO: 'YYYY-MM-DD'
  renewalDate?: string     // ISO: 'YYYY-MM-DD'
  verificationUrl?: string // opens in new tab
  imagePath?: string       // relative to /public

  /* visual tokens */
  Icon: FC<LucideProps>
  color: string
  iconBg: string
  accent: string
  glow: string
  border: string
  tagClass: string
  category: Record<Locale, string>
  status: 'ACTIVE' | 'IN PROGRESS' | 'COMPLETED'
}

const CERTS: Cert[] = [
  /* ── 01 · CEH ─────────────────────────────────────────── */
  {
    id: 'ceh',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    credentialId: 'ECC6547098231',
    issueDate: '2020-01-07',
    renewalDate: '2027-02-01',
    // TODO: replace with your real verification URL:
    // https://aspen.eccouncil.org/VerifyBadge?type=certification&a=ECC6547098231
    verificationUrl: undefined,
    // Place your certificate image at: public/assets/certificates/ceh.jpg
    imagePath: '/assets/certificates/ceh.jpg',
    Icon: ShieldCheck,
    color: 'text-neon-cyan',
    iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
    accent: 'via-neon-cyan/50',
    glow: 'hover:shadow-[0_0_44px_rgba(0,255,255,0.13)]',
    border: 'hover:border-neon-cyan/35',
    tagClass: 'border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan',
    category: { ru: 'БЕЗОПАСНОСТЬ · CEH', en: 'SECURITY · CEH', kg: 'КООПСУЗДУК · CEH' },
    status: 'ACTIVE',
  },

  /* ── 02 · LPIC-1 ───────────────────────────────────────── */
  {
    id: 'lpic1',
    title: 'LPIC-1 Certified Linux Administrator',
    issuer: 'Linux Professional Institute (LPI)',
    credentialId: '3603 2821201',
    issueDate: '2012-04-01',       // April 2012
    renewalDate: undefined,
    // LPI official verification: https://cs.lpi.org/caf/Verify/
    // TODO: add your direct verification link when available
    verificationUrl: undefined,
    // Place your certificate image at: public/assets/certificates/lpic1.jpg
    imagePath: '/assets/certificates/lpic1.jpg',
    Icon: Terminal,
    color: 'text-neon-green',
    iconBg: 'bg-neon-green/10 border-neon-green/20',
    accent: 'via-neon-green/50',
    glow: 'hover:shadow-[0_0_44px_rgba(57,255,20,0.13)]',
    border: 'hover:border-neon-green/35',
    tagClass: 'border-neon-green/20 bg-neon-green/5 text-neon-green',
    category: { ru: 'LINUX · СИСТЕМЫ', en: 'LINUX · SYSTEMS', kg: 'LINUX · СИСТЕМАЛАР' },
    status: 'ACTIVE',
  },

  /* ── 03 · Oracle Java SE 11 ────────────────────────────── */
  {
    id: 'oracle-java11',
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle University',
    credentialId: '2835935980CPJSE11-J',
    issueDate: '2021-04-26',
    renewalDate: undefined,
    // Verification via Oracle CertView: https://catalog-education.oracle.com/pls/certview/sharebadge
    // TODO: add your direct CertView link when available
    verificationUrl: undefined,
    // Place your certificate image at: public/assets/certificates/oracle-java-se-11.jpg
    imagePath: '/assets/certificates/oracle-java-se-11.jpg',
    Icon: Coffee,
    color: 'text-neon-pink',
    iconBg: 'bg-neon-pink/10 border-neon-pink/20',
    accent: 'via-neon-pink/50',
    glow: 'hover:shadow-[0_0_44px_rgba(255,0,128,0.13)]',
    border: 'hover:border-neon-pink/35',
    tagClass: 'border-neon-pink/20 bg-neon-pink/5 text-neon-pink',
    category: { ru: 'JAVA · ORACLE OCP', en: 'JAVA · ORACLE OCP', kg: 'JAVA · ORACLE OCP' },
    status: 'ACTIVE',
  },

  /* ── 04 · LinkedIn LPIC-2 Prep ─────────────────────────── */
  {
    id: 'lpic2prep',
    title: 'Prepare for LPIC-2 (201-450) Exam',
    issuer: 'LinkedIn Learning',
    credentialId: undefined,
    issueDate: undefined,
    renewalDate: undefined,
    verificationUrl: undefined,
    imagePath: undefined,
    Icon: BookOpen,
    color: 'text-neon-purple',
    iconBg: 'bg-neon-purple/10 border-neon-purple/20',
    accent: 'via-neon-purple/50',
    glow: 'hover:shadow-[0_0_44px_rgba(191,0,255,0.13)]',
    border: 'hover:border-neon-purple/35',
    tagClass: 'border-neon-purple/20 bg-neon-purple/5 text-neon-purple',
    category: { ru: 'КУРС · LINUX', en: 'COURSE · LINUX', kg: 'КУРС · LINUX' },
    status: 'COMPLETED',
  },
]

/* ═══════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════ */
function fmtDate(iso: string, locale: Locale): string {
  const d = new Date(iso)
  const localeMap: Record<Locale, string> = { ru: 'ru-RU', en: 'en-US', kg: 'ru-RU' }
  return d.toLocaleDateString(localeMap[locale], {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

const STATUS_STYLE: Record<string, string> = {
  'ACTIVE':      'text-neon-cyan   border-neon-cyan/30   bg-neon-cyan/5',
  'IN PROGRESS': 'text-neon-green  border-neon-green/30  bg-neon-green/5',
  'COMPLETED':   'text-neon-purple border-neon-purple/30 bg-neon-purple/5',
}

/* ── JSON-LD (SEO) ─────────────────────────────────────── */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': CERTS
    .filter(c => c.issueDate || c.credentialId)
    .map(c => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.title,
      credentialCategory: 'Professional Certificate',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      ...(c.credentialId && { identifier: c.credentialId }),
      ...(c.issueDate    && { validFrom: c.issueDate }),
      ...(c.renewalDate  && { validUntil: c.renewalDate }),
      holder: { '@type': 'Person', name: 'Sanzhar Termechikov' },
    })),
}

/* ═══════════════════════════════════════════════════════════
   Modal
   ═══════════════════════════════════════════════════════════ */
interface ModalProps { cert: Cert; onClose: () => void }

function CertModal({ cert, onClose }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  /* focus close button on open */
  useEffect(() => { closeRef.current?.focus() }, [])

  /* ESC to close */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
    >
      {/* ── Backdrop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/92 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Panel ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 16 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        className="relative z-10 w-full max-w-2xl rounded-2xl border border-border bg-surface overflow-hidden"
      >
        {/* top accent line */}
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${cert.accent} to-transparent`} />

        {/* header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}>
            <cert.Icon size={14} className={cert.color} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-bold leading-tight truncate ${cert.color}`}>{cert.title}</p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{cert.issuer}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close certificate viewer"
            className="w-8 h-8 rounded-lg border border-border hover:border-white/20
                       flex items-center justify-center text-zinc-500 hover:text-white
                       transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/40"
          >
            <X size={14} />
          </button>
        </div>

        {/* certificate image */}
        {cert.imagePath && (
          <div className="px-5 pt-5 pb-3">
            <div className="rounded-xl overflow-hidden border border-white/8 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.imagePath}
                alt={`${cert.title} — ${cert.issuer} certificate`}
                className="w-full object-contain max-h-[58vh]"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* footer */}
        <div className="flex items-center gap-3 px-5 py-4 border-t border-white/5">
          {cert.credentialId && (
            <span className="text-[11px] font-mono text-zinc-600 flex-1 truncate">
              # {cert.credentialId}
            </span>
          )}
          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.title} on official website`}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-mono
                         transition-all hover:opacity-90
                         focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 ${cert.tagClass}`}
            >
              <ExternalLink size={12} />
              Verify
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Main component
   ═══════════════════════════════════════════════════════════ */
export function CertificationsSection() {
  const { locale } = useLanguage()
  const [activeModal, setActiveModal] = useState<Cert | null>(null)
  const closeModal = useCallback(() => setActiveModal(null), [])

  return (
    <>
      {/* ── SEO structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {CERTS.map((cert, i) => (
          <ScrollReveal key={cert.id} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className={`relative rounded-2xl border border-border bg-surface overflow-hidden
                         transition-colors duration-300 flex flex-col h-full
                         ${cert.border} ${cert.glow}`}
            >
              {/* top accent line */}
              <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${cert.accent} to-transparent`} />

              {/* background watermark number */}
              <div
                className={`absolute top-0 right-3 text-[7rem] font-black leading-none
                             select-none pointer-events-none ${cert.color}`}
                style={{ opacity: 0.035 }}
                aria-hidden="true"
              >
                0{i + 1}
              </div>

              {/* ── Card body ── */}
              <div className="relative z-10 p-5 flex flex-col flex-1">

                {/* header row */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}
                  >
                    <cert.Icon size={18} className={cert.color} strokeWidth={1.5} />
                  </motion.div>

                  <span className={`flex-1 text-[9px] font-mono tracking-[0.18em] uppercase opacity-70 ${cert.color}`}>
                    {cert.category[locale]}
                  </span>

                  <span
                    className={`text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border whitespace-nowrap
                                ${STATUS_STYLE[cert.status] ?? ''}`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* title */}
                <h3 className={`text-[15px] font-bold leading-snug mb-1.5 ${cert.color}`}>
                  {cert.title}
                </h3>

                {/* issuer */}
                <p className="text-[11px] text-zinc-500 font-mono mb-4">{cert.issuer}</p>

                {/* metadata rows */}
                <div className="space-y-1.5 mb-5 flex-1">
                  {cert.issueDate && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] text-zinc-600 font-mono shrink-0">
                        {locale === 'ru' ? 'Выдан' : locale === 'en' ? 'Issued' : 'Берилген'}
                      </span>
                      <span className="text-xs text-zinc-300 text-right">{fmtDate(cert.issueDate, locale)}</span>
                    </div>
                  )}
                  {cert.renewalDate && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] text-zinc-600 font-mono shrink-0">
                        {locale === 'ru' ? 'Действует до' : locale === 'en' ? 'Valid until' : 'Жарактуу'}
                      </span>
                      <span className="text-xs text-zinc-300 text-right">{fmtDate(cert.renewalDate, locale)}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] text-zinc-600 font-mono shrink-0">ID</span>
                      <span className={`text-[11px] font-mono ${cert.color} opacity-80 text-right break-all`}>
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                  {!cert.issueDate && !cert.credentialId && (
                    <p className="text-[11px] text-zinc-700 font-mono italic">
                      {locale === 'ru'
                        ? '// Данные добавляются'
                        : locale === 'en'
                        ? '// Details coming soon'
                        : '// Маалымат жакында'}
                    </p>
                  )}
                </div>

                {/* divider */}
                <div className="h-px bg-white/5 mb-4" />

                {/* action buttons */}
                <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Certificate actions">
                  {cert.imagePath && (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setActiveModal(cert)}
                      aria-label={`View ${cert.title} certificate`}
                      className={`inline-flex items-center gap-2 py-2 px-3.5 rounded-xl border text-xs font-mono
                                 transition-all focus:outline-none focus:ring-2 focus:ring-neon-cyan/40
                                 ${cert.tagClass} hover:opacity-90`}
                    >
                      <Eye size={12} aria-hidden="true" />
                      {locale === 'ru' ? 'Посмотреть' : locale === 'en' ? 'View' : 'Көрүү'}
                    </motion.button>
                  )}

                  {cert.verificationUrl && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.title} on ${cert.issuer} website`}
                      className="inline-flex items-center gap-1.5 py-2 px-3 rounded-xl
                                 border border-white/10 text-xs font-mono text-zinc-400
                                 hover:text-white hover:border-white/20 transition-all
                                 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      <ExternalLink size={12} aria-hidden="true" />
                      {locale === 'ru' ? 'Верификация' : locale === 'en' ? 'Verify' : 'Текшерүү'}
                    </motion.a>
                  )}

                  {!cert.imagePath && !cert.verificationUrl && (
                    <span className="text-[10px] font-mono text-zinc-700 italic">
                      {locale === 'ru' ? '// Сертификат обновляется'
                        : locale === 'en' ? '// Certificate pending'
                        : '// Жакында'}
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Image modal ── */}
      <AnimatePresence>
        {activeModal && (
          <CertModal cert={activeModal} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  )
}
