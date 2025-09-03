"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.generateTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const { JWT_SECRET_KEY } = config_1.default;
const generateTokens = (user) => {
    const loginToken = jsonwebtoken_1.default.sign(user, JWT_SECRET_KEY, {
        expiresIn: "2m",
    });
    const accessToken = jsonwebtoken_1.default.sign(user, JWT_SECRET_KEY, {
        expiresIn: "24h",
    });
    const refreshToken = jsonwebtoken_1.default.sign(user, JWT_SECRET_KEY, {
        expiresIn: "7d",
    });
    console.log("accessToken", accessToken);
    // console.log("refreshToken", refreshToken);
    // console.log("loginToken", loginToken);
    return { accessToken, refreshToken, loginToken };
};
exports.generateTokens = generateTokens;
const verifyAccessToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET_KEY);
        // console.log("decoded", decoded);
        // Type assertion
        return decoded;
    }
    catch (error) {
        throw new Error("Invalid or expired token");
    }
};
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=token.controller.js.map