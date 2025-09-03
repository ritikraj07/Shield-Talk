"use strict";
// match.controller.ts
// This file manages user matches – pairing users, viewing matches, and handling match logic.
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
exports.deleteMatch = exports.getMatchesByUserId = exports.getAllMatches = exports.createMatch = void 0;
const createMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new match between two users
});
exports.createMatch = createMatch;
const getAllMatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin/user fetches all matches (for analytics or viewing)
});
exports.getAllMatches = getAllMatches;
const getMatchesByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch all matches related to a specific user
});
exports.getMatchesByUserId = getMatchesByUserId;
const deleteMatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Delete or unmatch two users
});
exports.deleteMatch = deleteMatch;
//# sourceMappingURL=match.controller.js.map