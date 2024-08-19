import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getEmployeeById, updateEmployee, deleteEmployee } from '../../../utils/userHelper';

export async function GET(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  try {
    // Fetch an employee by ID
    const employee = await getEmployeeById(id);

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch employee' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;
  const { name, email, role } = await request.json();

  try {
    // Update employee details
    const updatedEmployee = await updateEmployee(id, { name, email, role });

    if (!updatedEmployee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update employee' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  ensureAuthenticated(request);

  const { id } = params;

  try {
    // Delete an employee
    const result = await deleteEmployee(id);

    if (!result) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete employee' }, { status: 500 });
  }
}
