import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteUrl, siteName } from '@/lib/seo'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const articlesDir = path.join(process.cwd(), 'articles')
  const files = fs.existsSync(articlesDir)
    ? fs.readdirSync(articlesDir).filter((file) => file.endsWith('.mdx'))
    : []

  const items = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8')
      const { data } = matter(content)
      return {
        slug,
        title: String(data.title ?? slug),
        excerpt: String(data.excerpt ?? ''),
        date: new Date(data.date ?? Date.now()),
      }
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  const itemsXml = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${siteUrl}/newsroom/${item.slug}</link>
      <guid isPermaLink="true">${siteUrl}/newsroom/${item.slug}</guid>
      <description>${escapeXml(item.excerpt)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
    </item>`,
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteName)} Newsroom</title>
    <link>${siteUrl}/newsroom</link>
    <description>Product updates, guides, and industry research from ${escapeXml(siteName)}.</description>
    <language>en</language>${itemsXml}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
