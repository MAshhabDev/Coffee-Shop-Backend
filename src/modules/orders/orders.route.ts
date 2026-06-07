import { Router } from "express";
import { orderController } from "./orders.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/", auth("user"), orderController.createOrder);
router.get("/", auth("user"), orderController.getMyOrder);
router.get("/", auth("admin"), orderController.getAllOrder);