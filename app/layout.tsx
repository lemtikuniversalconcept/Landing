import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { NavigationHeader } from '@/components/navigation-header'
import { Footer } from '@/components/footer'
import { FundingBanner } from '@/components/funding-banner'
import { FundingPopup } from '@/components/funding-popup'
import { WhatsappButton } from '@/components/whatsapp-button'
import { StickyDemoBar } from '@/components/sticky-demo-bar'
import { ConsentBanner } from '@/components/consent-banner'
import { GoogleAnalytics } from '@/components/google-analytics'
import { siteUrl, siteName } from '@/lib/seo'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = 'Lemtik Security - The Operating System for African Security'
const description = 'Africa\'s first civilian-grade command and control platform. Real-time intelligence and coordinated dispatch for security teams in Lagos.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Lemtik Security',
  },
  description,
  generator: 'Lemtik Security',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080d1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased pb-16 md:pb-0">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <FundingBanner />
        <FundingPopup />
        <NavigationHeader />
        {children}
        <Footer />
        <WhatsappButton />
        <StickyDemoBar />
        <ConsentBanner />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  )
}
