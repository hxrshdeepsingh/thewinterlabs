import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  image: string
}

interface ProjectsProps {
  heading: string
  description: string
  linkUrl: string
  linkText: string
  features: Project[]
}

export const Projects = ({ heading, description, linkUrl, linkText, features }: ProjectsProps) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">{heading}</h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <a
              href={`/projects/${feature.slug}`}
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-border"
            >
              <div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                  width={500}
                  height={400}
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
