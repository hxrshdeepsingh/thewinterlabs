import { Projects } from '@/components/Projects'
import { ArrowRight } from 'lucide-react'
import { fetchData } from '@/lib/fetchData'

export default async function ProjectsPage() {
  const data = await fetchData('/api/projects')

  const projectsData = data.docs.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.content?.root?.children?.[0]?.children?.[0]?.text || '',
    image: `${process.env.NEXT_PUBLIC_API_URL}${p.featuredImage?.url || ''}`,
    slug: p.slug,
  }))

  return (
    <>
      <section className="max-w-custom mx-auto pt-28">
        <div className="container flex flex-col gap-12">
          <div className="lg:max-w-sm">
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">Our Projects</h2>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Take a look at some of the work we've done for amazing clients.
            </p>
            <a
              href="/contact"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <Projects features={projectsData} />
        </div>
      </section>
    </>
  )
}
