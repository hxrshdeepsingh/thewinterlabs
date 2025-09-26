import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { GithubLogo } from './icons'
import Link from 'next/link'

export default function ProjectCard({ title, slug, description, image, liveUrl, projectURL, technologiesUsed }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <Link href={`/projects/${slug}`}>
        <div className="relative h-64 overflow-hidden bg-accent">
          <Image src={image} alt={title} className="object-cover transition-transform duration-300 group-hover:scale-105" fill />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:underline">{title}</h3>
        </Link>

        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        {/* <div className="flex flex-wrap gap-2 mb-6">
          {technologiesUsed.map((tech, index) => (
            <Badge key={index} variant="secondary" className="rounded-full">
              {tech.technology}
            </Badge>
          ))}
        </div> */}

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <Link href={`/projects/${liveUrl}`}>
                <ExternalLink className="mr-1 h-4 w-4" />
                Learn More
              </Link>
            </Button>
          )}
          {projectURL && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <Link href={projectURL} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                Live Link
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
