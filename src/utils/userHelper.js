import Employee from '../models/Employee';
import Admin from '../models/Admin';
import Moderator from '../models/Moderator';
import Attendance from '../models/Attendance';

export async function getAllEmployees() {
  return Employee.find();
}

export async function addEmployee(employee) {
  return Employee.create(employee);
}

export async function getEmployeeById(id) {
  return Employee.findById(id);
}

export async function updateEmployee(id, updates) {
  return Employee.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteEmployee(id) {
  return Employee.findByIdAndDelete(id);
}

export async function getAllAdmins() {
  return Admin.find();
}

export async function addAdmin(admin) {
  return Admin.create(admin);
}

export async function getAdminById(id) {
  return Admin.findById(id);
}

export async function updateAdmin(id, updates) {
  return Admin.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteAdmin(id) {
  return Admin.findByIdAndDelete(id);
}

export async function getAllModerators() {
  return Moderator.find();
}

export async function addModerator(moderator) {
  return Moderator.create(moderator);
}

export async function getModeratorById(id) {
  return Moderator.findById(id);
}

export async function updateModerator(id, updates) {
  return Moderator.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteModerator(id) {
  return Moderator.findByIdAndDelete(id);
}

export async function getAttendancesByEmployeeId(employeeId) {
  return Attendance.find({ employeeId });
}

export async function addAttendance(attendance) {
  return Attendance.create(attendance);
}

export async function getAttendanceById(id) {
  return Attendance.findById(id);
}

export async function updateAttendance(id, updates) {
  return Attendance.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteAttendance(id) {
  return Attendance.findByIdAndDelete(id);
}
