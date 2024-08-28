import  connectToDatabase  from '@/config/mongoose';
import EmployeeAttendance from '@/models/EmployeeAttendance';

export async function POST(req) {
  try {
    await connectToDatabase();

    const { email, location, checkin_time } = await req.json();
    const date = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    if (!email || !location || !checkin_time) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Find the existing attendance record for the employee
    let employeeRecord = await EmployeeAttendance.findOne({ email });

    if (employeeRecord) {
      // Check if there's already a record for the current date
      const existingRecord = employeeRecord.history.find(
        (record) => record.date === date
      );

      if (existingRecord) {
        // If a record for today exists, add the new check-in entry
        existingRecord.entries.push({
          location,
          checkin_time,
          checkout_time: null, // Initialize with null
        });
      } else {
        // If no record for today exists, create a new record
        employeeRecord.history.push({
          date,
          entries: [
            {
              location,
              checkin_time,
              checkout_time: null, // Initialize with null
            },
          ],
        });
      }

      await employeeRecord.save();
    } else {
      // If the employee does not exist in the database, create a new document
      const newEmployee = new EmployeeAttendance({
        email,
        history: [
          {
            date,
            entries: [
              {
                location,
                checkin_time,
                checkout_time: null, // Initialize with null
              },
            ],
          },
        ],
      });

      await newEmployee.save();
    }

    return new Response(
      JSON.stringify({ message: 'Check-in recorded successfully' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Server error', error: error.message }),
      { status: 500 }
    );
  }
}