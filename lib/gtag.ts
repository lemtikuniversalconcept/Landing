declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Safe no-op if gtag hasn't loaded yet (blocked script, ad blocker, or fired
// before the GA4 script tag finishes) — never throws from a form submit path.
export function trackGaEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}
