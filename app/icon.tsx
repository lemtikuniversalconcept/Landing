import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            backgroundColor: '#00d4ff',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
