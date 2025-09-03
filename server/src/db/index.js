"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../config/index"));
const DATABASE_URI = index_1.default.DATA_BASE_URI;
const MAX_RETRIES = 5;
let retryCount = 0;
/**
 * Handles all MongoDB connection logic with retry mechanism.
 * Adds listeners for DB events like disconnected, error, etc.
 */
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.set("strictQuery", true);
        const connectWithRetry = () => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`🔁 Attempting MongoDB connection (${retryCount + 1}/${MAX_RETRIES})...`);
                yield mongoose_1.default.connect(DATABASE_URI);
                console.log("✅ MongoDB connected successfully.");
            }
            catch (error) {
                retryCount++;
                console.error("❌ MongoDB connection failed:", error.message);
                if (retryCount < MAX_RETRIES) {
                    console.log("⏳ Retrying in 10 seconds...");
                    setTimeout(connectWithRetry, 10000);
                }
                else {
                    console.error("❗️Max retries reached. Exiting.");
                    process.exit(1);
                }
            }
        });
        // Event listeners (fire only once per app lifetime)
        mongoose_1.default.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected.");
        });
        mongoose_1.default.connection.on("reconnected", () => {
            console.log("🔄 MongoDB reconnected.");
        });
        mongoose_1.default.connection.on("error", (err) => {
            console.error("🔥 MongoDB error:", err);
        });
        yield connectWithRetry();
        // Log after everything is done
        console.log("📦 connectDatabase() setup complete.");
    });
}
//# sourceMappingURL=index.js.map