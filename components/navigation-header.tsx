'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

  const platformMenu = [
    { label: 'Unified Command Centre', href: '/platform#unified' },
    { label: 'Incident Management', href: '/platform#incident' },
    { label: 'Patrol Operations', href: '/platform#patrol' },
    { label: 'Operational Intelligence', href: '/platform#intelligence' },
    { label: 'Routing & Dispatch', href: '/platform#routing' },
    { label: 'Inventory & Assets', href: '/platform#inventory' },
    { label: 'Operational Dashboards', href: '/platform#dashboards' },
    { label: 'Integrations', href: '/platform/integrations' },
    { label: 'Security & Compliance', href: '/platform/security' },
  ]

  const solutionsMenu = [
    { label: 'Estates & Properties', href: '/solutions/estates' },
    { label: 'Hotels & Hospitality', href: '/solutions/hospitality' },
    { label: 'Corporate Offices', href: '/solutions/corporate' },
    { label: 'Government', href: '/solutions/government' },
    { label: 'Critical Infrastructure', href: '/solutions/critical-infrastructure' },
    { label: 'Retail & Commercial', href: '/solutions/retail' },
    { label: 'Industrial & Manufacturing', href: '/solutions/industrial' },
    { label: 'Protected Movement', href: '/solutions/protected-movement' },
    { label: 'View All Solutions', href: '/solutions' },
  ]

  const aiMenu = [
    { label: 'Intelligence Engine', href: '/platform/intelligence' },
    { label: 'Inventory Service', href: '/platform#inventory' },
    { label: 'Route Calculator', href: '/platform#routing' },
    { label: 'Proximity Finder', href: '/platform#routing' },
    { label: 'Autonomous Control', href: '/platform/autonomous' },
    { label: 'Master AI Agent', href: '/platform/dispatch' },
    { label: 'How AI Works', href: '/ai' },
  ]

  const companyMenu = [
    { label: 'About Lemtik', href: '/about' },
    { label: 'Our Mission', href: '/mission' },
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'Guides & Checklists', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const mainMenuItems: { label: string; href: string; submenu?: typeof platformMenu }[] = [
    { label: 'Platform', href: '/platform', submenu: platformMenu },
    { label: 'Solutions', href: '/solutions', submenu: solutionsMenu },
    { label: 'AI', href: '/ai', submenu: aiMenu },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Company', href: '/about', submenu: companyMenu },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <span className="text-lg font-bold text-foreground">Lemtik</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 ml-12">
          {mainMenuItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenMegaMenu(item.label)}
              onMouseLeave={() => setOpenMegaMenu(null)}
              onFocus={() => setOpenMegaMenu(item.label)}
              onBlur={() => setOpenMegaMenu(null)}
            >
              <button
                aria-expanded={item.submenu ? openMegaMenu === item.label : undefined}
                className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded group-hover:bg-muted/50"
              >
                {item.label}
                {item.submenu && <ChevronDown size={16} className="opacity-60" />}
              </button>

              {/* Mega Menu Dropdown */}
              {item.submenu && (
                <AnimatePresence>
                  {openMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-max mt-0 bg-card border border-border rounded-lg shadow-lg p-6 min-w-xs"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors text-sm"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {mainMenuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="mt-2 ml-4 space-y-1 border-l border-muted pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded text-sm text-center hover:bg-primary/90 transition-colors"
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
