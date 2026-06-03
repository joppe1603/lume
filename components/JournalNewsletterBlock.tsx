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
    <div className="my-12 bg-[#1A1A1A] rounded-2xl overflow-hidden">

      {/* Top label strip */}
      <div className="bg-[#C9A96E]/10 border-b border-[#C9A96E]/20 px-7 py-3 flex items-center gap-2.5">
        <div className="w-1 h-1 rounded-full bg-[#C9A96E]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
          Exclusief voor lezers
        </span>
      </div>

      {/* Body */}
      <div className="px-7 py-8">
        <p
          className="text-[24px] font-semibold text-white leading-snug mb-2"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          15% korting op je eerste bestelling
        </p>
        <p className="text-[13px] text-stone-400 font-light leading-relaxed mb-6">
          Meld je aan voor de MAUYI nieuwsbrief en ontvang je kortingscode direct in je inbox — plus nieuwe artikelen over huid &amp; ingrediënten.
        </p>

        {status === 'success' && (
          <div className="flex items-start gap-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-[#C9A96E]/20 flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4.5 7.5L8.5 2.5" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[14px] text-white font-medium mb-0.5">Je kortingscode is onderweg!</p>
              <p className="text-[13px] text-stone-400 font-light">Check je inbox — de code staat in je mail.</p>
            </div>
          </div>
        )}

        {status === 'duplicate' && (
          <p className="text-[13px] text-stone-400 font-light">
            Dit e-mailadres staat al op de lijst. De code staat in je eerdere mail.
          </p>
        )}

        {(status === 'idle' || status === 'loading' || status === 'error') && (
          <>
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
                {status === 'loading' ? 'Moment...' : 'Claim 15% korting'}
              </button>
            </form>
            {status === 'error' && (
              <p className="mt-2 text-[12px] text-red-400">Er ging iets mis. Probeer het opnieuw.</p>
            )}
            <p className="text-[11px] text-stone-600 mt-3">
              Geen spam. Je kunt je altijd afmelden.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
