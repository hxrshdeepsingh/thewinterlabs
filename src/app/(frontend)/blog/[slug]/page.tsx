import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default async function BlogPostPage() {
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
    <>
      <h1>ID: {post.id}</h1>
      <h2>Title: {post.title}</h2>
      <h2>Slug: {post.slug}</h2>
      <h2>Updated At: {post.updatedAt}</h2>
      <h2>Created At: {post.createdAt}</h2>
      <h2>Content: {post.content?.root?.children?.[0]?.children?.[0]?.text}</h2>

      {image?.url && (
        <Image
          src={`http://localhost:3000${image.url}`}
          alt={image.alt || post.title}
          width={500}
          height={300}
          className="rounded-md mt-4"
        />
      )}
    </>
  )
}
