import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080d1a',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            backgroundColor: '#00d4ff',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
