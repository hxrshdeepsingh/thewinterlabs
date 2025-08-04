import { Features } from '@/components/features'
import Hero from '@/components/hero'
import { AboutFeatures } from '@/components/about-features'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <AboutFeatures />
      <Features />
      <Projects />
      <Testimonials />
    </div>
  )
}
