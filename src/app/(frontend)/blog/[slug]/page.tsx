import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: Props) {
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
  console.log()
  return (
    <>
      <h1>id : {post.id}</h1>
      <h2>Title : {post.title}</h2>
      <h2>Slug : {post.slug}</h2>
      <h2>updatedAt : {post.updatedAt}</h2>
      <h2>createdAt : {post.createdAt}</h2>
      <h2>Content : {post.content.root.children[0].children[0].text}</h2>

      <Image
        src={`http://localhost:3000${image.url}`}
        alt={image.alt || post.title}
        width={500}
        height={300}
        className="rounded-md mt-4"
      />
    </>
  )
}
