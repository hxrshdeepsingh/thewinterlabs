import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function Page() {
  const payload = await getPayload({ config })

  const { docs: pages } = await payload.find({
    collection: 'posts',
    limit: 10,
  })

  return (
    <ul className="space-y-2">
      {pages.map((page) => (
        <li key={page.slug}>
          <Link href={`/blog/${page.slug}`}>
            <span className="text-blue-600 hover:underline">{page.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
