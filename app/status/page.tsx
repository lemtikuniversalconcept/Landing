import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata = buildMetadata({
  title: 'Status',
  description: 'Live status of Lemtik Security public services, checked on every page load.',
  path: '/status',
})

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Status', path: '/status' },
]

// Revalidate on every request rather than caching a stale result — the
// whole point of this page is that it's checked live, not a snapshot.
export const revalidate = 0

type ServiceStatus = 'operational' | 'degraded' | 'down'

async function checkService(url: string): Promise<{ status: ServiceStatus; code?: number }> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(8000),
      cache: 'no-store',
    })
    if (res.status < 400) return { status: 'operational', code: res.status }
    if (res.status < 500) return { status: 'degraded', code: res.status }
    return { status: 'down', code: res.status }
  } catch {
    return { status: 'down' }
  }
}

const STATUS_COPY: Record<ServiceStatus, { label: string; color: string; Icon: typeof CheckCircle }> = {
  operational: { label: 'Operational', color: 'text-primary', Icon: CheckCircle },
  degraded: { label: 'Degraded', color: 'text-orange-400', Icon: AlertTriangle },
  down: { label: 'Down', color: 'text-red-400', Icon: XCircle },
}

export default async function StatusPage() {
  const services = [
    { name: 'Marketing Site', url: 'https://lemtik.com.ng' },
    { name: 'Application', url: 'https://app.lemtik.com.ng' },
  ]

  const results = await Promise.all(services.map((s) => checkService(s.url)))
  const checkedAt = new Date()
  const allOperational = results.every((r) => r.status === 'operational')

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="px-6 py-20 border-b border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-balance">Platform Status</h1>
          <p className="text-xl text-muted-foreground">
            {allOperational ? 'All systems operational' : 'Some systems are experiencing issues'}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl space-y-3">
          {services.map((service, i) => {
            const result = results[i]
            const { label, color, Icon } = STATUS_COPY[result.status]
            return (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-5"
              >
                <span className="font-semibold">{service.name}</span>
                <span className={`inline-flex items-center gap-2 text-sm font-medium ${color}`}>
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        <p className="mx-auto max-w-2xl mt-6 text-center text-sm text-muted-foreground">
          Checked live at page load — {checkedAt.toISOString()}. This page re-checks every time
          it's loaded; it doesn't yet track historical uptime. If you need a status history or
          incident log, that's planned as the platform matures past pilot stage.
        </p>
      </section>
    </main>
  )
}
