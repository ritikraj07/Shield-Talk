import { Schema } from "mongoose";
import { IUser } from "../types/user.type";

// ✅ Explicitly define the generic type here
export const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      // required: true
    },
    userName: {
      type: String,
      // required: true,
      unique: true,
    },
    age: { type: Number },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    provider: {
      type: String,
      enum: ["google", "facebook", "email", "phone"],
      required: true,
      default: "email",
    },
    deviceInfo: { type: String },
    location: { type: String },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
    },
    providerId: { type: String },
    twoFASecret: { type: String },
    avatar: { type: String },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.userName && this.email) {
    // Generate a username from email if not provided
    const baseName = this.email.split("@")[0];
    this.userName = baseName.toLowerCase() + Date.now().toString().slice(-4);
  }
  next();
})