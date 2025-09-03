"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const cors_1 = __importDefault(require("cors"));
exports.corsOptions = {
    origin: ["http://localhost:5173", "https://yourdomain.com"],
    credentials: true,
};
exports.default = (0, cors_1.default)(exports.corsOptions);
// export const corsOptionsDelegate = (req: any, callback: any) => {
//   let corsOptions: any;
//   if (req.headers.origin) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };
//# sourceMappingURL=cors.js.map