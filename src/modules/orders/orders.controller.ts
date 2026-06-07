import type { Request, Response } from "express";
import { ordersService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const user_id: string = req.user?.id;
    const { total_price, order_items } = req.body;

    const result = await ordersService.createOrdersInToDb(
      user_id,
      total_price,
      order_items,
    );

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};


const getMyOrder = async (req: Request, res: Response) => {
  try {
    const user_id: string = req.user?.id;

    const result = await ordersService.getMyOrdersInToDb(user_id);

    res.status(201).json({
      success: true,
      message: "My orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};


const getAllOrder = async (req: Request, res: Response) => {
  try {

    const result = await ordersService.getAllOrdersInToDb();

    res.status(201).json({
      success: true,
      message: "All orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};

export const orderController = { createOrder,getMyOrder,getAllOrder };
