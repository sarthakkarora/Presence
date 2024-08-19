import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getAllEmployees, addEmployee } from '../../../utils/userHelper';

export async function GET(request) {
  ensureAuthenticated(request);

  // Fetch all employees
  try {
    const employees = await getAllEmployees();
    return NextResponse.json(employees);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}

export async function POST(request) {
  ensureAuthenticated(request);

  const { name, email, password, role } = await request.json();

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add a new employee
    const newEmployee = await addEmployee({
      name,
      email,
      password: hashedPassword,
      role
    });

    return NextResponse.json({ message: 'Employee added successfully', employee: newEmployee });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add employee' }, { status: 500 });
  }
}
