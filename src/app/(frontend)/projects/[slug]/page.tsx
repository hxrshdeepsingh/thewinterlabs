import Image from 'next/image'
import RenderEditor from '../../../../components/RenderEditor'

interface Props {
  params: { slug: string }
}

interface Project {
  title: string
  featuredImage?: { url: string }
  content?: any
  clientName?: string
  projectName?: string
  projectDate?: string
  projectDuration?: string
  projectURL?: string
  location?: string
  testimonial?: string
  servicesProvided?: { service: string }[]
  technologiesUsed?: { technology: string }[]
  projectGallery?: { image: { url: string }; caption?: string }[]
}

export default async function SinglePage({ params }: Props) {
  const { slug } = params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?where[slug][equals]=${slug}`,
    {
      cache: 'no-store',
    },
  )

  const json = await res.json()
  const project: Project = json.docs[0]

  if (!project) return <div>Project not found.</div>

  return (
    <div className="max-w-custom mx-auto pt-[150px] px-4">
      <h1 className="text-5xl font-semibold text-center">{project.title}</h1>

      {/* Featured Image */}
      {project.featuredImage?.url && (
        <Image
          className="pt-20 rounded-xl"
          width={1024}
          height={500}
          alt={project.title}
          src={`${process.env.NEXT_PUBLIC_API_URL}${project.featuredImage.url}`}
        />
      )}

      {/* Project Meta Info */}
      <div className="pt-10 max-w-[700px] mx-auto text-center text-lg leading-relaxed space-y-3">
        <p>
          <strong>Client Name:</strong> {project.clientName}
        </p>
        <p>
          <strong>Project Name:</strong> {project.projectName}
        </p>
        <p>
          <strong>Launch Date:</strong> {project.projectDate?.slice(0, 10)}
        </p>
        <p>
          <strong>Duration:</strong> {project.projectDuration}
        </p>
        <p>
          <strong>Location:</strong> {project.location}
        </p>
        {project.projectURL && (
          <p>
            <strong>Live Link:</strong>{' '}
            <a className="text-blue-600 underline" href={project.projectURL} target="_blank">
              {project.projectURL}
            </a>
          </p>
        )}
      </div>

      {/* Services */}
      {project.servicesProvided?.length > 0 && (
        <div className="pt-10 max-w-[700px] mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Services Provided</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.servicesProvided.map((s, i) => (
              <li key={i}>{s.service}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {project.technologiesUsed?.length > 0 && (
        <div className="pt-10 max-w-[700px] mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.technologiesUsed.map((tech, i) => (
              <li key={i}>{tech.technology}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <div className="pt-10 max-w-[700px] mx-auto italic text-gray-700 border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold mb-2">Client Testimonial</h2>“{project.testimonial}”
        </div>
      )}

      {/* Project Gallery */}
      {project.projectGallery?.length > 0 && (
        <div className="pt-10 max-w-[900px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.projectGallery.map((item, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
                  alt={item.caption || `Gallery image ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                {item.caption && (
                  <p className="text-sm text-center py-2 bg-gray-100">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      {project.content && (
        <div className="pt-10 max-w-[700px] mx-auto prose prose-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <div>
            <RenderEditor content={project.content} />
          </div>
        </div>
      )}
    </div>
  )
}
