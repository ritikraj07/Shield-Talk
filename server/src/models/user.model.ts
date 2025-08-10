import { model } from "mongoose";
import { IUser } from "../types/user.type";
import { userSchema } from "../schemas/user.schema";

// ✅ Use IUser, not UserDocument
const User = model<IUser>("User", userSchema);

export default User;
