import Link from 'next/link'
import { Check } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata = buildMetadata({
  title: 'Pricing',
  description:
    'Lemtik Security pricing is built around your site count, team size, and integration needs. Talk to us for a plan scoped to your operation.',
  path: '/pricing',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' },
]

const tiers = [
  {
    name: 'Essential',
    tagline: 'For a single site or estate',
    audience: 'Estates & properties',
    features: [
      'Unified Command Centre',
      'Incident Management',
      'Patrol Operations',
      'Operational Dashboards',
      'Standard onboarding & support',
    ],
  },
  {
    name: 'Professional',
    tagline: 'For multi-site operations',
    audience: 'Hospitality & corporate teams',
    highlighted: true,
    features: [
      'Everything in Essential',
      'Operational Intelligence',
      'Routing & Dispatch',
      'Inventory & Assets',
      'Multi-site dashboards',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For large or government deployments',
    audience: 'Government & large corporate',
    features: [
      'Everything in Professional',
      'Custom infrastructure integrations',
      'Dedicated audit logs & compliance reporting',
      'Multi-factor authentication & role-based access',
      'Dedicated account team',
      'Custom SLA',
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-wide">Pricing</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
          Plans built around your operation
        </h1>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
          Every deployment is different — site count, team size, and the infrastructure you
          need to integrate all change the shape of a plan. Talk to us and we&apos;ll scope one for you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlighted
                  ? 'border-primary bg-primary/5 md:-translate-y-3 shadow-lg shadow-primary/10'
                  : 'border-border bg-card'
              }`}
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                <p className="text-sm text-muted-foreground mb-1">{tier.tagline}</p>
                <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                  {tier.audience}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`text-center px-6 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-background hover:bg-muted'
                }`}
              >
                Talk to sales
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Not sure which fits?{' '}
          <Link href="/contact" className="text-primary hover:underline">
            Tell us about your operation
          </Link>{' '}
          and we&apos;ll recommend one.
        </p>
      </section>
    </main>
  )
}
