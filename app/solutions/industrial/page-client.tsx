'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function IndustrialSolutionClient() {
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
              Coverage for every acre of the floor
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Security operations for factories, plants, and warehouses
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
            The Industrial & Manufacturing Challenge
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: 'Too Much Ground to Cover Manually',
                description: 'A warehouse or plant floor spans acres. Nobody can verify a patrol actually happened without a system that proves it.',
              },
              {
                title: 'Shift Handovers Lose Information',
                description: 'What the outgoing security shift knew rarely makes it cleanly to the incoming one. Verbal handover isn\'t a record.',
              },
              {
                title: 'Restricted-Zone Access Goes Unmonitored',
                description: 'Hazardous areas, equipment rooms, and loading docks need controlled access — but most sites only find out about a breach after the fact.',
              },
              {
                title: 'Safety and Security Incidents Both Need Fast Response',
                description: 'An unsafe condition and a security breach both demand immediate, documented response. Most sites have no single way to route either.',
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
                title: 'Patrol Management',
                description: 'GPS-verified rounds across the full floor plan. A skipped zone or missed checkpoint is visible the moment it happens.',
                features: ['Route Verification', 'Missed-Patrol Alerts', 'Real-time Location'],
              },
              {
                title: 'Incident Alerts',
                description: 'Safety and security incidents both route to the right responder immediately, with a clean handover between shifts built in.',
                features: ['Shift Handover Log', 'Instant Dispatch', 'Multi-layer Notification'],
              },
              {
                title: 'Audit & Compliance',
                description: 'Every patrol, access event, and incident logged automatically — the record you need for a safety audit or an insurance claim.',
                features: ['Complete Audit Trail', 'Compliance Reports', 'Legal Documentation'],
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
              Pricing scales with your site footprint and headcount. Talk to us and we&apos;ll scope it.
            </p>
            <Link
              href="/contact?solution=industrial"
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
            Ready to prove every patrol actually happened?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See how Lemtik works across your site. Demo usually takes 15 minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?solution=industrial"
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
