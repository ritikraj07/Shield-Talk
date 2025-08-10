import dotenv from "dotenv"
dotenv.config();

let config = {
  DATA_BASE_URI: process.env.DATABASE_URI || null,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || null,
  PORT: process.env.PORT || 5000,
  VERSION: process.env.VERSION || "V1",
};


export default config;