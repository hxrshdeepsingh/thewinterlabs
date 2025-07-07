'use client'
import { HeroSection } from '@/components/hero-section-1'
import { Footerdemo } from '@/components/ui/footer-section'
import Testimonials from '@/components/testimonials'
import FeatureStepsDemo from '@/components/feature-step'
import { Gallery4 } from '@/components/gallery4'
import { Footer2 } from '@/components/ui/shadcnblocks-com-footer2'

export default function page() {
  return (
    <>
      <HeroSection />
      <Gallery4 />
      <Testimonials />
      <FeatureStepsDemo />
      <Footer2 />
    </>
  )
}
