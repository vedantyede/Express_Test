import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: "Your firstname is required",
      max: 25,
    },
    lastName: {
      type: String,
      required: "Your lastname is required",
      max: 25,
    },
    email: {
      type: String,
      required: "Your email is required",
      unique: true,
      lowercase: true,
      trim: true,
      max: 25,
    },
    password: {
      type: String,
      required: "Your password is required",
      select: false,
      max: 25,
    },
    role: {
      type: String,
      required: "Your role is required",
      default: "0x01",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);