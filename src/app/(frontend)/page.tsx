'use client'
import * as React from 'react'
import { Hero } from '@/components/Hero'
import Testimonials from '@/components/testimonials'
import { Gallery } from '@/components/gallery'

export default function page() {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
    </>
  )
}
