import { Badge } from '@/components/ui/badge'
import ServiceCard from '@/components/service-card'
import { getPayloadClient } from '@/lib/payloadClient'
import { getPageSEO } from '@/lib/getPageSeo'
export const dynamic = 'force-dynamic'
export default async function Services() {
  const payload = await getPayloadClient()
  const data = await payload.find({
    collection: 'services',
  })

  const servicesData = data.docs.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.shortDescription,
    icon: s.icon ? `${process.env.NEXT_PUBLIC_API_URL}${s.icon.url}` : '',
    slug: s.slug,
    technologiesUsed: s.technologiesUsed || [],
  }))

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconUrl={service.icon}
              slug={service.slug}
              technologiesUsed={service.technologiesUsed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO(5, 'pages')
}
