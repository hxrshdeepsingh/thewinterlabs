import './styles.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cta } from '@/components/cta'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google';
import TopProgressBar from '@/components/ui/TopLoader'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: 'The Winter Labs',
  description: 'Engineering Next-Gen Digital Brilliance',
  icons: {
    icon: 'https://res.cloudinary.com/dcnq9bzcz/image/upload/v1756124919/favicon_eck4bs.ico',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <TopProgressBar />
        <Navbar />
        <main>
          {children}
        </main>
        <Cta />
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-5SX583CH0G" />
      <SpeedInsights/>
    </html>
  )
}
