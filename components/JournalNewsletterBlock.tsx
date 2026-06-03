'use client'

import { useState } from 'react'

export default function JournalNewsletterBlock({ slug }: { slug: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: `journal-${slug}` }),
      })
      const data = await res.json()
      if (!res.ok) { setStatus('error'); return }
      setStatus(data.duplicate ? 'duplicate' : 'success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="my-12 bg-[#1A1A1A] rounded-2xl px-7 py-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E] mb-3">
        MAUYI Journal
      </p>
      <p className="text-[20px] font-semibold text-white leading-snug mb-2"
        style={{ fontFamily: 'var(--font-cormorant)' }}>
        Meer lezen over huid &amp; ingrediënten?
      </p>
      <p className="text-[13px] text-stone-400 font-light leading-relaxed mb-6">
        Ontvang nieuwe artikelen en updates van MAUYI direct in je inbox. Geen reclame, geen dagelijkse mails.
      </p>

      {status === 'success' && (
        <p className="text-[13px] text-[#C9A96E] font-medium">
          Je staat op de lijst. We horen van ons.
        </p>
      )}
      {status === 'duplicate' && (
        <p className="text-[13px] text-stone-400 font-light">
          Dit e-mailadres staat al op de lijst.
        </p>
      )}
      {(status === 'idle' || status === 'loading' || status === 'error') && (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="jouw@email.nl"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-[13px] text-white placeholder:text-stone-500 outline-none focus:border-[#C9A96E] transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 bg-[#C9A96E] text-[#1A1A1A] text-[13px] font-semibold px-6 py-3 rounded-xl hover:bg-[#b8965d] transition-colors disabled:opacity-60"
          >
            {status === 'loading' ? 'Moment...' : 'Aanmelden'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-[12px] text-red-400">Er ging iets mis. Probeer het opnieuw.</p>
      )}
    </div>
  )
}
