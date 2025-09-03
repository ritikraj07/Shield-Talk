"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
// swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const AppName = "InfernoAPI";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: AppName,
            version: "1.0.0",
            description: `🔥 Your sins, our endpoints. Welcome to hell’s gateway.`,
        },
        servers: [
            {
                url: "http://localhost:5000", // Change as needed
            },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // where your routes/controllers live
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
//# sourceMappingURL=swagger.js.map