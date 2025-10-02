import './styles.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Cta } from '@/components/cta'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import PageTransition from '@/components/PageTransition'
import CookieProvider from '@/components/ui/CookieProvider'
import { Navbar } from '@/components/navbar/navbar'

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
  alternates: {
    canonical: 'https://thewinterlabs.in',
  },
}
// export const generateViewport = () => ({
//   themeColor: "#171717",
// });

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScrollProvider>
          <PageTransition>
            <Navbar />
            <main>{children}</main>
            <Cta />
            <Footer />
            <Analytics />
          </PageTransition>
        </SmoothScrollProvider>
        <CookieProvider />
      </body>
      <GoogleAnalytics gaId="G-5SX583CH0G" />
      <SpeedInsights />
    </html>
  )
}
