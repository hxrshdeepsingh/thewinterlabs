// app/projects/[slug]/page.tsx
import Image from 'next/image'
import RenderEditor from '@/components/renderEditor'
import { getPayloadClient } from '@/lib/payloadClient'

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadClient()

  const res = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = res.docs[0]

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project does not exist.',
    }
  }

  return {
    title: project.meta.title || project.title,
    description: project.meta.description || project.description || '',
  }
}

// Single Project Page
export default async function SinglePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadClient()

  const res = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = res.docs[0]

  if (!project) return <p className="text-center mt-20">Project not found</p>

  return (
    <div className="bg-[#f9f9f9] text-black min-h-screen px-6 pt-[150px] pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-center mb-12">
          {project.title}
        </h1>

        {/* Featured Image */}
        {project.featuredImage?.url && (
          <div className="mb-16 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${project.featuredImage.url}`}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Technologies Used */}
        {project.technologiesUsed?.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologiesUsed.map((tech, i) => (
                <li key={i} className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                  {tech.technology}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Meta Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg mb-20">
          <div className="space-y-4">
            <p>
              <strong>Client Name:</strong> {project.clientName}
            </p>
            <p>
              <strong>Project Name:</strong> {project.projectName}
            </p>
            <p>
              <strong>Launch Date:</strong> {project.projectDate?.slice(0, 10)}
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong>Duration:</strong> {project.projectDuration}
            </p>
            <p>
              <strong>Location:</strong> {project.location}
            </p>
            {project.projectURL && (
              <p>
                <strong>Live Link:</strong>{' '}
                <a
                  href={project.projectURL}
                  className="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                >
                  {project.projectURL}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Services */}
        {project.servicesProvided?.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              {project.servicesProvided.map((s, i) => (
                <li key={i}>{s.service}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mb-16 bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Client Testimonial</h2>
            <p className="italic text-gray-700">“{project.testimonial}”</p>
          </div>
        )}

        {/* Project Content */}
        {project.content && (
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
            <RenderEditor content={project.content} />
          </div>
        )}
      </div>
    </div>
  )
}
