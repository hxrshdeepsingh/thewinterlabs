import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/project-card'
import { getPayloadClient } from '@/lib/payloadClient'
import { getPageSEO } from '@/lib/getPageSeo'

export const revalidate = 60 // ISR enabled

export default async function Projects() {
  const payload = await getPayloadClient()

  const [projectsRes] = await Promise.all([
    payload.find({ collection: 'projects' }),
    // you could also fetch SEO in parallel if it's payload-based
  ])

  const projectsData = projectsRes.docs.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.content?.root?.children?.[0]?.children?.[0]?.text || '',
    image: `${process.env.NEXT_PUBLIC_API_URL}${p.featuredImage?.url || ''}`,
    slug: p.slug,
    projectURL: p.projectURL,
    technologiesUsed: p.technologiesUsed,
  }))

  return (
    <section id="projects" className="relative pt-32 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Projects</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((data) => (
            <ProjectCard
              key={data.id}
              slug={data.slug}
              title={data.title}
              description={data.description.split(' ').slice(0, 20).join(' ') + '...'}
              image={data.image}
              liveUrl={data.slug}
              projectURL={data.projectURL}
              technologiesUsed={data.technologiesUsed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO(4, 'pages')
}
