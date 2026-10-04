import type { MetadataRoute } from 'next'
import { siteName } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: 'Lemtik',
    description: "Africa's first civilian-grade command and control platform for security operations.",
    start_url: '/',
    display: 'standalone',
    background_color: '#080d1a',
    theme_color: '#080d1a',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
