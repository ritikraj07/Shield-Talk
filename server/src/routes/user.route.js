"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const user_controller_1 = require("../controllers/user.controller");
// import other user-related controllers like register, getProfile, etc.
const router = (0, express_1.Router)();
// Get User Profile
router.get("/profile", user_controller_1.getUserProfile);
/************************** AUTH ROUTES **************************/
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", auth_controller_1.login);
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request or user already exists
 */
router.post("/register", auth_controller_1.register);
/************************** PATCH **************************/
// Example PATCH endpoint
//**
// * @swagger
// * /api/users/update-profile:
// *   patch:
// *     summary: Update user profile
// *     tags: [Users]
// *     requestBody:
// *       required: true
// *       content:
// *         application/json:
// *           schema:
// *             type: object
// *             properties:
// *               name:
// *                 type: string
// *               email:
// *                 type: string
// *               password:
// *                 type: string
// *     responses:
// *       200:
// *         description: User profile updated successfully
//  */
router.patch("/update-profile", user_controller_1.updateUserProfile);
/************************** PUT **************************/
// Example PUT endpoint
router.put("/update", (req, res) => {
    res.send("Full update endpoint");
});
/************************** DELETE **************************/
// Example DELETE endpoint
router.delete("/delete", (req, res) => {
    res.send("Delete user endpoint");
});
exports.default = router;
//# sourceMappingURL=user.route.js.map