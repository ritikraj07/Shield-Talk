export interface IUser {
  name?: string;
  userName?: string;
  age?: number;
  birthYear?: number;

  email?: string;
  phone?: string;
  password?: string;

  provider?: "google" | "email" | "phone" | "github" | "linkedin" | "apple";
  providerId?: string;
  deviceInfo?: string;
  twoFASecret?: string;
  location?: string;
  sex?: string;
  avatar?: string;
}
