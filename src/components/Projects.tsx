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
  const items = features
  return (
    <>
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
            {items.map((item) => (
              <div key={item.id} className="max-w-[320px] lg:max-w-[360px] p-0">
                <a href={item.href} className="group ">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-[32px] md:aspect-[5/4] lg:aspect-[16/9] border-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute backdrop-blur-custom inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary md:p-8">
                      <div className="mb-2 pt-4 text-lg font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">{item.description}</div>
                      <div className="flex items-center text-sm">
                        Read more{' '}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
