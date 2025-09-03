"use strict";
// call.controller.ts
// This file manages all operations related to user calls, including starting, ending, and tracking call sessions.
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
exports.getCallById = exports.getCallHistory = exports.endCall = exports.startCall = void 0;
const startCall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Start a new call session between users
});
exports.startCall = startCall;
const endCall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // End the ongoing call and update call status
});
exports.endCall = endCall;
const getCallHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all past call history for a user
});
exports.getCallHistory = getCallHistory;
const getCallById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get details of a specific call by callId
});
exports.getCallById = getCallById;
//# sourceMappingURL=call.controller.js.map