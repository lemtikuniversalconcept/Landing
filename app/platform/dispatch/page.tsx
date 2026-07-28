'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DispatchPage() {
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
              Master AI Agent
              <br />
              <span className="text-primary">Unified Dispatch Orchestration</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              The Master AI Agent brings together Intelligence Engine, Inventory Service, Route Calculator, Proximity Finder, and Autonomous Control into one coordinated decision system. Every decision is reviewed by a human commander.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Decision Flow */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How The Master Agent Works</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Incident Reported</h3>
                  <p className="text-muted-foreground">Alert arrives from CCTV, access logs, radio, or manual report</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-6" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Intelligence Processes</h3>
                  <p className="text-muted-foreground">OSINT, threat scoring, historical correlation, risk assessment</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-6" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Master Agent Decides</h3>
                  <p className="text-muted-foreground">Identifies threat severity, determines response type and scale</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-6" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Responder Selected</h3>
                  <p className="text-muted-foreground">Proximity Finder identifies nearest qualified team with required skills</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-6" />

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Route Optimized</h3>
                  <p className="text-muted-foreground">Route Calculator provides optimal path with traffic awareness and infrastructure clearance</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-6" />

              <div className="flex items-start gap-6 bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-background font-bold">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Recommendation Package</h3>
                  <p className="text-muted-foreground">Master Agent presents complete decision package to operator for approval</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Master Agent Coordinates */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Gets Coordinated</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Response Information</h3>
              <ul className="space-y-3">
                {[
                  'Threat type and severity',
                  'Location and incident zone',
                  'Recommended response team',
                  'Alternative responders',
                  'Optimal route with ETA',
                  'Infrastructure actions needed',
                  'Escalation procedures if needed',
                  'Communication protocol'
                ].map((item, i) => (
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
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Operational Actions</h3>
              <ul className="space-y-3">
                {[
                  'Activate CCTV and zoom to incident',
                  'Clear traffic routes',
                  'Unlock access points',
                  'Hold elevators or dispatch to floors',
                  'Activate emergency lighting',
                  'Engage public address system',
                  'Notify backup teams',
                  'Begin incident documentation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decision Package */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What The Operator Sees</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-12"
          >
            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">Decision Summary</h4>
                <p className="text-sm text-muted-foreground">AI recommends dispatching Team Alpha to building perimeter with route via North Gate. Estimated arrival: 3 minutes. Traffic lights will clear automatically. CCTV is tracking the suspect.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-xs font-semibold text-primary mb-2">CONFIDENCE</p>
                  <p className="text-2xl font-bold text-foreground">92%</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-xs font-semibold text-primary mb-2">THREAT LEVEL</p>
                  <p className="text-2xl font-bold text-foreground">High</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-xs font-semibold text-primary mb-2">RESPONSE TIME</p>
                  <p className="text-2xl font-bold text-foreground">3 min</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                  Approve & Dispatch
                </button>
                <button className="flex-1 px-4 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors">
                  Review Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Sub-2-second', label: 'decision recommendations' },
              { metric: '50%+', label: 'faster response time' },
              { metric: '99.2%', label: 'system uptime' },
              { metric: '100%', label: 'human authority preserved' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border rounded-lg p-8 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">See Master Agent in Action</h2>
          <p className="text-muted-foreground mb-8">Watch a full incident scenario from alert to coordinated response with all systems orchestrated</p>
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
