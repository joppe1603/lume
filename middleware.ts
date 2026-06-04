import { NextRequest, NextResponse } from 'next/server'

const ADMIN_COOKIE = 'mauyi_admin'
const LOGIN_PATH = '/admin/login'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only protect /admin/* routes (except the login page itself)
  if (!pathname.startsWith('/admin') || pathname === LOGIN_PATH) {
    return NextResponse.next()
  }

  const cookie = req.cookies.get(ADMIN_COOKIE)
  const isAuthed = cookie?.value === process.env.ADMIN_KEY

  if (!isAuthed) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = LOGIN_PATH
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
