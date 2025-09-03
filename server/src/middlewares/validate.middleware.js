"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (err) {
            return res.status(400).json({ error: err.errors });
        }
    };
};
exports.validate = validate;
//# sourceMappingURL=validate.middleware.js.map