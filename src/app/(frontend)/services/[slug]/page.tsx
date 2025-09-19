import React from 'react'
import Image from 'next/image'
import { cache } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, CheckCircle, ExternalLink, Zap, Target, Users } from 'lucide-react'
import { getPayloadClient } from '@/lib/payloadClient'
import RenderEditor from '@/components/renderEditor'

export const revalidate = 86400

const getService = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return res.docs[0] || null
})

export async function generateMetadata(props: { params: { slug: string } }) {
  const { params } = await props
  const service = await getService(params.slug)

  if (!service) return { title: 'Service Not Found', description: 'This service does not exist.' }

  return { title: service.title, description: service.shortDescription || '' }
}

interface SingleServiceProps {
  params: { slug: string }
}

export default async function SingleService(props: SingleServiceProps) {
  const { params } = props
  const service = await getService(params.slug)

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Service not found</p>
      </div>
    )

  return (
    <div className="min-h-screen mx-auto max-w-screen-lg">
      <div className="relative overflow-hidden mt-4">
        <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
          {service.icon?.url && (
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-border/50">
                <Image
                  src={service.icon.url}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{service.title}</h1>
          {service.shortDescription && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {service.shortDescription}
            </p>
          )}
        </div>
      </div>

      {service.featureImage && (
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
            <Image
              src={service.featureImage}
              alt={service.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {service.keyFeatures?.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">What We Deliver</h2>
              </div>
              <div className="grid gap-4">
                {service.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature.feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.deliverables?.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Project Deliverables</h2>
              </div>
              <div className="space-y-3">
                {service.deliverables.map((d, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{d.item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.caseStudies?.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Success Stories</h2>
              </div>
              <div className="grid gap-4">
                {service.caseStudies.map((c, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50"
                  >
                    <CardContent className="p-6">
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group-hover:text-primary transition-colors"
                      >
                        <span className="font-medium text-foreground">{c.title}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {service.fullDescription && (
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Overview</h2>
              <div className="prose prose-lg max-w-none">
                <RenderEditor content={service.fullDescription} />
              </div>
            </section>
          )}
        </div>

        <div className="space-y-8">
          {service.estimatedTimeline && (
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Timeline</h3>
                </div>
                <p className="text-muted-foreground">{service.estimatedTimeline}</p>
              </CardContent>
            </Card>
          )}

          {service.technologiesUsed?.length > 0 && (
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologiesUsed.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech.technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
