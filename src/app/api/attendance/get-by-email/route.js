import  connectToDatabase  from '@/config/mongoose';
import EmployeeAttendance from '@/models/EmployeeAttendance';

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email is required' }),
        { status: 400 }
      );
    }

    // Find the employee record by email
    const employeeRecord = await EmployeeAttendance.findOne({ email });

    // Check if the employee record exists
    if (!employeeRecord) {
      return new Response(
        JSON.stringify({ success: false, message: 'Employee record not found' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: employeeRecord }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching attendance by email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error', error: error.message }),
      { status: 500 }
    );
  }
}
