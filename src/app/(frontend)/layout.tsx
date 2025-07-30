import './styles.css'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/CallToAction'
import ClientWrapper from '@/components/ClientWrapper'

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
