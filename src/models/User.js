import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg",
  },
  role: { type: String, default: "employee" },
  isOAuth: { type: Boolean, default: false },
});

// Remove the pre-save hook as it's not necessary with the changes we've made

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
