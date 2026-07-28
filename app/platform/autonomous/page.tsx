'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AutonomousPage() {
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
              Autonomous Control
              <br />
              <span className="text-primary">Infrastructure Acceleration</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              Lemtik coordinates with your building infrastructure to automatically clear response routes, hold elevators, activate surveillance, and coordinate emergency systems—shaving critical seconds off response time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connected Systems */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Connected Infrastructure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { system: 'Traffic Light Systems', actions: 'Clear routes for emergency vehicles' },
              { system: 'Access Control', actions: 'Unlock doors and gates automatically' },
              { system: 'Elevator Systems', actions: 'Hold elevators or bring to secure floor' },
              { system: 'CCTV Networks', actions: 'Activate cameras and zoom to incident' },
              { system: 'Emergency Lighting', actions: 'Illuminate response routes' },
              { system: 'Public Address', actions: 'Broadcast emergency alerts' },
              { system: 'Boom Barriers', actions: 'Clear vehicle entry points' },
              { system: 'Gate Automation', actions: 'Open for responder access' },
              { system: 'Alarm Systems', actions: 'Coordinate with security protocols' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">{item.system}</h4>
                <p className="text-sm text-muted-foreground">{item.actions}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">From Alert to Action</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border rounded-lg p-12"
          >
            <div className="space-y-6">
              {[
                { time: '0ms', event: 'Incident detected' },
                { time: '+150ms', event: 'Intelligence processed' },
                { time: '+300ms', event: 'Autonomous systems activated' },
                { time: '+400ms', event: 'Responder dispatch recommendation ready' },
                { time: '+500ms', event: 'Operator approves dispatch' },
                { time: '+650ms', event: 'Response underway, infrastructure supports' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="flex-shrink-0 font-mono font-bold text-primary">{item.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <p className="font-semibold text-foreground">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-12 text-sm">
              650 milliseconds from alert to coordinated response with infrastructure support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Measurable Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                metric: 'Seconds saved per incident',
                value: '8-12',
                explanation: 'Automated infrastructure responses eliminate manual coordination delays'
              },
              {
                metric: 'Route clearance time',
                value: 'Instant',
                explanation: 'Traffic lights and barriers clear before responder arrives'
              },
              {
                metric: 'Infrastructure coordination',
                value: 'Simultaneous',
                explanation: 'All systems activate in parallel, not sequentially'
              },
              {
                metric: 'Operator relief',
                value: '40%',
                explanation: 'Less manual coordination required, more attention to incident command'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <h4 className="font-semibold text-foreground mb-3">{item.metric}</h4>
                <p className="text-sm text-muted-foreground">{item.explanation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="bg-background border border-border rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-6">Operational Safety</h2>
            <p className="text-muted-foreground mb-4">
              Autonomous control always operates within human-defined parameters:
            </p>
            <ul className="space-y-2">
              {[
                'All autonomous actions are pre-approved by security commanders',
                'Operators maintain override authority at all times',
                'Every autonomous action is logged for audit purposes',
                'Systems revert to manual control if connectivity is lost',
                'Critical infrastructure has manual failsafes'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">See Autonomous Control in Action</h2>
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
