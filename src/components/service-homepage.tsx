import Link from 'next/link'
import { Radio, ArrowRight } from 'lucide-react'
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
    startingPrice: s.startingPrice,
    estimatedTimeline: s.estimatedTimeline,
  }))
}

export const revalidate = false

export default async function ServiceHomepage() {
  const servicesData = await getServices()
  return (
    <section className="py-20 px-4 m-0">
      <div className="container m-auto">
        <div className="mx-auto max-w-screen-lg space-y-16">
          <div className="space-y-4 text-center">
            <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-border bg-background text-foreground">
              Our Services
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">Comprehensive Digital Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">Transparent pricing for world-class digital solutions tailored to your specific business needs and growth objectives.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicesData.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border bg-background/80 hover:bg-background backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg p-3 bg-accent text-muted-foreground">
                        <Radio className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <div className="mt-1 text-sm text-muted-foreground">{service.estimatedTimeline}</div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 leading-relaxed text-muted-foreground">{service.description}</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="mb-3 text-sm font-medium">What's included:</h4>
                      <ul className="space-y-2">
                        {service.keyFeatures?.map((keyFeature: { id: string; feature: string }, index: number) => (
                          <li key={keyFeature.id || index} className="flex items-center gap-3 text-sm">
                            ✅ {keyFeature.feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="mb-2 text-sm font-medium">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables?.map((deliverable: { id; feature }, index) => (
                          <span key={index} className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
                            {deliverable.item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-border mt-8 border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-semibold">Starting at {service.startingPrice}</div>
                          <div className="text-muted-foreground text-xs">Custom quotes available</div>
                        </div>
                        <Link href={`/services/${service.slug}`}>
                          <button data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 transition-all group-hover:shadow-md">
                            Get Started
                            <ArrowRight />
                          </button>
                        </Link>
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
