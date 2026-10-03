import { siteUrl, siteName } from './seo'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/apple-icon`,
    // No verified social profiles exist yet. Add real ones here (sameAs: [...])
    // once Lemtik has live Twitter/X, LinkedIn, etc. profile URLs — do not
    // fabricate placeholder links.
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    // No on-site search exists, so no potentialAction/SearchAction here.
  }
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    url: `${siteUrl}/platform`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Civilian-grade command and control platform for security operations — incident management, patrol operations, operational intelligence, routing and dispatch, and inventory tracking in one system.',
    // Pricing is sales-led and scoped per deployment (see /pricing) — no fixed
    // public price exists, so no `offers` here. No real user ratings exist
    // either, so no aggregateRating/review. Do not fabricate either.
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}
