'use client'

import Link from 'next/link'

export function StickyDemoBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <Link
        href="/contact"
        className="block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground"
      >
        Request a Demo
      </Link>
    </div>
  )
}
