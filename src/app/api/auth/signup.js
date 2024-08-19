import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUser } from '../../../utils/userHelper';

export async function POST(request) {
  const { name, email, password, role } = await request.json();

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({ message: 'Signup successful', user: newUser });
  } catch (err) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
