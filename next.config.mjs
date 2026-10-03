import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lemtik.com.ng' }],
        destination: 'https://lemtik.com.ng/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
