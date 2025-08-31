// utils/crypto.js (backend)
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.SECRET_KEY || "my-super-secret-key";

export function encryptData(data: string) {
  console.log('==>',data)
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

export function decryptData(cipherText: string) {
  console.log("Decrypt ==>>", cipherText);
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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
