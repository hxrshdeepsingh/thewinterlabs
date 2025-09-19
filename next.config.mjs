import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'res.cloudinary.com'], // 👈 add this line
  },
  typescript: {
    ignoreBuildErrors: true, // 👈 this disables type-checking during build
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
