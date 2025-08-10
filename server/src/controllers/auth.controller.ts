/**
 * auth.controller.ts
 *
 * Handles separate auth operations (login/register/logout/refresh).
 */

import { generate2FA, verify2FA } from "../config/2fa";
import { Request, Response } from "express";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config";
import { hashPassword } from "../utils/hash";


// save hashedPwd instead of plain password


// Login user and return token
export async function login(req: Request, res: Response) {
  try {
    let { email, password, userName } = req.body;
    const hashedPwd = await hashPassword(password);
    let user = await User.findOne({
      $and: [
        { $or: [{ email: email }, { userName: userName }] },
        { password: hashedPwd },
      ],
    });

    if (user) {
      return res
        .status(200)
        .json({ message: "User logged in successfully", user });
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

// Register new user
export async function register(req: Request, res: Response) {
  try {
    const { email, name, provider, providerId, avatar } = req.body;
    const isUserExits = await User.findOne({ email });
    if (isUserExits) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      email,
      name,
      provider,
      providerId,
      avatar,
    });
    return res
      .status(200)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

// Logout user
export async function logout(req: Request, res: Response) {
  try {
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

// Refresh access token
export async function refreshToken(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }
    jwt.verify(refreshToken, process.env.REFRESH_SECRET!, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }
      const accessToken = jwt.sign(user, config.JWT_SECRET_KEY, {
        expiresIn: "15d",
      });
      return res.status(200).json({ accessToken });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}


async function CreateToken(userId: string) {
    try {
        return jwt.sign({ userId }, config.JWT_SECRET_KEY, {
          expiresIn: "15d",
          algorithm: "HS256",
        });
        
    } catch (error) {
        console.error("Error creating token:", error);
        return null;
    }
}



// fake DB for demo
let fakeUserDB = {
  id: "123",
  username: "ritik",
  password: "hashedpass",
  twoFASecret: "",
  is2FAEnabled: false,
};

// STEP 1: Generate and show QR Code
export const get2FAQr = async (req: Request, res: Response) => {
  const { qrCode, base32 } = await generate2FA(fakeUserDB.username);

  fakeUserDB.twoFASecret = base32; // Save to DB

  res.json({ qrCode });
};

// STEP 2: Verify OTP from Google Authenticator
export const verify2FAToken = (req: Request, res: Response) => {
  const { token } = req.body;

  const isValid = verify2FA(token, fakeUserDB.twoFASecret);

  if (isValid) {
    fakeUserDB.is2FAEnabled = true;
    return res.json({ success: true, msg: "2FA Verified" });
  } else {
    return res.status(400).json({ success: false, msg: "Invalid token" });
  }
};
