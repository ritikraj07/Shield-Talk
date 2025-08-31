import { Router } from "express";
import {
  ContinueWithGoogle,
  get2FAQr,
  verify2FAToken,
} from "../controllers/auth.controller";
import passport from "passport";
import session from "express-session";
import GoogleStrategy from "passport-google-oauth20";
import config from "../config";

import {Request, Response} from "express"
import { generateTokens } from "../controllers/token.controller";

const {BACKEND_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FRONTEND_URL} = config;
const router = Router();

router.use(
  session({
    secret: config.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // MUST be false for HTTP (not HTTPS)
      sameSite: "none", // <-- CRITICAL CHANGE: Allows cross-origin cookies
      httpOnly: true, // Recommended for security
      maxAge: 24 * 60 * 60 * 1000,
    //   domain: config.DOMAIN, // <-- ADD THIS: Allows subdomains to share the cookie
    },
  })
);

router.use(passport.initialize());
router.use(passport.session());

// Passport serialization
passport.serializeUser((user:any, done:any) => {
  done(null, user);
});
passport.deserializeUser((user:any, done:any) => {
  done(null, user);
});

// Passport Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${BACKEND_URL}/api/auth/google/callback`,
    },
    ContinueWithGoogle
  )
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false, // Using JWT instead of sessions
  }),
  (req: any, res: Response) => {
    try {
      if (!req?.user) {
        return res.redirect(`${FRONTEND_URL}?error=No-user-found`);
      }

      const user = req?.user as any;
      console.log("user", user);
      const { accessToken } = generateTokens({user});
      res.redirect(`${FRONTEND_URL}?accessToken=${accessToken}`);
    
    } catch (error) {
      console.error("OAuth callback error:", error);
      res.redirect(`${FRONTEND_URL}?error=OAuth-callback-error`);
    }
    }
);

router.get("/success", (req, res) => { 
  console.log("Authentication successful");
  res.send("Authentication successful");
})

router.get("/failure", (req, res) => {
  console.log("Authentication failed");
  res.send("Authentication failed");
});

router.get("refresh", (req, res) => {
  console.log("Refreshing token");
  res.send("Refreshing token");
})

router.get("/2fa/setup", get2FAQr);
router.post("/2fa/verify", verify2FAToken);

export default router;


