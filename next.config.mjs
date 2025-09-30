import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'res.cloudinary.com', 'library.shadcnblocks.com', 'deifkwefumgah.cloudfront.net'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
