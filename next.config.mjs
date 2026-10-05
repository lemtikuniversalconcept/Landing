import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lemtik.com.ng' }],
        destination: 'https://lemtik.com.ng/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    // A pragmatic first-pass CSP, not the strictest possible (nonce-based)
    // version: Next.js' hydration bootstrap and framer-motion's runtime
    // style manipulation both need 'unsafe-inline' unless the app is
    // rewired for per-request nonces, which is a larger change than fits
    // here. Everything else is locked down for real: no external
    // script/connect targets are needed (fonts are self-hosted via
    // next/font/google, Supabase only runs server-side, Vercel Analytics
    // is served same-origin at /_vercel/insights/).
    // Tawk.to live chat (on /contact and /pricing) needs its own script,
    // websocket, frame, and image/font sources added on top of the
    // otherwise-tight baseline above.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to",
      "style-src 'self' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to",
      "img-src 'self' data: https://*.tawk.to",
      "font-src 'self' data: https://*.tawk.to",
      "connect-src 'self' https://*.tawk.to wss://*.tawk.to",
      "frame-src https://*.tawk.to",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
