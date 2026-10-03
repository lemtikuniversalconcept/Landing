import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { ContactForm } from '@/components/contact-form'

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Talk to Lemtik Security about protecting your estate, hotel, corporate office, or government facility with real-time command and control.',
  path: '/contact',
})

const SOLUTION_LABELS: Record<string, string> = {
  estates: 'Estates & Properties',
  hospitality: 'Hotels & Hospitality',
  corporate: 'Corporate Offices',
  government: 'Government',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ solution?: string }>
}) {
  const { solution } = await searchParams
  const solutionLabel = solution ? SOLUTION_LABELS[solution] : undefined

  return (
    <main className="bg-background min-h-screen">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ])} />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            Let&apos;s talk about your operation
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            {solutionLabel
              ? `Tell us about your ${solutionLabel.toLowerCase()} security needs and we'll follow up within one business day.`
              : "Tell us about your security operation — we'll follow up within one business day."}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-10">
          <ContactForm defaultSolution={solution || ''} />
        </div>
      </section>
    </main>
  )
}
