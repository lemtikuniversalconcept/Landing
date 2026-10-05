'use client'

import Script from 'next/script'

// Loaded only on pages that pass this in (Contact, Pricing) rather than
// sitewide — matches what was actually asked for, and keeps the widget
// off pages where it'd just be noise.
export function TawkWidget() {
  return (
    <Script id="tawk-to-widget" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/6ac39dd070487334c93b5f14/1k4620uai';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  )
}
