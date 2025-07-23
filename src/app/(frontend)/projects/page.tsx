import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Projects } from '@/components/Projects'

export default async function Project() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home">
      <div className="max-w-custom mx-auto">
        <Projects />
      </div>
    </div>
  )
}
