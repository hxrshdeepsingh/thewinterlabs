import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'
import { GithubLogo } from './icons'

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-accent">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            {liveUrl && (
              <Button variant="default" className="rounded-full" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" className="rounded-full shadow-none" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-1 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
