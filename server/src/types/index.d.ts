import { IUser } from "./user.type";

declare global {
  namespace Express {
    interface User extends IUser {} // If you have a user interface
    interface Request {
      user?: User; // Make user optional since it might not exist on all requests
    }
  }
}
