import mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema({
  location: String,
  checkin_time: String,
  checkout_time: { type: String, default: null },
  total_hours: { type: Number, default: 0 }, // Add this field

});

const HistorySchema = new mongoose.Schema({
  date: String,
  entries: [EntrySchema],
});

const EmployeeAttendanceSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  history: [HistorySchema],
});

const EmployeeAttendance =
  mongoose.models.EmployeeAttendance ||
  mongoose.model('EmployeeAttendance', EmployeeAttendanceSchema);

export default EmployeeAttendance;
