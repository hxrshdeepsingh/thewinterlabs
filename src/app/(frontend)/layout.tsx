import './styles.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { SmoothCursor } from '@/components/ui/smooth-cursor'
import { Footer } from '@/components/footer'
import { Cta } from '@/components/cta'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import TopProgressBar from '@/components/ui/TopLoader'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import PageTransition from '@/components/PageTransition'
import CookieProvider from '@/components/ui/CookieProvider'
import { Navbar5 } from '@/components/navbar-5'
const inter = Geist({
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
          {/* <SmoothCursor /> */}
          <PageTransition>
            <TopProgressBar />
            <Navbar5 />
            <main>{children}</main>
            <Cta />
            <Footer />
            <Analytics />
            {/* <Script
              id="tawk-to"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: tawkScript }}
            /> */}
          </PageTransition>
        </SmoothScrollProvider>
        <CookieProvider />
      </body>
      <GoogleAnalytics gaId="G-5SX583CH0G" />
      <SpeedInsights />
    </html>
  )
}
