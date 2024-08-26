import  connectToDatabase  from '@/config/mongoose';
import EmployeeAttendance from '@/models/EmployeeAttendance';

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email, date } = await req.json();

    if (!email || !date) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email and date are required' }),
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

    // Find the record for the specific date
    const recordForDate = employeeRecord.history.find(
      (record) => record.date === date
    );

    // Check if there is an attendance record for the specified date
    if (!recordForDate) {
      return new Response(
        JSON.stringify({ success: false, message: 'No record found for the specified date' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: recordForDate.entries }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching attendance by email and date:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server error', error: error.message }),
      { status: 500 }
    );
  }
}
