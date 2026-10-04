'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  ArrowRight,
  Map,
  AlertCircle,
  Zap,
  Shield,
  Video,
  Lock,
  Construction,
  DoorOpen,
  Eye,
  Radio,
  MapPin,
  Users,
  Siren,
  Lightbulb,
  Megaphone,
} from 'lucide-react'

export function PlatformPageClient() {
  const [expandedModule, setExpandedModule] = useState<string | null>('unified')

  // Nav links like /platform#intelligence should land on that module already open,
  // not just scrolled to a collapsed accordion item.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) setExpandedModule(hash)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  const modules = [
    {
      id: 'unified',
      title: 'Unified Command Centre',
      shortDesc: 'Single operational picture across all security operations',
      capabilities: [
        'Live incident map with real-time updates',
        'Incident feed and timeline',
        'Asset and personnel tracking',
        'Patrol status and assignments',
        'Infrastructure health monitoring',
        'Operational alerts and notifications',
        'AI decision recommendations',
        'Communications integration'
      ],
      illustration: 'dashboard'
    },
    {
      id: 'incident',
      title: 'Incident Management',
      shortDesc: 'Structured lifecycle for every incident',
      capabilities: [
        'Automated incident detection and classification',
        'Assignment and escalation workflows',
        'Real-time incident tracking',
        'Evidence and documentation collection',
        'Resolution and reporting',
        'Complete audit trail with timestamps',
        'Searchable incident history',
        'Multi-incident correlation'
      ],
      illustration: 'timeline'
    },
    {
      id: 'patrol',
      title: 'Patrol Operations',
      shortDesc: 'Coordinate field teams in real-time',
      capabilities: [
        'Dynamic shift and assignment management',
        'Live GPS tracking of all patrols',
        'Geofencing and checkpoint validation',
        'Route optimization and completion tracking',
        'Escalation and emergency response',
        'Patrol report capture and analysis',
        'Officer status and communication',
        'Incident response assignment'
      ],
      illustration: 'map'
    },
    {
      id: 'intelligence',
      title: 'Operational Intelligence',
      shortDesc: 'Turn operational data into context',
      capabilities: [
        'Entity relationship mapping',
        'Historical incident analysis',
        'Threat timeline reconstruction',
        'Repeat location identification',
        'Officer and asset history tracking',
        'Operational pattern detection',
        'Risk assessment and scoring',
        'Predictive analytics'
      ],
      illustration: 'graph'
    },
    {
      id: 'routing',
      title: 'Routing & Dispatch',
      shortDesc: 'Reduce response latency with intelligent routing',
      capabilities: [
        'Identify closest qualified responder',
        'Vehicle and foot routing optimization',
        'Real-time traffic awareness',
        'Multi-route comparison',
        'Arrival time estimation',
        'Assignment recommendations',
        'Geofencing and boundary enforcement',
        'Response status tracking'
      ],
      illustration: 'route'
    },
    {
      id: 'inventory',
      title: 'Inventory & Assets',
      shortDesc: 'Know operational readiness instantly',
      capabilities: [
        'Real-time vehicle tracking and availability',
        'Equipment inventory management',
        'Weapons and protective gear tracking',
        'Fuel and maintenance monitoring',
        'Medical kit and supply levels',
        'Communications equipment status',
        'Operational readiness scoring',
        'Availability thresholds and alerts'
      ],
      illustration: 'inventory'
    },
    {
      id: 'dashboards',
      title: 'Operational Dashboards',
      shortDesc: 'Real-time visibility for command decisions',
      capabilities: [
        'Response time metrics and trending',
        'Incident volume and patterns',
        'Patrol coverage heatmaps',
        'Resource utilisation tracking',
        'Operational readiness status',
        'Infrastructure health overview',
        'Command metrics and KPIs',
        'Live-updating status indicators'
      ],
      illustration: 'metrics'
    }
  ]

  const integrations = [
    { name: 'CCTV Systems', icon: Video },
    { name: 'Access Control', icon: Lock },
    { name: 'Boom Barriers', icon: Construction },
    { name: 'Smart Gates', icon: DoorOpen },
    { name: 'Biometric Doors', icon: Eye },
    { name: 'IoT Sensors', icon: Radio },
    { name: 'GPS Tracking', icon: MapPin },
    { name: 'Visitor Systems', icon: Users },
    { name: 'Alarm Systems', icon: Siren },
    { name: 'Emergency Lighting', icon: Lightbulb },
    { name: 'Public Address', icon: Megaphone },
    { name: 'Radio Systems', icon: Radio }
  ]

  const timelineEvents = [
    { time: '08:31', event: 'Alert received from multiple sources' },
    { time: '08:32', event: 'AI analyzes and correlates reports' },
    { time: '08:33', event: 'Nearest qualified patrol identified' },
    { time: '08:34', event: 'Operator reviews and approves dispatch' },
    { time: '08:36', event: 'Infrastructure secured automatically' },
    { time: '08:42', event: 'Incident resolved and documented' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold leading-tight text-balance md:text-6xl">
              One Operational Platform
              <br />
              <span className="text-primary">For Every Security Workflow</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              Most organisations operate multiple security systems in isolation. Incident reporting. Patrol management. Access control. Vehicle tracking. Radios. Visitor logs. Asset records. Lemtik brings these systems together into one unified operational environment where every piece of information converges into one clear picture.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                Request a Demo
              </Link>
              <a
                href="#security"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors"
              >
                Read Architecture
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Philosophy */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Security Operations Are Coordination Problems</h2>
              <p className="text-muted-foreground text-lg mb-6">
                The challenge isn't discovering that something happened. The challenge is coordinating people, assets, and decisions afterwards.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Lemtik exists to reduce the time between alert and action by giving your team one intelligent operational picture.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Alert</h3>
                    <p className="text-sm text-muted-foreground">Something happens</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Understanding</h3>
                    <p className="text-sm text-muted-foreground">Information converges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Decision</h3>
                    <p className="text-sm text-muted-foreground">Operator chooses action</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Action</h3>
                    <p className="text-sm text-muted-foreground">Coordinated response deployed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 flex items-center justify-center min-h-96">
              <div className="text-center text-muted-foreground">
                <AlertCircle className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p className="text-sm">Operational timeline visualization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Information Flows */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">How Information Flows Through Lemtik</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border rounded-lg p-8"
          >
            <div className="space-y-6">
              {/* Data Sources */}
              <div>
                <p className="text-sm font-semibold text-primary mb-4">Information Sources</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['CCTV', 'Access Control', 'Radio Reports', 'Patrol Reports', 'WhatsApp Groups', 'IoT Sensors', 'Vehicle GPS', 'Visitor Systems', 'OSINT Feeds', 'Manual Reports', 'Email', 'Incidents'].map((source, i) => (
                    <div key={i} className="bg-muted/30 border border-border rounded-lg p-3 text-center text-sm">
                      {source}
                    </div>
                  ))}
                </div>
              </div>

              {/* Convergence Arrow */}
              <div className="flex justify-center">
                <div className="text-primary text-3xl">↓</div>
              </div>

              {/* Processing */}
              <div className="text-center py-6 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-lg font-semibold text-primary">Unified Lemtik Platform</p>
                <p className="text-sm text-muted-foreground mt-2">Correlates • Analyzes • Contextualizes</p>
              </div>

              {/* Convergence Arrow */}
              <div className="flex justify-center">
                <div className="text-primary text-3xl">↓</div>
              </div>

              {/* Output */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <p className="font-semibold">Unified Command Centre</p>
                  <p className="text-xs text-muted-foreground mt-1">One operational picture</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <p className="font-semibold">Operator Review</p>
                  <p className="text-xs text-muted-foreground mt-1">Human judgment</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                  <p className="font-semibold">Coordinated Response</p>
                  <p className="text-xs text-muted-foreground mt-1">Executed decision</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Seven Core Platform Modules</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {modules.map((module) => (
              <motion.div
                key={module.id}
                id={module.id}
                variants={itemVariants}
                className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 scroll-mt-24"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{module.shortDesc}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedModule === module.id ? 'auto' : 0,
                    opacity: expandedModule === module.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-border"
                >
                  <div className="px-6 py-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-4">Key Capabilities</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unified Command Centre Deep Dive */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">The Unified Command Centre</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                The heart of Lemtik is the Unified Command Centre—a live operational environment where all security data converges into one clear picture.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Live Map', desc: 'Real-time incident and asset positioning' },
                  { title: 'Incident Feed', desc: 'Chronological timeline of all events' },
                  { title: 'Timeline View', desc: 'Detailed incident progression' },
                  { title: 'Dispatch Panel', desc: 'Assignment and routing controls' },
                  { title: 'Operational Alerts', desc: 'Real-time critical notifications' },
                  { title: 'Assets Overview', desc: 'Vehicle and equipment status' },
                  { title: 'Communications', desc: 'Integrated messaging and coordination' },
                  { title: 'AI Suggestions', desc: 'Decision support and recommendations' }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-primary pl-4 py-2">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background border border-border rounded-lg p-12 flex items-center justify-center min-h-full"
            >
              <div className="text-center text-muted-foreground">
                <Map className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p className="text-sm">Interactive command centre interface</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Human Decision Layer */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">The Human Decision Layer</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-12"
          >
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground text-center">
                This is critical: AI never replaces operators. AI recommends. Operators approve. Operators remain accountable.
              </p>
              <div className="grid grid-cols-5 gap-2 items-center">
                <div className="text-center">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <Zap className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-xs font-semibold">AI Analysis</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">→</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <AlertCircle className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-xs font-semibold">Recommendation</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">→</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <Shield className="h-6 w-6 mx-auto text-primary mb-2" />
                    <p className="text-xs font-semibold">Operator Review</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">↓</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
                  <p className="font-semibold text-lg text-primary">Operator Approval & Execution</p>
                  <p className="text-sm text-muted-foreground mt-2">Human authority is final. Every action is logged.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Integration */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Integration</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Lemtik connects with your existing infrastructure—CCTV, access control, IoT systems, and more. Nothing is proprietary. Everything is modular.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
              >
                <integration.icon aria-hidden="true" className="h-8 w-8 mb-3 mx-auto text-primary" />
                <p className="font-semibold text-sm">{integration.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Timeline */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Operational Timeline: A Real Incident</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-12"
          >
            <div className="space-y-6">
              {timelineEvents.map((event, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-20">
                    <p className="font-mono font-bold text-primary text-lg">{event.time}</p>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <p className="font-semibold text-foreground">{event.event}</p>
                    </div>
                  </div>
                  {i < timelineEvents.length - 1 && (
                    <div className="absolute left-[90px] w-0.5 h-12 bg-primary/20 -ml-1.5" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-12 text-sm">
              Total incident lifecycle: 11 minutes from alert to resolution. Every action logged. Every decision auditable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Architecture</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { layer: 'Frontend Layer', desc: 'Web and mobile interfaces for operators and commanders' },
              { layer: 'API Layer', desc: 'RESTful and real-time interfaces for integrations' },
              { layer: 'Operational Services', desc: 'Business logic for incidents, patrols, routing, intelligence' },
              { layer: 'AI Services', desc: 'Machine learning, analysis, and decision support' },
              { layer: 'Data Layer', desc: 'Operational databases and data warehousing' },
              { layer: 'Infrastructure', desc: 'Cloud hosting, scalability, and redundancy' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <p className="text-xs font-bold text-primary">{i + 1}</p>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground">{item.layer}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security" className="border-b border-border bg-background px-6 py-24 scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Encryption', desc: 'End-to-end encryption for all data in transit and at rest' },
              { title: 'Authentication', desc: 'Multi-factor authentication with role-based access control' },
              { title: 'Audit Logs', desc: 'Complete audit trail of every action and decision' },
              { title: 'Data Isolation', desc: 'Customer data completely isolated and encrypted' },
              { title: 'Secure APIs', desc: 'OAuth 2.0 and API key management' },
              { title: 'High Availability', desc: 'Redundant infrastructure with automatic failover' },
              { title: 'Compliance Roadmap', desc: 'GDPR, CCPA, and local security standards' },
              { title: 'Regular Audits', desc: 'Third-party security assessments and penetration testing' }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Deployment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Cloud', desc: 'Fully managed cloud deployment with automatic scaling' },
              { name: 'Hybrid', desc: 'Mix of cloud and on-premise components for flexibility' },
              { name: 'Private Cloud', desc: 'Dedicated cloud infrastructure within your environment' }
            ].map((option, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">{option.name}</h3>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Principles */}
      <section className="border-b border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { principle: 'Faster', desc: 'Reduce response latency at every decision point' },
              { principle: 'Better Informed', desc: 'Every decision backed by complete operational context' },
              { principle: 'Auditable', desc: 'Every action recorded and traceable' },
              { principle: 'Human Approved', desc: 'Operators maintain authority and accountability' },
              { principle: 'Repeatable', desc: 'Consistent procedures across all operations' },
              { principle: 'Measured', desc: 'Continuous metrics and performance tracking' }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">{item.principle}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="border-b border-border bg-card px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Future Platform Vision</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're building towards an increasingly intelligent operational layer that learns from your operations and gets smarter over time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { capability: 'Predictive Intelligence', desc: 'Anticipate incidents before they happen' },
              { capability: 'Multi-Camera Coordination', desc: 'Intelligent camera tracking and automated zoom' },
              { capability: 'Smart Infrastructure Orchestration', desc: 'Automatic environment response to incidents' },
              { capability: 'Cross-Site Command', desc: 'Coordinate operations across multiple locations' },
              { capability: 'Autonomous Recommendations', desc: 'More sophisticated decision support' },
              { capability: 'Digital Twins', desc: 'Simulate and optimize operational scenarios' }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-2">{item.capability}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b border-border bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">See How Modern Security Operations Work</h2>
            <p className="text-lg text-muted-foreground">
              Book a demo and we'll walk you through an actual incident scenario. Watch how Lemtik coordinates every part of your security operation into one unified response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                Request a Demo
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors">
                Talk With Our Team
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Not sure where to start?{' '}
              <Link href="/solutions" className="text-primary underline underline-offset-2 hover:no-underline">
                See how Lemtik fits your industry
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Lemtik is the operating system that connects every part of security operations into one coordinated workflow.
          </p>
        </div>
      </footer>
    </div>
  )
}
