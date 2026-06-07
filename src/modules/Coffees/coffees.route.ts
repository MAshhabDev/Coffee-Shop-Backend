import { Router } from "express";
import { coffeeController } from "./coffee.controller";

const router = Router();

router.post("/", coffeeController.createCoffee);
router.get("/", coffeeController.getCoffee);
router.delete("/", coffeeController.deleteCoffee);
