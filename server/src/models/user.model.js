"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
// ✅ Use IUser, not UserDocument
const User = (0, mongoose_1.model)("User", user_schema_1.userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map