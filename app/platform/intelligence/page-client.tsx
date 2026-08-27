'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function IntelligencePageClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold leading-tight text-balance md:text-6xl">
              Intelligence Engine
              <br />
              <span className="text-primary">Understanding Threats in Real Time</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              The Intelligence Engine continuously monitors 2000+ open and darknet sources, analyzing threats across 15 risk dimensions. Every incident alert arrives pre-scored and contextualized.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">What The Intelligence Engine Does</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Continuous Monitoring</h3>
              <p className="text-muted-foreground mb-6">
                The Intelligence Engine ingests data from 2000+ sources including:
              </p>
              <ul className="space-y-3">
                {['Public news feeds', 'Social media monitoring', 'Darknet markets', 'Security forums', 'Police databases', 'Emergency services', 'Community reports', 'Government warnings'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-12 flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Intelligence visualization</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Scoring */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">15-Dimension Risk Scoring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { dimension: 'Threat Type', desc: 'What kind of threat is this?' },
              { dimension: 'Location Specificity', desc: 'How targeted to your area?' },
              { dimension: 'Temporal Urgency', desc: 'How imminent is this threat?' },
              { dimension: 'Target Institution', desc: 'Which organization is at risk?' },
              { dimension: 'Attack Vector', desc: 'How would this threat manifest?' },
              { dimension: 'Historical Correlation', desc: 'Has this happened before?' },
              { dimension: 'Source Reliability', desc: 'How trustworthy is the source?' },
              { dimension: 'Intent Clarity', desc: 'Is this a credible threat?' },
              { dimension: 'Resource Requirements', desc: 'What would this require?' },
              { dimension: 'Regional Pattern', desc: 'Does this match regional trends?' },
              { dimension: 'Seasonal Context', desc: 'Is this contextually normal?' },
              { dimension: 'Actor Profile', desc: 'Who would do this?' },
              { dimension: 'Escalation Risk', desc: 'Could this worsen?' },
              { dimension: 'Cascade Impact', desc: 'What else might this trigger?' },
              { dimension: 'Recovery Difficulty', desc: 'How hard to recover from?' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background border border-border rounded-lg p-4"
              >
                <h4 className="font-semibold text-foreground mb-2">{item.dimension}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '73%', label: 'Reduction in false alarms' },
              { stat: 'Real-time', label: 'Threat classification' },
              { stat: 'Pre-scored', label: 'Every incident arrives classified' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-3">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">See Intelligence in Action</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
              Request a Demo
            </Link>
            <Link href="/platform" className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors">
              Back to Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
