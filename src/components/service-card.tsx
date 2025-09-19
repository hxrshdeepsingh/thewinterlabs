import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  iconUrl: string
  slug: string
  technologiesUsed?: { technology: string }[]
}

export default function ServiceCard({
  title,
  description,
  iconUrl,
  slug,
  technologiesUsed = [],
}: ServiceCardProps) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-center mb-4">
        {iconUrl && <Image src={iconUrl} alt={title} width={50} height={50} className="mr-4" />}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>

      {technologiesUsed.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {technologiesUsed.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {tech.technology}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/services/${slug}`}
        className="inline-block mt-4 text-blue-600 font-medium hover:underline"
      >
        Learn More →
      </Link>
    </div>
  )
}