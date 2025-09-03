"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptData = encryptData;
exports.decryptData = decryptData;
// utils/crypto.js (backend)
const crypto_js_1 = __importDefault(require("crypto-js"));
const SECRET_KEY = process.env.SECRET_KEY || "my-super-secret-key";
function encryptData(data) {
    console.log('==>', data);
    return crypto_js_1.default.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}
function decryptData(cipherText) {
    console.log("Decrypt ==>>", cipherText);
    const bytes = crypto_js_1.default.AES.decrypt(cipherText, SECRET_KEY);
    return JSON.parse(bytes.toString(crypto_js_1.default.enc.Utf8));
}
// import crypto from "crypto";
// const SECRET_KEY = process.env.SECRET_KEY || "my-super-secret-key";
// const ALGORITHM = "aes-256-cbc";
// const KEY = crypto.scryptSync(SECRET_KEY, "salt", 32);
// // Encrypt
// export function encryptData(data:string) {
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
//   let encrypted = cipher.update(JSON.stringify(data), "utf8", "base64");
//   encrypted += cipher.final("base64");
//   return `${iv.toString("base64")}:${encrypted}`; // iv + ciphertext
// }
// // Decrypt
// export function decryptData(cipherText:string) {
//   try {
//     const [ivStr, encrypted] = cipherText.split(":");
//     const iv = Buffer.from(ivStr, "base64");
//     const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
//     let decrypted = decipher.update(encrypted, "base64", "utf8");
//     decrypted += decipher.final("utf8");
//     return JSON.parse(decrypted);
//   } catch (err) {
//     console.error("❌ Decryption failed:", err.message);
//     return null;
//   }
// }
//# sourceMappingURL=crypto.js.map