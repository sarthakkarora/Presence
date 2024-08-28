import mongoose from 'mongoose';

const LeaveSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dates: [{
    date: {
      type: Date,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    }
  }],
  remainingLeaves: {
    type: Number,
    default: 24,
  },
}, { timestamps: true });

LeaveSchema.methods.updateRemainingLeaves = function () {
  const approvedLeaves = this.dates.filter(entry => entry.isApproved).length;
  this.remainingLeaves = 24 - approvedLeaves;
  return this.save();
};

export default mongoose.models.Leave || mongoose.model('Leave', LeaveSchema);
