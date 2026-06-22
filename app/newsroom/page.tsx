'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SubscribeForm } from '@/components/subscribe-form'

export default function NewsroomPage() {
  const articles = [
    {
      slug: 'intelligence-engine-launch',
      title: 'Intelligence Engine Now Live: 2000+ OSINT Sources in One Dashboard',
      date: 'January 15, 2026',
      category: 'Product Update',
      excerpt: 'Our AI-powered intelligence aggregation system is now available to all Lemtik deployments. Automatically correlates security data from 2000+ sources in real-time.',
      image: '/images/lagos-skyline.png'
    },
    {
      slug: 'pilot-launch-announcement',
      title: 'Lemtik Pilot Launches in Three Lagos Estates',
      date: 'January 10, 2026',
      category: 'Milestone',
      excerpt: 'We\'re thrilled to announce the launch of our pilot program with three major residential estates in Lagos. Response times already down 62% in first week.',
      image: '/images/lagos-estate.png'
    },
    {
      slug: 'african-security-tech-movement',
      title: 'Why Africa Needs African-Built Security Technology',
      date: 'January 8, 2026',
      category: 'Thought Leadership',
      excerpt: 'The security infrastructure that works in the US doesn\'t work in Lagos. Here\'s why African cities need technology built by Africans, for African realities.',
      image: '/images/lagos-corporate.png'
    },
    {
      slug: 'autonomous-response-beta',
      title: 'Autonomous Response System Now in Beta',
      date: 'January 1, 2026',
      category: 'Product Update',
      excerpt: 'After months of testing, our autonomous infrastructure response system is ready for beta users. No more manual incident coordination—let the system orchestrate response.',
      image: '/images/lagos-government.png'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Product Update':
        return 'text-primary'
      case 'Milestone':
        return 'text-secondary'
      case 'Thought Leadership':
        return 'text-primary'
      case 'Press':
        return 'text-secondary'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Newsroom
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl"
        >
          Product updates, milestone announcements, and insights on security operations in African cities.
        </motion.p>
      </section>

      {/* Subscribe Section */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border">
        <motion.div
          {...fadeInUp}
          className="p-8 border border-border rounded-lg bg-muted/30"
        >
          <h2 className="text-xl font-bold mb-4">Subscribe for Updates</h2>
          <p className="text-muted-foreground mb-6">
            Get notified when we publish new articles, product updates, and announcements.
          </p>
          <SubscribeForm />
          <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-16"
        >
          Latest Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/newsroom/${article.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="text-primary font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                    Read More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
