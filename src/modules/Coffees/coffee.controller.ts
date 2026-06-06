import type { Request, Response } from "express";
import { coffeeService } from "./coffee.service";

const createCoffee = async (req: Request, res: Response) => {
  try {
    const result = await coffeeService.createCoffeeInToDb(req.body);
    res.status(201).json({
      success: true,
      message: "Coffee created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getCoffee = async (req: Request, res: Response) => {
  try {
    const result = await coffeeService.getCoffeeInToDb();
    res.status(201).json({
      success: true,
      message: "Coffee created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
const deleteCoffee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await coffeeService.deleteCoffeeInToDb(id as string);
    res.status(201).json({
      success: true,
      message: "Coffee created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const coffeeController = { createCoffee, getCoffee, deleteCoffee };
