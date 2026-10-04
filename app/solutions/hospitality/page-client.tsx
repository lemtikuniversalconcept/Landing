'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HospitalitySolutionClient() {
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
          src="/images/lemtik-hotel-security-management.png"
          alt="Hospitality security management"
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
              Protect guests without slowing down hospitality
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Security that works in the background
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
            The Hospitality Challenge
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: 'Guest Experience vs. Security',
                description: 'Security cameras and procedures can feel intrusive. Guests want to feel safe, not surveilled. It\'s a balance.',
              },
              {
                title: 'Silent Threats',
                description: 'Incidents (theft, disturbances, unauthorized access) often happen unnoticed. By the time you know, damage is done.',
              },
              {
                title: 'Response Coordination',
                description: 'Security team, front desk, management—everyone needs to know what\'s happening without creating confusion.',
              },
              {
                title: 'Liability & Documentation',
                description: 'When something goes wrong, insurance companies ask questions. You need proof of incident reporting and action taken.',
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
                title: 'Guest-Friendly Alerts',
                description: 'Incidents are detected and reported to staff without alarming guests. Discreet, professional response.',
                features: ['Background Detection', 'Staff-Only Alerts', 'Incident Classification'],
              },
              {
                title: 'Incident Tracking',
                description: 'Every incident logged with timestamps and actions taken. Proof of response for insurance and audits.',
                features: ['Automatic Logging', 'Action Trails', 'Evidence Preservation'],
              },
              {
                title: 'Coordinated Response',
                description: 'Security, front desk, and management all see the same information. No miscommunication.',
                features: ['Real-Time Updates', 'Role-Based Access', 'Escalation Protocol'],
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
            <h2 className="text-3xl font-bold mb-4">Scalable for Your Property</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              From boutique hotels to large resorts, we scale with you. Usage-based pricing means you only pay for what you use.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              View Pricing Plans
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
            See how it works for your property
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We'll walk you through a live scenario. See how Lemtik keeps guests safe and staff informed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?solution=hospitality"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Book a Demo (Hospitality)
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
