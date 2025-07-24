import { Projects } from '@/components/Projects'

interface Project {
  id: string
  title: string
  description: string
  featuredImage?: { url: string }
  slug: string
}

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: 'no-store',
  })
  const data = await res.json()

  const projectsData: Project[] = data.docs.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.content?.root?.children?.[0]?.children?.[0]?.text || '',
    image: `${process.env.NEXT_PUBLIC_API_URL}${p.featuredImage?.url || ''}`,
    slug: p.slug,
  }))

  return (
    <>
      <div className="max-w-custom mx-auto">
        <Projects
          heading="Our Projects"
          description="Take a look at some of the work we've done for amazing clients."
          linkUrl="/contact"
          linkText="Get in Touch"
          features={projectsData}
        />
      </div>
    </>
  )
}
