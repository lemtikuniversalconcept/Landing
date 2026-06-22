import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { SubscribeForm } from '@/components/subscribe-form'

interface ArticleProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'articles')
  if (!fs.existsSync(articlesDir)) {
    return []
  }
  const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.mdx'))
  
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, '')
  }))
}

export async function generateMetadata({ params }: ArticleProps) {
  const { slug } = await params
  const articlesDir = path.join(process.cwd(), 'articles')
  const filePath = path.join(articlesDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return { title: 'Not Found' }
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(fileContent)

  return {
    title: data.title,
    description: data.excerpt
  }
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params
  const articlesDir = path.join(process.cwd(), 'articles')
  const filePath = path.join(articlesDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link href="/newsroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Newsroom
          </Link>
        </div>
      </nav>

      {/* Article Hero */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-semibold text-primary mb-4">
            {data.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
            {data.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{data.date}</span>
            <span>•</span>
            <span>By {data.author}</span>
          </div>
        </div>

        {data.image && (
          <div className="relative w-full h-96 rounded-lg overflow-hidden bg-muted mb-12">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <ArticleContent content={content} slug={slug} title={data.title} />

        {/* Social Share */}
        <div className="border-t border-b border-border py-8 my-12">
          <p className="text-sm text-muted-foreground mb-4">Share this article</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=https://lemtik.com.ng/newsroom/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://lemtik.com.ng/newsroom/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="p-8 border border-border rounded-lg bg-muted/30">
          <h3 className="text-xl font-bold mb-4">Subscribe for Updates</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when we publish new articles, product updates, and announcements.
          </p>
          <SubscribeForm />
        </div>
      </article>
    </div>
  )
}

function ArticleContent({ content, slug, title }: { content: string; slug: string; title: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-article">
      <style>{`
        .prose-article h2 {
          font-size: 1.875rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--foreground);
        }
        .prose-article h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }
        .prose-article p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
          color: var(--muted-foreground);
        }
        .prose-article ul,
        .prose-article ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
          color: var(--muted-foreground);
        }
        .prose-article li {
          margin-bottom: 0.5rem;
        }
        .prose-article strong {
          color: var(--foreground);
          font-weight: 600;
        }
        .prose-article a {
          color: var(--primary);
          text-decoration: underline;
        }
        .prose-article a:hover {
          opacity: 0.8;
        }
        .prose-article hr {
          border-color: var(--border);
          margin: 2rem 0;
        }
      `}</style>
      <MDXRemote source={content} />
    </div>
  )
}
