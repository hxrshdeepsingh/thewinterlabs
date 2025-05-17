import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// ✅ No need for custom `Props` interface, just destructure `params`
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  if (!docs || docs.length === 0) return notFound()

  const post = docs[0]
  const image = post.featuredImage

  return (
    <article className="p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">Slug: {post.slug}</p>

      {post.content?.root?.children?.[0]?.children?.[0]?.text && (
        <p className="mb-4">{post.content.root.children[0].children[0].text}</p>
      )}

      {image?.url && (
        <Image
          src={`http://localhost:3000${image.url}`}
          alt={image.alt || post.title}
          width={800}
          height={400}
          className="rounded-md"
        />
      )}
    </article>
  )
}
