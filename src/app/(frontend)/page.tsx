import * as React from 'react'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Faq from '@/components/Faq'

export default function Page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <Faq />
    </>
  )
}
