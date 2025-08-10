import mongoose from "mongoose";
import config from "../config/index";

const DATABASE_URI = config.DATA_BASE_URI;
const MAX_RETRIES = 5;
let retryCount = 0;



/**
 * Handles all MongoDB connection logic with retry mechanism.
 * Adds listeners for DB events like disconnected, error, etc.
 */
export async function connectDatabase(): Promise<void> {
  mongoose.set("strictQuery", true);

  const connectWithRetry = async (): Promise<void> => {
    try {
      console.log(
        `🔁 Attempting MongoDB connection (${retryCount + 1}/${MAX_RETRIES})...`
      );
      await mongoose.connect(DATABASE_URI);
      console.log("✅ MongoDB connected successfully.");
    } catch (error) {
      retryCount++;
      console.error("❌ MongoDB connection failed:", error.message);

      if (retryCount < MAX_RETRIES) {
        console.log("⏳ Retrying in 10 seconds...");
        setTimeout(connectWithRetry, 10000);
      } else {
        console.error("❗️Max retries reached. Exiting.");
        process.exit(1);
      }
    }
  };

  // Event listeners (fire only once per app lifetime)
  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected.");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔄 MongoDB reconnected.");
  });

  mongoose.connection.on("error", (err) => {
    console.error("🔥 MongoDB error:", err);
  });

  await connectWithRetry();

  // Log after everything is done
  console.log("📦 connectDatabase() setup complete.");
}
