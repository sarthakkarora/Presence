import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getModeratorById, updateModerator, deleteModerator } from '../../../utils/userHelper';

export async function GET(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  // Fetch a moderator by ID
  const moderator = await getModeratorById(id);

  if (!moderator) {
    return NextResponse.json({ error: 'Moderator not found' }, { status: 404 });
  }

  return NextResponse.json(moderator);
}

export async function PUT(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;
  const { name, email, role } = await request.json();

  // Update moderator details
  const updatedModerator = await updateModerator(id, { name, email, role });

  return NextResponse.json({ message: 'Moderator updated successfully', moderator: updatedModerator });
}

export async function DELETE(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  // Delete a moderator
  const result = await deleteModerator(id);

  return NextResponse.json({ message: 'Moderator deleted successfully', result });
}
