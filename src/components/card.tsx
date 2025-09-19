import Image from 'next/image'
import Link from 'next/link'
import { FollowerPointerCard } from './ui/following-pointer'

const TitleComponent = ({ title, avatar }: { title: string; avatar?: string }) => (
  <div className="flex space-x-2 items-center">
    {avatar && (
      <Image
        src={avatar}
        width={20}
        height={20}
        alt={title}
        className="rounded-full border-2 border-white"
      />
    )}
    <p>{title}</p>
  </div>
)

export function ServiceCard({
  title,
  description,
  iconUrl,
  slug,
  featureImage,
  technologiesUsed = [],
}: ServiceCardProps) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard title={<TitleComponent title={title} avatar={iconUrl} />}>
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="relative w-full h-48 bg-gray-100 rounded-t-2xl overflow-hidden">
            <Image
              src={featureImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-95 transition-transform duration-200"
            />
          </div>

          <div className="p-4">
            <h2 className="font-bold my-2 text-lg text-zinc-700">{title}</h2>
            <p className="font-normal my-2 text-sm text-zinc-500">{description}</p>

            {technologiesUsed.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {technologiesUsed.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {tech.technology}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-row justify-between items-center mt-4">
              <Link
                href={`/services/${slug}`}
                className="relative z-10 px-4 py-2 bg-black text-white font-bold rounded-xl text-xs"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  )
}
