import './styles.css'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/CallToAction'
import ClientWrapper from '@/components/ClientWrapper'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <main>
            <Header />
            {children}
            <Cta />
            <Footer />
          </main>
        </ClientWrapper>
      </body>
    </html>
  )
}
