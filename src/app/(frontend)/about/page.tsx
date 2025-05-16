import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function Page() {
  const payload = await getPayload({ config })

  const { docs: pages } = await payload.find({
    collection: 'pages',
    limit: 10,
  })

  return (
    <ul>
      {pages.map((page) => (
        <li key={page.slug}>{page.title}</li>
      ))}
    </ul>
  )
}
