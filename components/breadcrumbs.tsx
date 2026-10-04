import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-6">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />}
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
