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
exports.verify2FA = exports.generate2FA = void 0;
const speakeasy_1 = __importDefault(require("speakeasy"));
const qrcode_1 = __importDefault(require("qrcode"));
const generate2FA = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = speakeasy_1.default.generateSecret({ name: `MyApp (${username})` });
    const qrCode = yield qrcode_1.default.toDataURL(secret.otpauth_url || "");
    return {
        base32: secret.base32,
        otpauth_url: secret.otpauth_url,
        qrCode, // frontend will display this
    };
});
exports.generate2FA = generate2FA;
const verify2FA = (token, userSecret) => {
    return speakeasy_1.default.totp.verify({
        secret: userSecret,
        encoding: "base32",
        token,
        window: 1,
    });
};
exports.verify2FA = verify2FA;
//# sourceMappingURL=2fa.js.map