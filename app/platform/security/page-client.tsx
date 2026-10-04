'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, ShieldCheck, FileClock, Database, KeyRound, Server } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function SecurityPageClient() {
  const pillars = [
    {
      icon: Lock,
      title: 'Encryption',
      desc: 'End-to-end encryption for all data in transit and at rest.',
    },
    {
      icon: KeyRound,
      title: 'Authentication',
      desc: 'Multi-factor authentication with role-based access control, so what a user can see and do matches their actual role.',
    },
    {
      icon: FileClock,
      title: 'Audit Logs',
      desc: 'A complete, append-only audit trail of every action and decision — the log itself can\'t be edited or deleted, even by an administrator.',
    },
    {
      icon: Database,
      title: 'Data Isolation',
      desc: 'Each organisation\'s data is isolated and encrypted separately — one customer\'s data is never visible to another\'s.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure APIs',
      desc: 'OAuth 2.0 and managed API key issuance for every internal and external integration.',
    },
    {
      icon: Server,
      title: 'High Availability',
      desc: 'Redundant infrastructure with automatic failover, so a single component going down doesn\'t take the platform with it.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Security & Compliance
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Operational data is sensitive data. We treat it that way.
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6"
              >
                <pillar.icon aria-hidden="true" className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-6 py-20 border-b border-border bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Compliance</h2>
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Nigeria Data Protection Act (NDPA)</h3>
              <p className="text-sm text-muted-foreground">
                As a platform operating on Nigerian data, NDPA alignment is the primary compliance
                framework we design against — not an afterthought borrowed from a US or EU checklist.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Broader Compliance Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                GDPR, CCPA, and other international frameworks sit on our roadmap as the platform
                expands beyond Nigeria — we name this as a roadmap, not a certification we already hold.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Independent Review</h3>
              <p className="text-sm text-muted-foreground">
                Third-party security assessments and penetration testing are part of our ongoing
                security practice as the platform matures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Have a security questionnaire to run through?</h2>
          <p className="text-muted-foreground mb-8">
            We&apos;re happy to walk your security or compliance team through the platform directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Talk to Our Team
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition"
            >
              Back to Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
