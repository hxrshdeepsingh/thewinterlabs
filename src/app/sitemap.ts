import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getServerSideURL } from '@/lib/getURL'
import type { Post, Project } from '@/payload-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const url = getServerSideURL()

  // Fetch posts
  const posts = await payload.find<Post>({
    collection: 'posts',
    limit: 1000,
    where: {},
  })

  // Fetch projects
  const projects = await payload.find<Project>({
    collection: 'projects',
    limit: 1000,
    where: {},
  })

  // Static paths
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${url}/`, lastModified: new Date() },
    { url: `${url}/about`, lastModified: new Date() },
    { url: `${url}/contact`, lastModified: new Date() },
  ]

  // Dynamic posts
  const postPages: MetadataRoute.Sitemap = posts.docs.map((post) => ({
    url: `${url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }))

  // Dynamic projects
  const projectPages: MetadataRoute.Sitemap = projects.docs.map((project) => ({
    url: `${url}/projects/${project.slug}`,
    lastModified: new Date(project.updatedAt),
  }))

  return [...staticPages, ...postPages, ...projectPages]
}
