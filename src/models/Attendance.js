import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  checkinTime: {
    type: Date,
    required: true,
  },
  checkoutTime: {
    type: Date,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
