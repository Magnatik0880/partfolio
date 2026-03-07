import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
import { LanguageProvider } from '@/context/LanguageContext'
import { CursorSpotlight } from '@/components/ui/CursorSpotlight'
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
  metadataBase: new URL('https://sancho-mobo.github.io'),
  title: 'Sanzhar Termechikov | Principal Systems Engineer',
  description:
    'Portfolio of Sanzhar (Sancho) Termechikov — Principal Systems Engineer. CRM, AI bots, VPN, hardware repair.',
  keywords: [
    'Sanzhar Termechikov',
    'Sancho',
    'Portfolio',
    'Systems Engineer',
    'Next.js',
    'AI Bots',
    'DevOps',
    'Hardware Repair',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    title: 'Sanzhar Termechikov | Principal Systems Engineer',
    description:
      'CRM, AI bots, VPN, Linux infra, and hardware engineering by Sancho.',
    siteName: 'Sancho Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanzhar Termechikov | Principal Systems Engineer',
    description:
      'CRM, AI bots, VPN, Linux infra, and hardware engineering by Sancho.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
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
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <CursorSpotlight />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGW4DFVLZE"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGW4DFVLZE');
          `}
        </Script>
      </body>
    </html>
  )
}
