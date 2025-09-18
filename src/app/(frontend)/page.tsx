import { Features } from '@/components/features'
import Hero from '@/components/hero'
import { AboutFeatures } from '@/components/about-features'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
// import NotionAboutComponent from '@/components/about'
import { getPageSEO } from '@/lib/getPageSeo'
import { ScrollBasedVelocityDemo } from '@/components/velocityText'

export default async function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      {/* <NotionAboutComponent /> */}
      <ScrollBasedVelocityDemo />
      <AboutFeatures />
      <Features />
      <Projects />
      <Testimonials />
    </div>
  )
}

export async function generateMetadata() {
  return await getPageSEO(1, 'pages')
}
