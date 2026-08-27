import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lemtik Security — The Operating System for African Security'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#080d1a',
          backgroundImage:
            'radial-gradient(circle at 78% 30%, rgba(0,212,255,0.22), transparent 55%), radial-gradient(circle at 15% 85%, rgba(255,107,53,0.16), transparent 50%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: '#00d4ff',
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, color: '#ffffff', letterSpacing: 1 }}>
            LEMTIK SECURITY
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          The Operating System for African Security
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#8b92a9',
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          Real-time intelligence, automated dispatch, and autonomous response.
        </div>
      </div>
    ),
    { ...size },
  )
}
