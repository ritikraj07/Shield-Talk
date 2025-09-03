"use strict";
/**
 * notification.controller.ts
 *
 * Handles sending, fetching, and clearing notifications.
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
exports.sendNotification = sendNotification;
exports.getNotifications = getNotifications;
exports.clearNotifications = clearNotifications;
// Send notification to user
function sendNotification(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Get notifications for logged-in user
function getNotifications(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
// Clear notification(s)
function clearNotifications(req, res) {
    return __awaiter(this, void 0, void 0, function* () { });
}
//# sourceMappingURL=notification.controller.js.map