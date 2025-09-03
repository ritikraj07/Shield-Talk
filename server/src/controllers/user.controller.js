"use strict";
/**
 * user.controller.ts
 *
 * This file handles all user-related operations like registration, login, profile management, and authentication.
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
exports.getUserProfile = getUserProfile;
exports.updateUserProfile = updateUserProfile;
exports.changePassword = changePassword;
const user_model_1 = __importDefault(require("../models/user.model"));
// This function gets the logged-in user's profile
function getUserProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log("req.user", req.user);
            const id = req.user._id;
            // console.log("id", id);
            const user = yield user_model_1.default.findById(id).select("-password");
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            console.error("Error in getUserProfile:", error);
            // More specific error handling
            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({ message: "Invalid access token" });
            }
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Access token expired" });
            }
            return res.status(500).json({
                message: "Internal server error",
                error: process.env.NODE_ENV === "development"
                    ? error.message
                    : "Something went wrong",
            });
        }
    });
}
// This function updates user profile info (name, avatar, gender, etc.)
function updateUserProfile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) { }
    });
}
// This function changes user password after verifying old password
function changePassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
//# sourceMappingURL=user.controller.js.map