import React from 'react'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
// import config from '@/payload-config'
import config from '../../../payload.config'
import { Projects } from '../../../components/Projects'

export default async function Project() {
  const payload = await getPayload({ config })
  const user = await payload.auth({ headers: headers() })

  return (
    <div className="home">
      <div className="max-w-custom mx-auto">
        <Projects />
      </div>
    </div>
  )
}
