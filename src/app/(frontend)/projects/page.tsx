import { Badge } from '@/components/ui/badge'
import ProjectCard from '@/components/project-card'
import { getPayloadClient } from '../../../lib/fetchData'

export default async function Projects() {
  const payload = await getPayloadClient()

  const posts = await payload.find({
    collection: 'posts',
  })
  console.log(posts)
  return (
    <section id="projects" className="relative pt-32 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="My Project"
            description="This is a cool project."
            image="/project.jpg"
            technologies={['React', 'Next.js', 'Tailwind']}
            liveUrl="https://example.com"
            githubUrl="https://github.com/user/project"
          />
        </div>
      </div>
    </section>
  )
}
