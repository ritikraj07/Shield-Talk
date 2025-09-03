"use strict";
// subscription.controller.ts
// This file handles user subscriptions – like free or premium plans, renewals, and cancellations.
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
exports.cancelSubscription = exports.getAllSubscriptions = exports.getUserSubscription = exports.createSubscription = void 0;
const createSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Creates a new subscription for a user (e.g., when they buy a plan)
});
exports.createSubscription = createSubscription;
const getUserSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetches the current subscription details of a specific user
});
exports.getUserSubscription = getUserSubscription;
const getAllSubscriptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin can view all subscriptions across the platform
});
exports.getAllSubscriptions = getAllSubscriptions;
const cancelSubscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Cancels a user’s current subscription
});
exports.cancelSubscription = cancelSubscription;
//# sourceMappingURL=subscription.controller.js.map