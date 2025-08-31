import jwt from "jsonwebtoken";
import config from "../config";
const { JWT_SECRET_KEY } = config;


export const generateTokens = (user: any) => {
  const loginToken = jwt.sign(user, JWT_SECRET_KEY, {
    expiresIn: "2m",
  })
  const accessToken = jwt.sign(user, JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  const refreshToken = jwt.sign(user, JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  console.log("accessToken", accessToken);
  // console.log("refreshToken", refreshToken);
  // console.log("loginToken", loginToken);

  return { accessToken, refreshToken, loginToken };
};

export const verifyAccessToken = (token: string): { user: any } => {
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY!);
    // console.log("decoded", decoded);
    // Type assertion
    return decoded as { user: any };
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};