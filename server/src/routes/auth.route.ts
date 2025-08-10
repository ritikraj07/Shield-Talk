import { Router } from "express";
import { get2FAQr, verify2FAToken } from "../controllers/auth.controller";

const router = Router();

router.get("/2fa/setup", get2FAQr);
router.post("/2fa/verify", verify2FAToken);

export default router;
