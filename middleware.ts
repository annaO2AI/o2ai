import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');

  if (host === 'o2aicorp.com') {
    return NextResponse.redirect(
      new URL(req.nextUrl.pathname + req.nextUrl.search, 'https://www.o2aicorp.com'),
      301
    );
  }
}