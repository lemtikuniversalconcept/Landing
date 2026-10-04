'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Brain,
  Map,
  MessageSquare,
  Eye,
  Zap,
  Lock,
  BarChart3,
  Lightbulb,
  XCircle,
  Ban,
} from 'lucide-react'

export function AIPageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #0891b2 0%, transparent 50%)',
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-primary font-semibold text-lg">Artificial Intelligence</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Built for Security Operations
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-4 text-balance max-w-3xl mx-auto leading-relaxed"
            >
              Security teams don&apos;t suffer from a lack of information. They suffer from too much fragmented information arriving at the wrong time.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            >
              Lemtik uses AI to organize information, uncover relationships, summarize complex situations, and recommend actions—helping operators make faster, better-informed decisions while remaining fully in control.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/platform"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore the Platform
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors"
              >
                Request a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-8 text-5xl font-bold text-primary">&ldquo;</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              AI should reduce cognitive load, not replace human judgment.
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-balance">
              Lemtik is not building autonomous security. Lemtik is building decision intelligence.
            </p>
            <div className="mb-8 text-5xl font-bold text-primary">&rdquo;</div>
          </motion.div>
        </div>
      </section>

      {/* Why Security Needs AI */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">The Real Problem</h2>
            <p className="text-xl text-gray-300">
              Security operators process information from many sources simultaneously
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              'Incident reports',
              'Radio communications',
              'WhatsApp messages',
              'Patrol updates',
              'GPS locations',
              'CCTV alerts',
              'Access control',
              'Inventory',
              'Public intelligence'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-foreground font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-card/50 to-card/30 border border-primary/20 rounded-lg p-8 text-center"
          >
            <p className="text-lg text-gray-300 mb-4">
              The challenge is not collecting this information.
            </p>
            <p className="text-2xl font-bold mb-4">
              The challenge is understanding it quickly.
            </p>
            <p className="text-lg text-gray-400">
              That is where AI creates value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Human-in-the-Loop - CRITICAL SECTION */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Human-in-the-Loop</h2>
            <p className="text-xl text-gray-300">
              Operators remain in control. Lemtik assists.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <div className="space-y-4">
            {[
              { step: 'Information', icon: BarChart3, desc: 'Multiple sources converge' },
              { step: 'AI Analysis', icon: Brain, desc: 'Pattern recognition & correlation' },
              { step: 'Recommendations', icon: Lightbulb, desc: 'Actionable insights generated' },
              { step: 'Operator Review', icon: Eye, desc: 'Human examines recommendation' },
              { step: 'Approval', icon: CheckCircle, desc: 'Operator authorizes action' },
              { step: 'Operational Action', icon: Zap, desc: 'Coordinated response executed' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold text-lg text-primary mb-1">{item.step}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="text-primary/50" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-8 border border-primary/20"
          >
            <p className="text-lg font-semibold text-primary">
              Every recommendation is reviewed by a human. Operators remain accountable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">AI Capabilities</h2>
            <p className="text-xl text-gray-300">
              Six operational intelligence services working in coordination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Operational Intelligence',
                description: 'Understand what is happening',
                capabilities: ['Summarizing reports', 'Extracting entities', 'Finding related incidents', 'Building timelines', 'Highlighting patterns', 'Generating summaries'],
                icon: Brain,
              },
              {
                title: 'Natural Language Operations',
                description: 'Operators shouldn\'t need database queries',
                capabilities: ['Where is Bravo Patrol?', 'Show active incidents near Gate B', 'Which officers are closest?', 'What happened yesterday?', 'No SQL required', 'No technical knowledge'],
                icon: MessageSquare,
              },
              {
                title: 'Report Intelligence',
                description: 'Convert unstructured data into operational records',
                capabilities: ['Voice processing', 'Text extraction', 'Photo analysis', 'WhatsApp integration', 'Radio transcription', 'Email parsing'],
                icon: AlertCircle,
              },
              {
                title: 'Vision Intelligence',
                description: 'Computer vision assists operators (future capability)',
                capabilities: ['CCTV analysis', 'Motion detection', 'Restricted zone alerts', 'Vehicle tracking', 'Person movement', 'Infrastructure monitoring'],
                icon: Eye,
              },
              {
                title: 'Decision Support',
                description: 'AI evaluates operational context',
                capabilities: ['Nearest responders', 'Available vehicles', 'Equipment readiness', 'Previous incidents', 'Threat assessment', 'Suggested actions'],
                icon: Zap,
              },
              {
                title: 'Knowledge Graph',
                description: 'Institutional memory of relationships',
                capabilities: ['People tracking', 'Place mapping', 'Asset relationships', 'Vehicle coordination', 'Incident history', 'Context preservation'],
                icon: Map,
              },
            ].map((capability, idx) => {
              const IconComponent = capability.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Generic AI Isn't Enough */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Generic AI Isn't Enough</h2>
            <p className="text-xl text-gray-300">
              General AI answers questions. Operational AI understands workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-400">Generic AI</h3>
              <ul className="space-y-3">
                {['Conversational', 'General knowledge', 'No context awareness', 'No workflow understanding', 'Requires setup'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <XCircle aria-hidden="true" size={20} className="text-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Lemtik AI</h3>
              <ul className="space-y-3">
                {['Operational', 'Security context', 'Workflow-aware', 'Decision-focused', 'Immediately useful'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Principles */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What AI Never Does</h2>
            <p className="text-xl text-gray-300">
              The AI respects human authority in every decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Makes arrests', icon: Ban },
              { label: 'Makes disciplinary decisions', icon: Ban },
              { label: 'Locks facilities autonomously', icon: Ban },
              { label: 'Overrides human authority', icon: Ban },
              { label: 'Replaces operators', icon: Ban },
              { label: 'Hides its reasoning', icon: Ban },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <item.icon aria-hidden="true" className="h-6 w-6 mb-2 mx-auto text-red-400" />
                <p className="text-foreground font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-4">Instead, it:</h3>
            <ul className="space-y-2 text-lg">
              {['Organises information', 'Summarises complex situations', 'Recommends actions', 'Explains its reasoning', 'Learns operational context', 'Supports operator decisions'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={20} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Governance & Explainability */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Governance & Explainability</h2>
            <p className="text-xl text-gray-300">
              Every recommendation must answer: Why?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Why?', desc: 'Every recommendation explained' },
              { title: 'Evidence', desc: 'Supporting information provided' },
              { title: 'Confidence', desc: 'Certainty level disclosed' },
              { title: 'Related', desc: 'Similar incidents shown' },
              { title: 'Audit Trail', desc: 'Complete approval history' },
              { title: 'Traceability', desc: 'No black-box decisions' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical AI */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-12 text-center"
          >
            <Lock className="text-primary mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-6">Ethical AI Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Human Dignity', desc: 'AI assists humans, never judges' },
                { title: 'Transparency', desc: 'How and why decisions are made' },
                { title: 'Accountability', desc: 'Operators remain responsible' },
                { title: 'Oversight', desc: 'Humans review all recommendations' },
                { title: 'Privacy', desc: 'Data handled responsibly' },
                { title: 'Responsibility', desc: 'Ethical deployment always' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Future AI Vision</h2>
            <p className="text-xl text-gray-300">
              Potential capabilities on the horizon
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { capability: 'Predictive incident forecasting', desc: 'Anticipate incidents before they occur' },
              { capability: 'Cross-site operational intelligence', desc: 'Coordinate across multiple locations' },
              { capability: 'Infrastructure orchestration', desc: 'Adapt systems to incident context' },
              { capability: 'Resource optimisation', desc: 'Allocate assets intelligently' },
              { capability: 'Operational simulations', desc: 'Test scenarios before deployment' },
              { capability: 'Digital twins', desc: 'Real-time facility models' },
              { capability: 'Cross-camera understanding', desc: 'Unified multi-camera intelligence' },
              { capability: 'Adaptive recommendations', desc: 'Learning from operator feedback' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold text-primary mb-1">{item.capability}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">See AI Supporting Real Security Operations</h2>
            <p className="text-xl text-gray-300 mb-8 text-balance">
              Request a live demonstration to see how AI helps operators coordinate incidents faster while keeping humans in complete control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/platform"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-colors"
              >
                Explore the Platform
              </Link>
            </div>
          </motion.div>

          {/* Final Principle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg p-8"
          >
            <p className="text-lg text-gray-300 mb-4">
              After leaving this page, you shouldn&apos;t remember which language model Lemtik uses.
            </p>
            <p className="text-2xl font-bold text-primary">
              You should remember something far more important:
            </p>
            <p className="text-xl text-gray-200 mt-4 italic">
              Lemtik&apos;s AI doesn&apos;t replace security professionals—it gives them the operational context they need to make faster, better decisions.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
