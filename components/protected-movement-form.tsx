'use client'

import { useActionState, useEffect } from 'react'
import { track } from '@vercel/analytics'
import { trackGaEvent } from '@/lib/gtag'
import { submitProtectedMovementInterest, type FormState } from '@/app/actions'

const initialState: FormState = { status: 'idle' }

function RadioGroup({
  name,
  label,
  options,
}: {
  name: string
  label: string
  options: string[]
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-foreground mb-2">{label}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 rounded border border-border bg-background px-3 py-2.5 text-sm cursor-pointer hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <input type="radio" name={name} value={option} required className="accent-primary" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function ProtectedMovementForm() {
  const [state, formAction, pending] = useActionState(submitProtectedMovementInterest, initialState)

  useEffect(() => {
    if (state.status === 'success') {
      track('protected_movement_interest_submitted')
      trackGaEvent('protected_movement_interest_submitted')
    }
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-bold mb-2">You're on the list</h3>
        <p className="text-muted-foreground">
          This is still in development — we'll reach out as soon as there's something real to show.
          Check your email for a confirmation.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@organisation.com"
          />
        </div>
      </div>

      <RadioGroup
        name="interested_as"
        label="I'm interested as"
        options={[
          'An institution (school, university)',
          'An executive protection team',
          'A corporate security team',
          'Other',
        ]}
      />

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1.5">
          Anything else? <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full px-4 py-2.5 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Optional — tell us about the specific use case you have in mind"
        />
      </div>

      {state.status === 'error' && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Join the Early Access List'}
      </button>
    </form>
  )
}
