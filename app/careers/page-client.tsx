'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CareersPageClient() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Careers at Lemtik
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We&apos;re a 6-person team at pre-seed, building in the open
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              We don&apos;t have specific open roles posted right now — we&apos;re pre-seed,
              pre-revenue, and still a small team. That said, we&apos;re always open to hearing
              from people who want to work on security operations technology in Africa,
              especially as we move past our first pilots.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If that&apos;s you, send us a note about what you&apos;d want to work on and why
              — we read everything, even when we don&apos;t have a role to offer yet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
