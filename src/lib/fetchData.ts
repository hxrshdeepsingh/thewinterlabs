// lib/payload.ts
import path from 'path'
import payload from 'payload'

let isInitialized = false

export const getPayloadClient = async () => {
  if (!isInitialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: true,
      config: path.resolve(process.cwd(), '../payload.config.ts'),
    })
    isInitialized = true
  }

  return payload
}
