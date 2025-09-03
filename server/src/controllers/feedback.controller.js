"use strict";
// feedback.controller.ts
// This file handles feedback given by users about the app, calls, or matches.
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
exports.getFeedbackByUserId = exports.getAllFeedbacks = exports.createFeedback = void 0;
const createFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // User submits new feedback (rating, review, or complaint)
});
exports.createFeedback = createFeedback;
const getAllFeedbacks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin gets all feedback submitted by users
});
exports.getAllFeedbacks = getAllFeedbacks;
const getFeedbackByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get feedback given by a specific user
});
exports.getFeedbackByUserId = getFeedbackByUserId;
//# sourceMappingURL=feedback.controller.js.map