import Leave from '@/models/Leaves';
import connectToDatabase from '@/config/mongoose';

export async function GET(req) {
  await connectToDatabase();

  const url = new URL(req.url);
  const email = url.searchParams.get('email');

  if (!email) {
    return new Response(
      JSON.stringify({ success: false, message: 'Email is required' }),
      { status: 400 }
    );
  }

  try {
    const leaveRecord = await Leave.findOne({ email });

    if (!leaveRecord) {
      return new Response(
        JSON.stringify({ success: false, message: 'Employee not found' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, remainingLeaves: leaveRecord.remainingLeaves }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
