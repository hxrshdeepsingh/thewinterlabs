'use client'
import { HeroSection } from '@/components/hero-section-1'
import { Footerdemo } from '@/components/ui/footer-section'
import Testimonials from '@/components/testimonials'
import FeatureStepsDemo from '@/components/feature-step'
export default function page() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <FeatureStepsDemo />
      <Footerdemo />
    </>
  )
}
