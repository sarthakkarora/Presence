import Leave from '@/models/Leaves';
import connectToDatabase from '@/config/mongoose';

export async function POST(req) {
  await connectToDatabase();

  const { email, date, isApproved } = await req.json();

  if (!email || !date || isApproved === undefined) {
    return new Response(
      JSON.stringify({ success: false, message: 'Email, date, and approval status are required' }),
      { status: 400 }
    );
  }

  try {
    // Convert the date to a Date object
    const dateToUpdate = new Date(date);

    // Find or create the leave record
    let leaveRecord = await Leave.findOne({ email });

    if (!leaveRecord) {
      leaveRecord = new Leave({
        email,
        dates: [{ date: dateToUpdate, isApproved }],
      });
    } else {
      // Check if the date already exists in the dates array
      let leaveEntry = leaveRecord.dates.find(entry => entry.date.getTime() === dateToUpdate.getTime());

      if (leaveEntry) {
        leaveEntry.isApproved = isApproved;
      } else {
        leaveRecord.dates.push({ date: dateToUpdate, isApproved });
      }
    }

    // Update remaining leaves count
    await leaveRecord.updateRemainingLeaves();

    return new Response(
      JSON.stringify({ success: true, message: 'Leave status updated successfully' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
