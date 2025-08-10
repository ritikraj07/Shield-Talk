// feedback.controller.ts
// This file handles feedback given by users about the app, calls, or matches.

import { Request, Response } from "express";

const createFeedback = async (req: Request, res: Response) => {
  // User submits new feedback (rating, review, or complaint)
};

const getAllFeedbacks = async (req: Request, res: Response) => {
  // Admin gets all feedback submitted by users
};

const getFeedbackByUserId = async (req: Request, res: Response) => {
  // Get feedback given by a specific user
};

export { createFeedback, getAllFeedbacks, getFeedbackByUserId };
