'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function PlatformPage() {
  const [expandedService, setExpandedService] = useState<string | null>('intelligence')

  const services = [
    {
      id: 'intelligence',
      title: 'Intelligence Engine',
      shortDesc: 'AI-powered OSINT collection and threat scoring',
      fullDesc: 'Continuously monitors 2000+ open and darknet sources. Classifies threats by region, institution type, and urgency. Every incident alert is scored across 15 risk dimensions.',
      whyMatters: 'Reduces false alarms by 73%. Gives your team the context they need before an officer arrives.',
      link: '/platform/intelligence',
      stats: ['2000+ sources', 'Real-time scoring', 'Regional classification']
    },
    {
      id: 'inventory',
      title: 'Inventory Service',
      shortDesc: 'Real-time asset and personnel tracking',
      fullDesc: 'Maintains live inventory of all responder assets—vehicles, equipment, personnel, and their locations. Updates every 30 seconds.',
      whyMatters: 'Ensures dispatch always knows who is available and where. Prevents double-deployment and resource conflicts.',
      link: '#',
      stats: ['30-second updates', 'Full asset tracking', 'Multi-depot support']
    },
    {
      id: 'routes',
      title: 'Route Calculator',
      shortDesc: 'Intelligent routing with real-time conditions',
      fullDesc: 'Calculates optimal routes considering traffic, road closures, incident zones, and response-time targets. Reoptimizes in real-time.',
      whyMatters: 'Saves 5-8 minutes on average response time. Reduces fuel costs and vehicle wear.',
      link: '#',
      stats: ['Real-time optimization', 'Multi-route comparison', 'Live traffic integration']
    },
    {
      id: 'proximity',
      title: 'Proximity Finder',
      shortDesc: 'Instant nearest-responder identification',
      fullDesc: 'Identifies the nearest qualified responder(s) within configurable zones. Accounts for current assignments and skill tags.',
      whyMatters: 'Dispatch decisions are made in under 2 seconds. No manual searching through spreadsheets.',
      link: '#',
      stats: ['Sub-2-second lookup', 'Skill-aware matching', 'Zone-based filtering']
    },
    {
      id: 'autonomous',
      title: 'Autonomous Control',
      shortDesc: 'Infrastructure automation for emergency response',
      fullDesc: 'Coordinates with traffic lights, elevators, gates, and CCTV systems. Clears routes, holds elevators, and activates surveillance automatically.',
      whyMatters: 'Shaves critical seconds off emergency response. Every second counts when lives are at stake.',
      link: '/platform/autonomous',
      stats: ['Traffic light clearance', 'Smart gate control', 'CCTV activation']
    },
    {
      id: 'master',
      title: 'Master AI Agent',
      shortDesc: 'Unified decision orchestration and command',
      fullDesc: 'Brings all five services together. Makes sense of OSINT, decides who to send, plans their route, and coordinates infrastructure. Every decision is reviewed by a human commander.',
      whyMatters: 'Turns five independent systems into one coherent response organism. Human oversight every step.',
      link: '/platform/dispatch',
      stats: ['Real-time orchestration', 'Human-in-the-loop', 'Full auditability']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link href="/" className="text-sm font-semibold text-primary hover:text-primary/80">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold leading-tight text-balance md:text-6xl">
              One platform.{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Five intelligent brains.
              </span>{' '}
              <br />
              One outcome: faster response.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Meet the five AI services that power the Lemtik command center. Each works independently. Together, they transform emergency response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="border-b border-border bg-background px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-border bg-card p-8"
          >
            <h2 className="mb-8 text-center text-2xl font-bold">How the Platform Works</h2>
            
            {/* Simplified C4I Architecture Diagram */}
            <div className="flex flex-col items-center gap-8">
              {/* Incident Input */}
              <div className="flex h-16 w-full items-center justify-center rounded-lg border-2 border-primary bg-primary/10">
                <span className="font-semibold text-primary">Incident Detected</span>
              </div>

              {/* Arrow Down */}
              <div className="text-primary">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>

              {/* Master Agent */}
              <div className="flex h-16 w-full items-center justify-center rounded-lg border-2 border-secondary bg-secondary/10">
                <span className="font-semibold text-secondary">Master AI Agent</span>
              </div>

              {/* Arrow Down */}
              <div className="text-primary">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>

              {/* Five Services Grid */}
              <div className="w-full">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {['Intelligence\nEngine', 'Inventory\nService', 'Route\nCalculator', 'Proximity\nFinder', 'Autonomous\nControl'].map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-lg border border-muted bg-muted/50 p-4 text-center text-sm font-medium text-muted-foreground"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-primary">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>

              {/* Dashboard & Dispatch */}
              <div className="grid w-full gap-4 md:grid-cols-2">
                <div className="flex h-16 items-center justify-center rounded-lg border border-primary bg-primary/10">
                  <span className="font-semibold text-primary">Commander Dashboard</span>
                </div>
                <div className="flex h-16 items-center justify-center rounded-lg border border-primary bg-primary/10">
                  <span className="font-semibold text-primary">Dispatch Order</span>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-primary">
                <ArrowRight className="h-6 w-6 rotate-90" />
              </div>

              {/* Response */}
              <div className="flex h-16 w-full items-center justify-center rounded-lg border-2 border-accent bg-accent/10">
                <span className="font-semibold text-accent">Coordinated Emergency Response</span>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Every decision is human-reviewed. The AI recommends. People decide. Every action is logged permanently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.id ? null : service.id
                    )
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedService === service.id ? 'auto' : 0,
                    opacity: expandedService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-border"
                >
                  <div className="px-6 py-6 space-y-6">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">How It Works</h4>
                      <p className="text-foreground leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    {/* Why It Matters */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">Why It Matters</h4>
                      <p className="text-foreground leading-relaxed">
                        {service.whyMatters}
                      </p>
                    </div>

                    {/* Stats */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {service.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground"
                          >
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    {service.link !== '#' && (
                      <div className="pt-4">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                        >
                          Read the deep dive
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to see it live?</h2>
            <p className="text-lg text-muted-foreground">
              Book a demo and watch the five brains coordinate in real time. We&apos;ll walk you through an actual incident scenario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/demo"
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Demo
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
