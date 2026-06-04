import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { renderJournalNewsletterEmail } from '@/emails/JournalNewsletter'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.mauyi.nl'

// POST /api/admin/send-newsletter
// Header: x-admin-password: <ADMIN_PASSWORD>
// Body (optional): { "issue": 1 }
//
// Verstuurt de Journal nieuwsbrief naar alle waitlist-inschrijvingen.

export async function POST(req: NextRequest) {
  const password = req.headers.get('x-admin-password')
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let issueNumber = 1
  try {
    const body = await req.json()
    if (body?.issue) issueNumber = Number(body.issue)
  } catch {}

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
  const resend = new Resend(process.env.RESEND_API_KEY!)

  // Fetch all waitlist entries
  const { data: entries, error } = await supabase
    .from('waitlist')
    .select('id, email')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!entries || entries.length === 0) {
    return NextResponse.json({ sent: 0, message: 'Geen inschrijvingen gevonden.' })
  }

  const BATCH_SIZE = 100
  let sent = 0

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE)

    const emails = await Promise.all(
      batch.map(async (entry) => ({
        from: process.env.RESEND_FROM_EMAIL!,
        to: entry.email,
        subject: 'MAUYI Journal — wat 80% van huidveroudering veroorzaakt',
        html: await renderJournalNewsletterEmail(BASE_URL, entry.email, issueNumber),
      })),
    )

    await resend.batch.send(emails)
    sent += batch.length
  }

  return NextResponse.json({ sent, message: `Nieuwsbrief verstuurd naar ${sent} mensen.` })
}
