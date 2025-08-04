// lib/payload.ts
import payload from 'payload'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config() // Load env vars

let isInitialized = false

export const initPayload = async () => {
  if (!isInitialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: true,
      config: path.resolve(process.cwd(), '../payload.config.ts'), // adjust if it's in a subfolder
    })
    isInitialized = true
  }

  return payload
}
