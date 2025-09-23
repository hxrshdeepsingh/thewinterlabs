import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import { Features } from '@/components/features'
import { AboutFeatures } from '@/components/about-features'
import { getPageSEO } from '@/lib/getPageSeo'
import { ScrollBasedVelocityDemo } from '@/components/velocityText'
import ServiceHomepage from '@/components/service-homepage'

export default async function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <ScrollBasedVelocityDemo />
      <AboutFeatures />
      <ServiceHomepage />
      <Features />
      <Testimonials />
    </div>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/', 'pages')
}
