import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getAllModerators, addModerator } from '../../../utils/userHelper';

export async function GET(request) {
  ensureAuthenticated(request);

  // Fetch all moderators
  const moderators = await getAllModerators();
  return NextResponse.json(moderators);
}

export async function POST(request) {
  ensureAuthenticated(request);

  const { name, email, role } = await request.json();

  // Add a new moderator
  const newModerator = await addModerator({ name, email, role });

  return NextResponse.json({ message: 'Moderator added successfully', moderator: newModerator });
}
