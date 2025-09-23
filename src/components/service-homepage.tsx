import React from 'react'
import { getPayloadClient } from '@/lib/payloadClient'

const getServices = async () => {
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
    keyFeatures: s.keyFeatures,
    deliverables: s.deliverables,
  }))
}

export default async function ServiceHomepage() {
  const servicesData = await getServices()
  return (
    <section className="bg-muted/30 py-32">
      <div className="container">
        <div className="mx-auto max-w-screen-lg space-y-16">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-border bg-background text-foreground"
            >
              Our Services
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Comprehensive Digital Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              Transparent pricing for world-class digital solutions tailored to your specific
              business needs and growth objectives.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border bg-background/80 hover:bg-background backdrop-blur-sm"
              >
                <div className="p-8">
                  {/* Header with Icon + Title */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg p-3 bg-muted text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="lucide lucide-cog h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          {' '}
                          <circle cx="12" cy="12" r="8" /> <circle cx="12" cy="12" r="2" />{' '}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <div className="mt-1 text-sm text-muted-foreground">2-4 weeks</div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Example Extras (static for now, can be dynamic later) */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="mb-3 text-sm font-medium">What's included:</h4>
                      <ul className="space-y-2">
                        {service.keyFeatures?.map(
                          (keyFeature: { id: string; feature: string }, index: number) => (
                            <li
                              key={keyFeature.id || index}
                              className="flex items-center gap-3 text-sm"
                            >
                              ✅ {keyFeature.feature}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="mb-2 text-sm font-medium">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables?.map(
                          (deliverable: { id: string; feature: string }, index: number) => (
                            <span
                              key={index}
                              className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                              {deliverable.item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
