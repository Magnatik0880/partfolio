import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
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
