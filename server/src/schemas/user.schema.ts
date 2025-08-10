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
    sex: { type: String },
    providerId: { type: String },
    twoFASecret: { type: String },
    avatar: { type: String },
  },
  { timestamps: true }
);

