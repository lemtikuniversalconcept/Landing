'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function CorporateSolutionClient() {
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
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/lemtik-corporate-security-operations.png"
          alt="Corporate security operations"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Security operations your board can actually see
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Enterprise-grade visibility and compliance
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
            The Corporate Challenge
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: 'Black Box Security',
                description: 'Your CSO tells you "everything is fine." But what\'s actually happening? You don\'t know. Your board asks questions you can\'t answer.',
              },
              {
                title: 'Fragmented Reporting',
                description: 'Incident data lives in spreadsheets, emails, and guard logs. No unified view. No real-time dashboard. Monthly reports are out of date.',
              },
              {
                title: 'Compliance Liability',
                description: 'Regulators and auditors want proof of incident response. You have stories, not data. That\'s a risk.',
              },
              {
                title: 'Response Inconsistency',
                description: 'Different locations, different procedures. No standard playbook. When something serious happens, you don\'t have a coordinated response.',
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
                title: 'Real-Time Command Center',
                description: 'Executive dashboard. Live view of all incidents across locations. Alert escalation. Response status in seconds.',
                features: ['Live Dashboard', 'Multi-Location View', 'Executive Reporting'],
              },
              {
                title: 'Intelligent Incident Management',
                description: 'Every incident categorized, logged, and tracked. Automated workflows. Compliance-ready documentation.',
                features: ['Automated Logging', 'Workflow Automation', 'Compliance Export'],
              },
              {
                title: 'Autonomous Response',
                description: 'Critical incidents trigger automated responses. Infrastructure changes, evacuation alerts, emergency services coordination.',
                features: ['Automated Escalation', 'Infrastructure Control', 'Service Integration'],
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
            <h2 className="text-3xl font-bold mb-4">Custom Enterprise Pricing</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enterprise deployments require custom configuration. Let\'s talk about your specific needs and scale.
            </p>
            <Link
              href="/contact?solution=corporate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Talk to Our Team
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
            Transform your security operations
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Schedule a technical walkthrough with our enterprise team. See how Lemtik works for multi-location corporate deployments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?solution=corporate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Book a Demo (Corporate)
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
