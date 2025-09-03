"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const config_1 = __importDefault(require("../config"));
const token_controller_1 = require("../controllers/token.controller");
const { BACKEND_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FRONTEND_URL } = config_1.default;
const router = (0, express_1.Router)();
router.use((0, express_session_1.default)({
    secret: config_1.default.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // MUST be false for HTTP (not HTTPS)
        sameSite: "none", // <-- CRITICAL CHANGE: Allows cross-origin cookies
        httpOnly: true, // Recommended for security
        maxAge: 24 * 60 * 60 * 1000,
        //   domain: config.DOMAIN, // <-- ADD THIS: Allows subdomains to share the cookie
    },
}));
router.use(passport_1.default.initialize());
router.use(passport_1.default.session());
// Passport serialization
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
// Passport Configuration
passport_1.default.use(new passport_google_oauth20_1.default({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${BACKEND_URL}/api/auth/google/callback`,
}, auth_controller_1.ContinueWithGoogle));
router.get("/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/failure",
    session: false, // Using JWT instead of sessions
}), (req, res) => {
    try {
        if (!(req === null || req === void 0 ? void 0 : req.user)) {
            return res.redirect(`${FRONTEND_URL}?error=No-user-found`);
        }
        const user = req === null || req === void 0 ? void 0 : req.user;
        console.log("user", user);
        const { accessToken } = (0, token_controller_1.generateTokens)({ user });
        res.redirect(`${FRONTEND_URL}?accessToken=${accessToken}`);
    }
    catch (error) {
        console.error("OAuth callback error:", error);
        res.redirect(`${FRONTEND_URL}?error=OAuth-callback-error`);
    }
});
router.get("/success", (req, res) => {
    console.log("Authentication successful");
    res.send("Authentication successful");
});
router.get("/failure", (req, res) => {
    console.log("Authentication failed");
    res.send("Authentication failed");
});
router.get("refresh", (req, res) => {
    console.log("Refreshing token");
    res.send("Refreshing token");
});
router.get("/2fa/setup", auth_controller_1.get2FAQr);
router.post("/2fa/verify", auth_controller_1.verify2FAToken);
exports.default = router;
//# sourceMappingURL=auth.route.js.map