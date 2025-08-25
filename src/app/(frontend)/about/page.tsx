import { About } from '@/components/about-section'
import React from 'react'
import { getPageSEO } from '@/lib/getPageSeo'

function page() {
  return (
    <>
      <About />
    </>
  )
}

export default page

export async function generateMetadata() {
  return await getPageSEO(2, 'pages');
}