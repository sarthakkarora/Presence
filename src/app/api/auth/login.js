import { NextResponse } from 'next/server';
import passport from '../../../middleware/passport';
import { promisify } from 'util';

export async function POST(request) {
  const body = await request.json();

  // Promisify Passport's authenticate method
  const authenticate = promisify(passport.authenticate('local'));

  try {
    // Authenticate using Passport
    const user = await authenticate(body);

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Manually log in the user
    request.login(user, (err) => {
      if (err) {
        return NextResponse.json({ error: 'Error logging in' }, { status: 500 });
      }
    });

    return NextResponse.json({ message: 'Login successful', user });
  } catch (err) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
