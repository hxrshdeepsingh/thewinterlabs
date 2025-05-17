'use client'

import HeroSectionOne from '@/components/hero-section-demo-1'
import { HeroSection } from '@/components/hero-section-1'
export default function page() {
  return (
    <>
      <HeroSection />

      <HeroSectionOne />
      <div className="bg-red-700">page</div>
    </>
  )
}
