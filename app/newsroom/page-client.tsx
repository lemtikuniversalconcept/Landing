'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SubscribeForm } from '@/components/subscribe-form'

export function NewsroomPageClient() {
  const articles: {
    slug: string
    title: string
    date: string
    category: string
    excerpt: string
    image: string
  }[] = [
    {
      slug: 'state-of-security-operations-nigeria-2026',
      title: 'The State of Security Operations in Nigeria: 2026',
      date: 'October 2026',
      category: 'Industry Report',
      excerpt: 'A short look at the numbers behind Nigeria\'s private security sector — market size, who\'s doing the work, and the gap between the scale of the industry and the tools most of it still runs on.',
      image: '/images/lemtik-lagos-skyline-security-operations.png',
    },
    {
      slug: 'guide-choosing-security-software-nigeria',
      title: 'A Guide to Choosing Security Software in Nigeria',
      date: 'October 2026',
      category: 'Guide',
      excerpt: 'Most security software is built for a different market than the one you\'re buying for. Here\'s what to actually check before you sign anything.',
      image: '/images/lemtik-corporate-security-operations.png',
    },
    {
      slug: 'why-whatsapp-fails-incident-management',
      title: 'Why WhatsApp Groups Fail at Incident Management',
      date: 'October 2026',
      category: 'Thought Leadership',
      excerpt: 'WhatsApp is free, familiar, and already on every guard\'s phone — which is exactly why it became the default incident-management tool nobody chose on purpose.',
      image: '/images/lemtik-lagos-skyline-security-operations.png',
    },
    {
      slug: 'reduce-security-response-time-estates',
      title: 'How to Reduce Security Response Time in Estates',
      date: 'October 2026',
      category: 'Guide',
      excerpt: 'Most estates don\'t have a technology problem first — they have a coordination problem. Here\'s what actually moves response time, in order of impact.',
      image: '/images/lemtik-estate-security-management.png',
    },
    {
      slug: 'guard-patrol-tracking-practical-guide',
      title: 'Guard Patrol Tracking: A Practical Guide',
      date: 'October 2026',
      category: 'Guide',
      excerpt: 'There\'s real, active demand for "guard tour systems" in Nigeria right now — mostly sold as hardware wands. Here\'s what the category actually covers, and where the limits are.',
      image: '/images/lemtik-estate-security-management.png',
    },
    {
      slug: 'build-compliance-audit-trail-security-operations',
      title: 'How to Build a Compliance Audit Trail for Security Operations',
      date: 'October 2026',
      category: 'Guide',
      excerpt: 'An audit trail that can be edited after the fact isn\'t an audit trail — it\'s a document. Here\'s what an actually defensible one requires.',
      image: '/images/lemtik-corporate-security-operations.png',
    },
    {
      slug: 'what-is-security-command-centre',
      title: 'What Is a Security Command Centre?',
      date: 'October 2026',
      category: 'Guide',
      excerpt: 'The phrase gets used loosely. Here\'s what actually distinguishes a command centre from a dashboard, a CCTV wall, or a group chat.',
      image: '/images/lemtik-corporate-security-operations.png',
    },
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
      case 'Guide':
        return 'text-secondary'
      case 'Industry Report':
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
        <div className="flex items-center justify-between mb-16">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold"
          >
            Latest Articles
          </motion.h2>
          <a
            href="/newsroom/rss.xml"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            RSS Feed
          </a>
        </div>

        {articles.length === 0 && (
          <motion.div {...fadeInUp} className="rounded-lg border border-border bg-muted/30 p-12 text-center">
            <p className="text-muted-foreground">
              We&apos;re pre-pilot and building in the open. Nothing to report yet &mdash;
              subscribe above and we&apos;ll tell you the moment there is.
            </p>
          </motion.div>
        )}

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
