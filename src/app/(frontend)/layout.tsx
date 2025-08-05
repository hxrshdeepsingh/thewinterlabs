import './styles.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Cta } from '@/components/cta'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Thewinterlabs',
  description: 'An company that focus on quality not quantity.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Cta />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
