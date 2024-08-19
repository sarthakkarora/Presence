import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getAdminById, updateAdmin, deleteAdmin } from '../../../utils/userHelper';

export async function GET(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  // Fetch an admin by ID
  const admin = await getAdminById(id);

  if (!admin) {
    return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
  }

  return NextResponse.json(admin);
}

export async function PUT(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;
  const { name, email, role } = await request.json();

  // Update admin details
  const updatedAdmin = await updateAdmin(id, { name, email, role });

  return NextResponse.json({ message: 'Admin updated successfully', admin: updatedAdmin });
}

export async function DELETE(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  // Delete an admin
  const result = await deleteAdmin(id);

  return NextResponse.json({ message: 'Admin deleted successfully', result });
}
