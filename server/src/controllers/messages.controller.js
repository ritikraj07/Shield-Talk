"use strict";
/**
 * message.controller.ts
 *
 * Handles sending and retrieving chat messages.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
exports.allMessages = allMessages;
exports.singleMessage = singleMessage;
// Sends a new message
function sendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Fetches all messages of a chat
function allMessages(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Fetches a single message
function singleMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
//# sourceMappingURL=messages.controller.js.map