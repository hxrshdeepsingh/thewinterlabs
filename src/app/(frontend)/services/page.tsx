import { getPageSEO } from '@/lib/getPageSeo'
import ServiceHomepage from '@/components/service-homepage'

export default function page() {
  return (
    <>
      <ServiceHomepage />
    </>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/services', 'pages')
}
