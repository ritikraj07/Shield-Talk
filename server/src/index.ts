// index.ts
// 📌 Entry point of the application – starts the server and listens on a port

import app from "./app";
import dotenv from "dotenv";
import { connectDatabase } from "./db";
import config from "./config";

dotenv.config();

const PORT = config.PORT;
const version = config.VERSION;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/${version}`);
  });

})
