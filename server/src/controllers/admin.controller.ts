// admin.controller.ts
// This file handles all admin-related operations such as blocking users, getting user list, etc.

import { Request, Response } from "express";

const blockUser = async (req: Request, res: Response) => {
  // Block a user by admin
};

const unblockUser = async (req: Request, res: Response) => {
  // Unblock a user
};

const getAllUsers = async (req: Request, res: Response) => {
  // Get list of all users (admin view)
};

const getUserById = async (req: Request, res: Response) => {
  // Get single user details by userId
};

const deleteUser = async (req: Request, res: Response) => {
  // Delete a user by admin
};

export { blockUser, unblockUser, getAllUsers, getUserById, deleteUser };
