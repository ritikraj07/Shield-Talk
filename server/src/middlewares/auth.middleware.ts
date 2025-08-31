import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../controllers/token.controller";

export const protect = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const admin = (req: any, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};


export const verifyUser = (req: any, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = verifyAccessToken(token);
    // console.log("decoded from auth.middleware", decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}