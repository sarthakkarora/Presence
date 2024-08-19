import { NextResponse } from 'next/server';

export async function POST(request) {
  request.logout((err) => {
    if (err) {
      return NextResponse.json({ error: 'Error logging out' }, { status: 500 });
    }
  });

  return NextResponse.json({ message: 'Logout successful' });
}
