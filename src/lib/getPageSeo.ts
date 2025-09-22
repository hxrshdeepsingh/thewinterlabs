import { getPayloadClient } from './payloadClient'

export async function getPageSEO(slug, postType) {
  const payload = await getPayloadClient()

  const data = await payload.find({
    collection: postType,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = data?.docs?.[0]
  const pageCanonical = `https://thewinterlabs.in${page.slug}`
  console.log(pageCanonical)

  return {
    title: page?.meta?.title || page?.title || 'Default Title',
    description: page?.meta?.description || 'Default description for SEO.',
    alternates: {
      canonical: pageCanonical,
    },
  }
}
