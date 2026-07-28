'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

  const menuItems = [
    { label: 'Platform', href: '/platform' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'AI', href: '/ai' },
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold text-foreground">Lemtik Security</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity text-sm"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded text-sm text-center hover:opacity-90 transition-opacity"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
