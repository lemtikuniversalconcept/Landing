'use client'

export function SubscribeForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Subscribe logic here
  }

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  )
}
