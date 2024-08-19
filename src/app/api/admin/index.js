import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getAllAdmins, addAdmin } from '../../../utils/userHelper';

export async function GET(request) {
  ensureAuthenticated(request);

  // Fetch all admins
  const admins = await getAllAdmins();
  return NextResponse.json(admins);
}

export async function POST(request) {
  ensureAuthenticated(request);

  const { name, email, role } = await request.json();

  // Add a new admin
  const newAdmin = await addAdmin({ name, email, role });

  return NextResponse.json({ message: 'Admin added successfully', admin: newAdmin });
}
