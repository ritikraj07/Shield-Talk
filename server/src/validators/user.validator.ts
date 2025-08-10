import { z } from "zod";

export const userValidator = z.object({
  name: z.string().min(1, "Name is required"),
  userName: z.string().min(3),
  age: z.number().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(6),
  provider: z.enum(["google", "facebook", "email", "phone"]).default("email"),
  deviceInfo: z.string().optional(),
  location: z.string().optional(),
  sex: z.string().optional(),
  providerId: z.string().optional(),
  avatar: z.string().optional(),
});

export type IUser = z.infer<typeof userValidator>;
export type UserInput = z.infer<typeof userValidator>;

export default userValidator;