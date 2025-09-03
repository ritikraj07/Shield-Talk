"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = __importDefault(require("./config"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const swagger_1 = require("./swagger");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const app = (0, express_1.default)();
const version = config_1.default.VERSION || "v1";
// ✅ Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:3000", credentials: false }));
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.use(`/${version}`, express_1.default.static(path_1.default.join(__dirname, "public")));
// ✅ Routes
app.use(`/${version}/api/auth`, auth_route_1.default);
app.use(`/${version}/api/users`, auth_middleware_1.verifyUser, user_route_1.default);
// ✅ Swagger Docs
app.use(`/${version}/api-docs`, swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.swaggerSpec, {
    customCss: ".topbar { display: none }",
    customSiteTitle: "ShieldTalk API 🔥",
}));
// ✅ Root
app.get("/", (_req, res) => {
    res.status(200).json({ message: "Welcome to ShieldTalk API" });
});
// ✅ 404
app.use((_req, res) => {
    res.status(404).json({ message: "API route not found" });
});
exports.default = app;
//# sourceMappingURL=app.js.map