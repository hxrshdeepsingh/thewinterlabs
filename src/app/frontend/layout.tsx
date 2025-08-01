import './styles.css'
import React from 'react'
import Header from '@/components-old/Header'
import Footer from '@/components-old/Footer'
import Cta from '@/components-old/CallToAction'
import ClientWrapper from '@/components-old/ClientWrapper'

export const metadata = {
  description: 'thewinterlabs',
  title: 'thewinterlabs',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Header />
          <main>
            {children}
            <Cta />
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
