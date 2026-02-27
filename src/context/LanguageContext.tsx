'use client'

import { createContext, useState, useCallback, type ReactNode } from 'react'
import type { Locale } from '@/types'
import translations from '@/data/translations'

const LOCALES: Locale[] = ['ru', 'en', 'kg']

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggle: () => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue>({
  locale: 'ru',
  setLocale: () => {},
  toggle: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru')

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const idx = LOCALES.indexOf(prev)
      return LOCALES[(idx + 1) % LOCALES.length]
    })
  }, [])

  const t = useCallback(
    (key: string) => translations[locale]?.[key] ?? key,
    [locale],
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
