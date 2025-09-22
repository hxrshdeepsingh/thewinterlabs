import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getServerSideURL } from '@/lib/getURL'
import type { Post, Project } from '@/payload-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const url = getServerSideURL()

  // Fetch projects
  const services = await payload.find<Service>({
    collection: 'services',
    limit: 1000,
    where: {},
  })

  // Static paths
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${url}/`, lastModified: new Date() },
    { url: `${url}/about`, lastModified: new Date() },
    { url: `${url}/contact`, lastModified: new Date() },
    { url: `${url}/services`, lastModified: new Date() },
  ]

  // Dynamic projects
  const servicePages: MetadataRoute.Sitemap = services.docs.map((service) => ({
    url: `${url}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt),
  }))

  return [...staticPages, ...servicePages]
}
