'use client'

import { useActionState } from 'react'
import type { ReactNode } from 'react'
import { subscribeToNewsletter, type FormState } from '@/app/actions'
import { Lock } from 'lucide-react'

const initialState: FormState = { status: 'idle' }

export function GatedContent({ source, children }: { source: string; children: ReactNode }) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState)

  if (state.status === 'success') {
    return <>{children}</>
  }

  return (
    <div className="rounded-lg border border-border bg-card p-8 text-center">
      <Lock aria-hidden="true" className="h-8 w-8 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">Enter your email to unlock the full guide</h3>
      <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
        We&apos;ll also send occasional product updates — unsubscribe anytime, no spam.
      </p>
      <form action={formAction} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="hidden" name="source" value={source} />
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-3 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {pending ? 'Unlocking…' : 'Unlock Guide'}
        </button>
      </form>
      {state.status === 'error' && (
        <p className="text-sm text-destructive mt-3">{state.message}</p>
      )}
    </div>
  )
}
