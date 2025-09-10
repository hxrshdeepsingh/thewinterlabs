import './styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cta } from '@/components/cta'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import TopProgressBar from '@/components/ui/TopLoader'
import Script from 'next/script'
import { tawkScript } from '@/lib/tawk'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import PageTransition from '@/components/PageTransition'
import CookieProvider from '@/components/ui/CookieProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TheWinterLabs',
  description: 'Engineering Next-Gen Digital Brilliance',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#171717',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'TheWinterLabs',
    description: 'Engineering Next-Gen Digital Brilliance',
    url: 'https://thewinterlabs.in',
    siteName: 'TheWinterLabs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TheWinterLabs Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheWinterLabs',
    description: 'Engineering Next-Gen Digital Brilliance',
    images: ['/og-image.png'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScrollProvider>
          <PageTransition>
            <TopProgressBar />
            <Navbar />
            <main>{children}</main>
            <Cta />
            <Footer />
            <Analytics />
            <Script
              id="tawk-to"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: tawkScript }}
            />
          </PageTransition>
        </SmoothScrollProvider>
        <CookieProvider />
      </body>
      <GoogleAnalytics gaId="G-5SX583CH0G" />
      <SpeedInsights />
    </html>
  )
}
