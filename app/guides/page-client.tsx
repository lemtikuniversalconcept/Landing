'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const guides = [
  {
    title: 'Estate Security Audit Checklist',
    desc: '26 checks across access control, patrol coverage, incident reporting, communication, and records.',
    href: '/guides/estate-security-audit-checklist',
  },
]

export function GuidesPageClient() {
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
            Guides & Checklists
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Free, practical resources for security operations teams
          </motion.p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl space-y-4">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="block group">
              <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <div>
                  <h2 className="font-semibold group-hover:text-primary transition-colors mb-1">{guide.title}</h2>
                  <p className="text-sm text-muted-foreground">{guide.desc}</p>
                </div>
                <ArrowRight aria-hidden="true" className="h-5 w-5 text-primary shrink-0 transform group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
