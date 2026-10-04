'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function RetailSolutionClient() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition">
            ← Back to Solutions
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-balance text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              One system for every tenant, every incident
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Security operations built for malls, plazas, and retail chains
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Retail & Commercial Challenge
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: 'High Foot Traffic, No System',
                description: 'Hundreds or thousands of people move through a mall or plaza daily. Incidents happen and go unreported because there\'s no easy way to log them.',
              },
              {
                title: 'Multiple Tenants, No Shared View',
                description: 'Each store has its own staff and its own idea of what happened. Mall management finds out last, if at all.',
              },
              {
                title: 'Liability on Every Customer Incident',
                description: 'A slip, a theft, an altercation — if it isn\'t documented at the time with who responded and when, you have no defense when it\'s disputed later.',
              },
              {
                title: 'Shrinkage Without Visibility',
                description: 'Security teams patrol on a schedule nobody verifies, so coverage gaps are invisible until something goes missing.',
              },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-primary pl-6 py-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You Get
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: 'Incident Alerts',
                description: 'Any staff member can report an incident the moment it happens. Security, mall management, and backup are notified together.',
                features: ['Instant Reporting', 'Multi-layer Notification', 'Tenant Visibility'],
              },
              {
                title: 'Patrol Management',
                description: 'Verified rounds across every floor and wing, so coverage gaps show up immediately instead of after something\'s already gone.',
                features: ['Route Verification', 'Real-time Location', 'Check-in System'],
              },
              {
                title: 'Audit & Compliance',
                description: 'Every customer incident is timestamped and logged the moment it\'s reported — the record you need if it\'s ever disputed.',
                features: ['Complete Audit Trail', 'Liability Documentation', 'Compliance Reports'],
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="border border-muted rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((f) => (
                    <span key={f} className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-muted rounded-lg p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pricing scales with your property size and number of tenants. Talk to us and we&apos;ll scope it.
            </p>
            <Link
              href="/contact?solution=retail"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-muted">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to give every tenant one shared system?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See how Lemtik works for your property. Demo usually takes 15 minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?solution=retail"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Request a Demo
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition"
              >
                Explore the full platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
