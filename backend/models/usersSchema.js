import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
