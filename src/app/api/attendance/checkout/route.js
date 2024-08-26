import  connectToDatabase  from '@/config/mongoose';
import EmployeeAttendance from '@/models/EmployeeAttendance';
import calculateWorkingHours  from '@/utils/calculateWorkingHours';

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email, checkout_time } = await req.json();
    const date = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    if (!email || !checkout_time) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Find the existing attendance record for the employee
    let employeeRecord = await EmployeeAttendance.findOne({ email });

    if (!employeeRecord) {
      return new Response(
        JSON.stringify({ message: 'Employee record not found' }),
        { status: 404 }
      );
    }

    // Find the record for the current date
    const existingRecord = employeeRecord.history.find(
      (record) => record.date === date
    );

    if (!existingRecord) {
      return new Response(
        JSON.stringify({ message: 'No record found for today' }),
        { status: 404 }
      );
    }

    // Find the latest check-in entry (assuming one entry per location per day)
    const entry = existingRecord.entries
      .filter(entry => !entry.checkout_time) // Find entries without checkout_time
      .sort((a, b) => new Date(b.checkin_time) - new Date(a.checkin_time))[0]; // Sort by checkin_time descending

    if (!entry) {
      return new Response(
        JSON.stringify({ message: 'No check-in entry found' }),
        { status: 404 }
      );
    }

    // Update the checkout time for the latest entry
    entry.checkout_time = checkout_time;

    // Calculate total working hours
    if (entry.checkin_time && entry.checkout_time) {
      entry.total_hours = calculateWorkingHours(entry.checkin_time, entry.checkout_time);
    }

    await employeeRecord.save();

    return new Response(
      JSON.stringify({ message: 'Checkout recorded successfully' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Server error', error: error.message }),
      { status: 500 }
    );
  }
}
