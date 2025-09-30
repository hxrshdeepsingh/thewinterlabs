import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import { Features } from '@/components/features-homepage'
import { AboutFeatures } from '@/components/about-features'
import { getPageSEO } from '@/lib/getPageSeo'
import { ScrollBasedVelocityDemo } from '@/components/velocityText'
import ServiceHomepage from '@/components/service-homepage'
import HeroHomepage from '@/components/hero-homepage'
import AboutHomepage from '@/components/about-homepage'

export default async function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <HeroHomepage />
      <AboutHomepage />
      <ServiceHomepage />
      <AboutFeatures />
      <Features />
      <Testimonials />
    </div>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/', 'pages')
}
