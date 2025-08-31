/**
 * user.controller.ts
 *
 * This file handles all user-related operations like registration, login, profile management, and authentication.
 */

import { Request, Response } from "express";
import User from "../models/user.model";
import { verifyAccessToken } from "./token.controller";



// This function gets the logged-in user's profile
export async function getUserProfile(req: any, res: Response) {
  try {
    // console.log("req.user", req.user);
    const id = req.user._id
    // console.log("id", id);
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUserProfile:", error);

    // More specific error handling
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid access token" });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Access token expired" });
    }

    return res.status(500).json({
      message: "Internal server error",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    });
  }
}

// This function updates user profile info (name, avatar, gender, etc.)
export async function updateUserProfile(req: Request, res: Response) {
  try {

  }catch (error) {}
}

// This function changes user password after verifying old password
export async function changePassword(req: Request, res: Response) {}
