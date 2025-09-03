"use strict";
// admin.controller.ts
// This file handles all admin-related operations such as blocking users, getting user list, etc.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserById = exports.getAllUsers = exports.unblockUser = exports.blockUser = void 0;
const blockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Block a user by admin
});
exports.blockUser = blockUser;
const unblockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Unblock a user
});
exports.unblockUser = unblockUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get list of all users (admin view)
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get single user details by userId
});
exports.getUserById = getUserById;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Delete a user by admin
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=admin.controller.js.map