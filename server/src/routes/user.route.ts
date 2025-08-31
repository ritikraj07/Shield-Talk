import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { getUserProfile, updateUserProfile } from "../controllers/user.controller";

// import other user-related controllers like register, getProfile, etc.

const router = Router();

// Get User Profile

router.get("/profile", getUserProfile)

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
router.post("/login", login);

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
router.post("/register", register);

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
router.patch("/update-profile", updateUserProfile);

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

export default router;
