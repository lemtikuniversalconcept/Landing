import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">Lemtik Security</h3>
            <p className="text-muted-foreground text-sm">
              Africa&apos;s first civilian-grade command and control platform for security teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/platform" className="hover:text-primary transition-colors">Platform</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/mission" className="hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="/newsroom" className="hover:text-primary transition-colors">Newsroom</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Lemtik Security. All rights reserved. Built in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
