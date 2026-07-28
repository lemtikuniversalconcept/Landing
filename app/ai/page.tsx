'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Brain, AlertCircle, Map, Gauge, Clock } from 'lucide-react'

export default function AIPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const aiServices = [
    {
      name: 'Intelligence Engine',
      description: 'Continuous monitoring and threat scoring across 2000+ open and darknet sources',
      capabilities: [
        'Real-time OSINT collection',
        '15-dimension risk scoring',
        'Regional threat classification',
        '73% reduction in false alarms',
        'Institutional-type analysis'
      ]
    },
    {
      name: 'Inventory Service',
      description: 'Live asset and personnel tracking with 30-second update intervals',
      capabilities: [
        'Real-time asset location',
        'Personnel availability tracking',
        'Equipment status monitoring',
        'Multi-depot support',
        'Operational readiness scoring'
      ]
    },
    {
      name: 'Route Calculator',
      description: 'Intelligent routing optimized for traffic, obstacles, and response targets',
      capabilities: [
        'Real-time route optimization',
        'Traffic awareness integration',
        'Multi-route comparison',
        '5-8 minute average response savings',
        'Fuel cost optimization'
      ]
    },
    {
      name: 'Proximity Finder',
      description: 'Instant identification of nearest qualified responders within configurable zones',
      capabilities: [
        'Sub-2-second responder lookup',
        'Skill-based matching',
        'Zone-based filtering',
        'Assignment conflict prevention',
        'Capability-aware dispatch'
      ]
    },
    {
      name: 'Autonomous Control',
      description: 'Infrastructure orchestration for emergency response acceleration',
      capabilities: [
        'Traffic light coordination',
        'Smart gate control',
        'Elevator holding systems',
        'CCTV activation',
        'Emergency lighting coordination'
      ]
    },
    {
      name: 'Master AI Agent',
      description: 'Unified orchestration bringing all five services into one coordinated decision system',
      capabilities: [
        'Cross-service orchestration',
        'Human-in-the-loop decision making',
        'Real-time response coordination',
        'Complete auditability',
        'Operator authority preservation'
      ]
    }
  ]

  const futureCapabilities = [
    {
      capability: 'Predictive Intelligence',
      description: 'Machine learning models that anticipate incidents before they occur, based on historical patterns and environmental factors',
      timeline: 'Q3 2025'
    },
    {
      capability: 'Multi-Camera Coordination',
      description: 'Intelligent CCTV systems that automatically track incidents, zoom to optimal angles, and provide panoramic incident visibility',
      timeline: 'Q4 2025'
    },
    {
      capability: 'Smart Infrastructure Orchestration',
      description: 'Automatic environmental response including building systems, emergency protocols, and resource coordination',
      timeline: 'Q1 2026'
    },
    {
      capability: 'Cross-Site Command',
      description: 'Coordinate security operations across multiple locations with unified visibility and orchestrated response',
      timeline: 'Q2 2026'
    },
    {
      capability: 'Autonomous Recommendations',
      description: 'Enhanced decision support that learns from operator feedback and organizational patterns',
      timeline: 'Q3 2026'
    },
    {
      capability: 'Digital Twins',
      description: 'Simulate operational scenarios and optimize response procedures before deployment',
      timeline: 'Q4 2026'
    }
  ]

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
              AI That Assists
              <br />
              <span className="text-primary">Never Replaces</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              Lemtik's AI services are designed with one principle: make operators smarter and faster, while keeping humans in authority. Every AI recommendation is reviewed and approved by a human commander before execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">The Lemtik AI Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Information Processing',
                desc: 'AI ingests all incoming data—CCTV, access logs, reports, sensor data—and produces structured intelligence'
              },
              {
                icon: AlertCircle,
                title: 'Recommendation Layer',
                desc: 'Based on processed information, AI recommends actions: who to dispatch, where to route, what infrastructure to activate'
              },
              {
                icon: Gauge,
                title: 'Human Authority',
                desc: 'A human operator reviews every recommendation. They can approve, modify, or override. They remain accountable.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Six AI Services */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Six AI Services Working Together</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {aiServices.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-8"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How They Work Together</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Incident Detected</h4>
                  <p className="text-sm text-muted-foreground">CCTV, access logs, or manual report triggers an alert</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-8" />

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Intelligence Engine Analyzes</h4>
                  <p className="text-sm text-muted-foreground">OSINT, incident history, threat scoring, contextual analysis</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-8" />

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Master Agent Coordinates</h4>
                  <p className="text-sm text-muted-foreground">Proximity Finder identifies nearest responders, Route Calculator plans optimal response</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-8" />

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Recommendation Ready</h4>
                  <p className="text-sm text-muted-foreground">Master Agent presents complete decision package to operator</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/20 ml-6 h-8" />

              <div className="flex items-center gap-6 bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-background font-bold text-lg">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Operator Approves & Acts</h4>
                  <p className="text-sm text-muted-foreground">Human commander reviews, approves, and executes response. Every action is logged.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Future AI Capabilities</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            We're continuously expanding Lemtik's AI capabilities to make your security operations smarter and faster.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {futureCapabilities.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-8 flex items-start justify-between gap-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.capability}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded text-sm font-semibold text-primary">
                    {item.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Decision Framework */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">The AI Decision Framework</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                principle: 'Transparency',
                explanation: 'Every AI decision shows its reasoning. Operators understand why an action is recommended.'
              },
              {
                principle: 'Auditability',
                explanation: 'Every AI input, process, and recommendation is logged permanently for review and improvement.'
              },
              {
                principle: 'Human Override',
                explanation: 'Operators can modify, delay, or reject any AI recommendation. Human judgment is final.'
              },
              {
                principle: 'Continuous Learning',
                explanation: 'AI learns from operator feedback and organizational patterns to improve future recommendations.'
              },
              {
                principle: 'Explainability',
                explanation: 'AI never makes a "black box" decision. Operators understand the factors influencing each recommendation.'
              }
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.principle}</h3>
                <p className="text-muted-foreground">{item.explanation}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-card px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">See AI in Action</h2>
            <p className="text-lg text-muted-foreground">
              Watch how AI assists your operators without replacing human judgment. Book a demo and see an actual incident scenario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                Request a Demo
              </Link>
              <Link href="/platform" className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors">
                Explore Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
