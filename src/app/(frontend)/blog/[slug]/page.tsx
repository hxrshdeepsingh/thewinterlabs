import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

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

  return (
    <article>
      <h1>{post.title}</h1>
    </article>
  )
}
