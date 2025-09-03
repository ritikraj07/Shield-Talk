"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const zod_1 = require("zod");
exports.userValidator = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    userName: zod_1.z.string().min(3),
    age: zod_1.z.number().optional(),
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6),
    provider: zod_1.z.enum(["google", "facebook", "email", "phone"]).default("email"),
    deviceInfo: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    sex: zod_1.z.string().optional(),
    providerId: zod_1.z.string().optional(),
    avatar: zod_1.z.string().optional(),
});
exports.default = exports.userValidator;
//# sourceMappingURL=user.validator.js.map