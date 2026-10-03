'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Rocket, X } from 'lucide-react'

const SEEN_KEY = 'lemtik_funding_popup_seen_v1'

export function FundingPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return
    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(SEEN_KEY, '1')
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-lg border border-border bg-background p-6 shadow-lg"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-sm p-1 text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-primary/15">
              <Rocket className="h-5 w-5 text-primary" />
            </div>

            <h2 className="mt-3 text-lg font-semibold leading-none tracking-tight text-foreground">
              We&apos;re raising our pre-seed round
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Lemtik is pre-revenue and onboarding pilot partners &mdash; estates, hotels,
              and institutions in Lagos replacing WhatsApp-group security operations with
              a real command and control platform. We&apos;re raising $100k to fund our
              first pilot. If you&apos;re an investor, operator, or just curious how it
              works, we&apos;d welcome the conversation.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2">
              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-md border border-border bg-muted/30 px-4 py-2 text-sm hover:bg-muted/50"
              >
                Maybe later
              </button>
              <a
                href="mailto:amisuhikmot@gmail.com?subject=Lemtik%20Security%20—%20Investor%20Interest"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
