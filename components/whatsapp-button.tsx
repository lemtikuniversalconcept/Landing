'use client'

const WHATSAPP_NUMBER = '2349167656667'
const DEFAULT_MESSAGE = "Hi, I'd like to talk to Lemtik Security about my security operation."

export function WhatsappButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lemtik Security on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.297-.347.446-.52.148-.174.198-.298.297-.497.099-.198.05-.371-.05-.52-.098-.149-.843-2.033-1.165-2.728-.316-.68-.636-.588-.874-.6-.223-.013-.482-.015-.74-.015-.26 0-.68.098-.98.396-.3.297-1.146 1.12-1.146 2.73 0 1.613 1.173 3.17 1.336 3.39.164.219 2.248 3.436 5.449 4.676 3.202 1.241 3.202.827 3.78.776.577-.05 1.858-.76 2.12-1.49.26-.73.26-1.357.182-1.49-.078-.133-.297-.21-.595-.36z" />
        <path d="M12.002 2C6.486 2 2 6.486 2 12.002c0 1.929.541 3.734 1.481 5.272L2.006 22l4.835-1.448A9.96 9.96 0 0 0 12.002 22C17.518 22 22 17.518 22 12.002 22 6.486 17.518 2 12.002 2zm0 18.17a8.15 8.15 0 0 1-4.397-1.278l-.315-.188-3.287.985.994-3.206-.207-.329A8.144 8.144 0 0 1 3.834 12c0-4.504 3.665-8.17 8.168-8.17 4.504 0 8.17 3.666 8.17 8.17 0 4.504-3.666 8.17-8.17 8.17z" />
      </svg>
    </a>
  )
}
