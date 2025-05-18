import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'], // 👈 add this line
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
