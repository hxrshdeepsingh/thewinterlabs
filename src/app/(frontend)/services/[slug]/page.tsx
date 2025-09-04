import Image from 'next/image'
import RenderEditor from '@/components/renderEditor'
import { getPayloadClient } from '@/lib/payloadClient'

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadClient()

  const res = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const service = res.docs[0]

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'This service does not exist.',
    }
  }

  return {
    title: service.title,
    description: service.shortDescription || '',
  }
}

// Single Service Page
export default async function SingleService({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadClient()

  const res = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const service = res.docs[0]

  if (!service) return <p className="text-center mt-20">Service not found</p>

  return (
    <div className="bg-[#f9f9f9] text-black min-h-screen px-6 pt-[150px] pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-center mb-12">
          {service.title}
        </h1>

        {/* Icon / Feature Image */}
        {service.icon?.url && (
          <div className="mb-8 flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${service.icon.url}`}
              alt={service.title}
              width={80}
              height={80}
            />
          </div>
        )}

        {service.featureImage?.url && (
          <div className="mb-16 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${service.featureImage.url}`}
              alt={service.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Short Description */}
        <p className="text-lg text-muted-foreground mb-8">{service.shortDescription}</p>

        {/* Key Features */}
        {service.keyFeatures?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.keyFeatures.map((f, i) => (
                <li key={i}>{f.feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        {service.technologiesUsed?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <ul className="flex flex-wrap gap-3">
              {service.technologiesUsed.map((tech, i) => (
                <li key={i} className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                  {tech.technology}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deliverables */}
        {service.deliverables?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.deliverables.map((d, i) => (
                <li key={i}>{d.item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Estimated Timeline */}
        {service.estimatedTimeline && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Estimated Timeline</h2>
            <p>{service.estimatedTimeline}</p>
          </div>
        )}

        {/* Case Studies */}
        {service.caseStudies?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Related Case Studies</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.caseStudies.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.link}
                    target="_blank"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Description */}
        {service.fullDescription && (
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <RenderEditor content={service.fullDescription} />
          </div>
        )}
      </div>
    </div>
  )
}
