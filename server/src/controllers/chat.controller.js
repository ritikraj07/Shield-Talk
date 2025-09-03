"use strict";
/**
 * chat.controller.ts
 *
 * Manages chat operations: create/fetch personal & group chats.
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
exports.accessChat = accessChat;
exports.fetchChats = fetchChats;
exports.createGroupChat = createGroupChat;
exports.renameGroup = renameGroup;
exports.addToGroup = addToGroup;
exports.removeFromGroup = removeFromGroup;
// Access or create a 1-to-1 chat
function accessChat(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Fetch all chats for a user
function fetchChats(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Create a new group chat
function createGroupChat(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Rename a group chat
function renameGroup(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Add user to a group chat
function addToGroup(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Remove user from a group chat
function removeFromGroup(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
//# sourceMappingURL=chat.controller.js.map