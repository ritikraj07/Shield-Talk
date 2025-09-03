"use strict";
/**
 * auth.controller.ts
 *
 * Handles separate auth operations (login/register/logout/refresh).
 */
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
exports.verify2FAToken = exports.get2FAQr = exports.ContinueWithGoogle = void 0;
exports.login = login;
exports.register = register;
exports.logout = logout;
exports.refreshToken = refreshToken;
const _2fa_1 = require("../config/2fa");
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
// save hashedPwd instead of plain password
const ContinueWithGoogle = (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { displayName, emails, photos, provider } = profile;
        let email = emails[0].value;
        let avatar = photos[0].value;
        // First try to find the user
        let user = yield user_model_1.default.findOne({ email, provider });
        if (user) {
            // Update existing user
            user.avatar = avatar;
            user.lastLogin = new Date();
            user = yield user.save();
        }
        else {
            // Create new user
            user = yield user_model_1.default.create({
                name: displayName,
                email,
                avatar,
                provider,
                userName: displayName,
            });
        }
        return done(null, user);
    }
    catch (error) {
        return done(error, null);
    }
});
exports.ContinueWithGoogle = ContinueWithGoogle;
// Login user and return token
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("====>", req.body);
        try {
            // req.body = decryptData(req.body);
            let { email, userName, password } = req.body;
            // const hashedPwd = await hashPassword(password);
            let user = yield user_model_1.default.findOne({
                $and: [
                    { $or: [{ email: email }, { userName: userName }] },
                ],
            });
            // console.log("user", user);
            if (user) {
                if (user.password === password) {
                    return res
                        .status(200)
                        .json({ message: "User logged in successfully", user });
                }
                else {
                    return res
                        .status(300)
                        .json({ message: "Wrong Password" });
                }
            }
            else {
                return res.status(400).json({ message: "User not found" });
            }
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error", error });
        }
    });
}
// Register new user
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, name, provider, providerId, avatar } = req.body;
            const isUserExits = yield user_model_1.default.findOne({ email });
            if (isUserExits) {
                return res.status(400).json({ message: "User already exists" });
            }
            const user = yield user_model_1.default.create({
                email,
                name,
                provider,
                providerId,
                avatar,
            });
            return res
                .status(200)
                .json({ message: "User registered successfully", user });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error", error });
        }
    });
}
// Logout user
function logout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).json({ message: "User logged out successfully" });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error", error });
        }
    });
}
// Refresh access token
function refreshToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ message: "Refresh token not found" });
            }
            jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: "Invalid refresh token" });
                }
                const accessToken = jsonwebtoken_1.default.sign(user, config_1.default.JWT_SECRET_KEY, {
                    expiresIn: "15d",
                });
                return res.status(200).json({ accessToken });
            });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error", error });
        }
    });
}
function CreateToken(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return jsonwebtoken_1.default.sign({ userId }, config_1.default.JWT_SECRET_KEY, {
                expiresIn: "15d",
                algorithm: "HS256",
            });
        }
        catch (error) {
            console.error("Error creating token:", error);
            return null;
        }
    });
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
const get2FAQr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { qrCode, base32 } = yield (0, _2fa_1.generate2FA)(fakeUserDB.username);
    fakeUserDB.twoFASecret = base32; // Save to DB
    res.json({ qrCode });
});
exports.get2FAQr = get2FAQr;
// STEP 2: Verify OTP from Google Authenticator
const verify2FAToken = (req, res) => {
    const { token } = req.body;
    const isValid = (0, _2fa_1.verify2FA)(token, fakeUserDB.twoFASecret);
    if (isValid) {
        fakeUserDB.is2FAEnabled = true;
        return res.json({ success: true, msg: "2FA Verified" });
    }
    else {
        return res.status(400).json({ success: false, msg: "Invalid token" });
    }
};
exports.verify2FAToken = verify2FAToken;
//# sourceMappingURL=auth.controller.js.map