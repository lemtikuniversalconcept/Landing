'use client'

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

/**
 * Lightweight client-side A/B assignment: persists a variant per visitor in
 * localStorage, fires one 'ab_assigned' analytics event per test per visitor,
 * and returns the default variant during SSR/first paint to avoid a
 * hydration mismatch (briefly shows the default before correcting on
 * mount for returning visitors already bucketed into a different variant).
 *
 * This is a measurement primitive, not a result — it needs real traffic and
 * a real analysis of the resulting events in Vercel Analytics to mean
 * anything. It does not run or report on a test by itself.
 */
export function useABVariant(testId: string, variants: readonly string[]): string {
  const [variant, setVariant] = useState(variants[0])

  useEffect(() => {
    const key = `ab_${testId}`
    let assigned: string | null = null
    try {
      assigned = localStorage.getItem(key)
    } catch {
      // localStorage unavailable (private mode, blocked storage) — fall back
      // to an unpersisted per-page-load assignment rather than breaking.
    }

    if (!assigned || !variants.includes(assigned)) {
      assigned = variants[Math.floor(Math.random() * variants.length)]
      try {
        localStorage.setItem(key, assigned)
      } catch {
        // ignore — this visitor just won't be sticky across visits
      }
    }

    setVariant(assigned)
    track('ab_assigned', { test: testId, variant: assigned })
  }, [testId, variants])

  return variant
}

export function trackABConversion(testId: string, variant: string, action: string) {
  track('ab_conversion', { test: testId, variant, action })
}
