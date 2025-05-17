import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // 👈 add this line
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
