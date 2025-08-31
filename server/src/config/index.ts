import dotenv from "dotenv"
dotenv.config();

let config = {
  DATA_BASE_URI: process.env.DATABASE_URI || null,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || null,
  PORT: process.env.PORT || 3000,
  VERSION: process.env.VERSION || "V1",
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY || null,
  DOMAIN: process.env.DOMAIN || "localhost",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || null,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || null,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3000/V1",
  NODE_ENV: process.env.NODE_ENV || "development",
};

// console.log(config);


export default config;