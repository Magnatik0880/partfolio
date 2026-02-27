import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin', 'cyrillic'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Sanzhar Termechikov | Principal Systems Engineer',
  description:
    'Portfolio of Sanzhar (Sancho) Termechikov — Principal Systems Engineer. CRM, AI bots, VPN, hardware repair.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${interSans.variable} ${robotoMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
