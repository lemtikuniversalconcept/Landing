'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MissionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 leading-tight text-balance"
        >
          Built in Lagos.
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            For every African city.
          </span>
        </motion.h1>
      </section>

      {/* Continental Thesis Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">Security Sovereignty Requires African-Built Technology</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Africa&apos;s cities are growing faster than anywhere else on Earth. By 2050, over 60% of the continent&apos;s population will live in urban centers. This urbanization is accompanied by real security challenges—but also by an unprecedented opportunity.
            </p>
            <p>
              For decades, African nations relied on security technology built for Western contexts. Command-and-control systems designed for environments with unlimited budgets, stable power, redundant connectivity, and governance models that don&apos;t map to our reality. The result: African security teams operate with tools that don&apos;t work for African cities.
            </p>
            <p>
              Industrialisation requires security sovereignty. That means African cities need security infrastructure <span className="text-foreground font-medium">built in Africa, by Africans, for African realities.</span> Not translations of Western software. Not hand-me-downs. Purpose-built technology that understands the continent&apos;s operational context, respects its constraints, and amplifies the capabilities of African security professionals.
            </p>
            <p>
              Lemtik is part of a broader movement: African-built security and defense technology. Technology designed by people who live here. Technology that works here.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Civilian Gap Thesis Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">The Civilian Gap: Who Gets Left Behind</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              When people think about security technology, they picture government installations—military command centers, national police, federal response networks. Billions of dollars flow into those systems. That&apos;s necessary and important.
            </p>
            <p>
              But that leaves everyone else unprotected.
            </p>
            <p>
              What about the estate manager protecting 500 residents? The hotel owner running security for guests and staff? The corporate security director trying to keep 2,000 employees safe? The local government trying to coordinate rapid response across a sprawling city district?
            </p>
            <p>
              These organisations have real security needs. They have dedicated teams. They have budgets. But they&apos;ve been left with either nothing (WhatsApp groups and radio handsets) or infrastructure so expensive and complex that it requires a government-scale operation to run.
            </p>
            <p>
              Lemtik is for the gap in between. For civilian organisations. For the security teams that protect the majority of people in African cities but operate in the shadow of enterprise and government technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Founder's Story Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-border">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">Why This. Why Now. Why Me.</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I grew up in Lagos. I spent time in security operations—enough to see the gap up close. Enough to see how smart people, working hard, were held back by broken systems. Enough to know the problem wasn&apos;t them. It was the tools.
            </p>
            <p>
              I watched estate managers coordinate incidents via a chaotic WhatsApp group—no record, no system, just chaos. I watched security directors spend 70% of their time on manual reporting instead of actual security. I watched response times measured in hours when minutes mattered.
            </p>
            <p>
              At the same time, I watched the technology world move forward. AI got smart. Cloud infrastructure got robust. Real-time systems became possible. And I kept thinking: why aren&apos;t these tools in the hands of African security teams?
            </p>
            <p>
              The answer is that nobody was building for them. So I decided to.
            </p>
            <p>
              Lemtik isn&apos;t my side project. It&apos;s my bet on African security getting the infrastructure it deserves. It&apos;s my commitment to building the kind of technology I wanted to see exist.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Future Vision Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 border-t border-b border-border">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">Where We Go From Here</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Lemtik launches in Lagos. It&apos;s the proving ground, the test bed, the place where we validate that our vision works.
            </p>
            <p>
              From Lagos, we scale to Nigeria. Every state. Every major city. Every organisation that needs faster, smarter security response.
            </p>
            <p>
              From Nigeria, we take what works and rebuild it for Africa. Johannesburg. Nairobi. Casablanca. Kigali. Every city with real security needs and organisations ready to move faster.
            </p>
            <p>
              The long-term bet is simple and straightforward: Lemtik becomes the operating system for civilian security across Africa. Any organisation or government agency with a real security team, anywhere on the continent, can plug into Lemtik and get faster response, better coordination, and the confidence that their security operations work the way they should.
            </p>
            <p className="font-medium text-foreground">
              That&apos;s the mission. That&apos;s the vision. That&apos;s where we&apos;re headed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Join Us</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re building the future of security operations in Africa. If you believe in this mission, let&apos;s build it together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/?demo=true"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              See It In Action
            </Link>
            <Link
              href="/careers"
              className="px-8 py-3 border border-border hover:bg-muted rounded-lg font-semibold transition-colors"
            >
              We're Hiring
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
