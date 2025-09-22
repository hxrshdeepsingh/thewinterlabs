import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { getPayloadClient } from '@/lib/payloadClient'
import { getPageSEO } from '@/lib/getPageSeo'
import { Suspense, cache } from 'react'
import { ServiceCard } from '@/components/card'

export const revalidate = 60

const getServices = cache(async () => {
  const payload = await getPayloadClient()
  const data = await payload.find({
    collection: 'services',
  })

  return data.docs.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.shortDescription,
    icon: s.icon,
    featureImage: s.featureImage,
    slug: s.slug,
    technologiesUsed: s.technologiesUsed || [],
  }))
})

async function ServicesList() {
  const servicesData = await getServices()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          iconUrl={service.featureImage}
          featureImage={service.featureImage}
          slug={service.slug}
          technologiesUsed={service.technologiesUsed}
        />
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-10 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Services</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Explore the services we offer to help your business grow
          </p>
        </div>

        {/* Suspense for streaming */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-[50vh] rounded-xl bg-muted flex items-center justify-center"
                >
                  Loading...
                </div>
              ))}
            </div>
          }
        >
          <ServicesList />
        </Suspense>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/services', 'pages')
}
