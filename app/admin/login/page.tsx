'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') ?? '/admin/orders'

  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(from)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0F0E0C] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="text-[#C9A96E] text-sm font-bold uppercase tracking-[0.25em] mb-2">MAUYI</p>
          <h1 className="text-white text-2xl font-semibold">Admin</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Wachtwoord"
              required
              autoFocus
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-[13px] text-center">Onjuist wachtwoord.</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3.5 rounded-xl text-sm font-medium bg-[#C9A96E] text-[#0F0E0C] hover:bg-[#D4B87A] transition-colors disabled:opacity-50"
          >
            {loading ? 'Inloggen...' : 'Inloggen →'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
