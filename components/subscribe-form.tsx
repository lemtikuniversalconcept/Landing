'use client'

import { useActionState } from 'react'
import { subscribeToNewsletter, type FormState } from '@/app/actions'

const initialState: FormState = { status: 'idle' }

export function SubscribeForm({ source = 'website' }: { source?: string }) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState)

  if (state.status === 'success') {
    return (
      <p className="text-sm text-primary font-medium">
        {state.message || "You're subscribed — thanks for following along."}
      </p>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex gap-3">
        <input type="hidden" name="source" value={source} />
        {/* Honeypot — hidden from real visitors, bots fill every field they see */}
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
          className="flex-1 px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {pending ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      {state.status === 'error' && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}
    </form>
  )
}
