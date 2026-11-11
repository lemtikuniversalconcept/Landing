import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { siteUrl } from '@/lib/seo'

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/platform', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/platform/intelligence', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/platform/dispatch', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/platform/autonomous', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/platform/integrations', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/platform/security', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/solutions/estates', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/hospitality', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/corporate', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/government', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/critical-infrastructure', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/retail', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/industrial', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/protected-movement', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/solutions/maritime', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/ai', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/mission', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/newsroom', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/guides', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/guides/estate-security-audit-checklist', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/glossary', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/why-switch-from-whatsapp', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/investors', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/careers', priority: 0.4, changeFrequency: 'monthly' as const },
  { path: '/status', priority: 0.3, changeFrequency: 'daily' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articlesDir = path.join(process.cwd(), 'articles')
  const articleSlugs = fs.existsSync(articlesDir)
    ? fs.readdirSync(articlesDir).filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''))
    : []

  const articleRoutes = articleSlugs.map((slug) => ({
    url: `${siteUrl}/newsroom/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...articleRoutes,
  ]
}
