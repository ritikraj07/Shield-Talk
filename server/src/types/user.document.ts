import { Document } from "mongoose";
import { IUser } from "./user.type";

// Combines custom user fields + Mongoose's default fields (_id, createdAt, etc)
export type UserDocument = IUser & Document;
