'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'lemtik_ndpa_consent_v1'

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable — skip the banner rather than show it on
      // every load with no way to persist dismissal.
    }
  }, [])

  function dismiss() {
    try {
      localStorage.setItem(CONSENT_KEY, '1')
    } catch {
      // ignore — this visitor just sees the banner again next visit
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          We use privacy-friendly, cookieless analytics, and store what you submit through our
          forms (name, email, and message) in line with the Nigeria Data Protection Act. See our{' '}
          <Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 whitespace-nowrap rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
