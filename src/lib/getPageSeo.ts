import { getPayloadClient } from './payloadClient'

export async function getPageSEO(pageId: string, postType: string) {
  const payload = await getPayloadClient()

  const data = await payload.findByID({
    collection: postType,
    id: pageId,
  })

  return {
    title: data?.meta?.title || 'Default Title',
    description: data?.meta?.description || 'Default description for SEO.',
  }
}
