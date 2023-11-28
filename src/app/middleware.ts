import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env['NEXTAUTH_SECRET'],
  });

  if (session) {
    const headers = new Headers(req.headers);
    headers.set('userId', session.sub as string);
    return NextResponse.next({ headers });
  }

  return new NextResponse('Not Authenticated', { status: 401 });
}
