import type { Request, Response } from "express";
import { authService } from "./auth.service";

const signUp = async (req: Request, res: Response) => {
  try {
    const result = await authService.signUpInToDb(req.body);
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "User registration failed!",
    });
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const result = await authService.logInToDb(req.body);
    res.status(200).json({
      success: true,
      message: "User login successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const authController = { signUp, signIn };
