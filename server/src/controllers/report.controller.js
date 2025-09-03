"use strict";
// report.controller.ts
// This file handles user reports – when users report other users for bad behavior or violations.
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
exports.deleteReport = exports.getReportById = exports.getAllReports = exports.createReport = void 0;
const createReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Allows a user to report another user (includes reason, timestamp, etc.)
});
exports.createReport = createReport;
const getAllReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin can fetch all reports submitted
});
exports.getAllReports = getAllReports;
const getReportById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin/user fetches a specific report by its ID
});
exports.getReportById = getReportById;
const deleteReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Admin deletes a report (maybe resolved or invalid)
});
exports.deleteReport = deleteReport;
//# sourceMappingURL=report.controller.js.map