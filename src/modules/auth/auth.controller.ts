import type { Request, Response } from "express";
import { authService } from "./auth.service";

const signUp = async (req: Request, res: Response) => {
  try {
    const result = await authService.signUpInToDb(req.body);
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User did not created",
      data: [],
    });
  }
};

export const authController = { signUp };
