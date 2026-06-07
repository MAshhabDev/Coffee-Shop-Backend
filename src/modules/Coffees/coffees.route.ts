import { Router } from "express";
import { coffeeController } from "./coffee.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/", auth("admin"), coffeeController.createCoffee);

router.get("/", coffeeController.getCoffee);

router.delete("/:id", auth("admin"), coffeeController.deleteCoffee);

export const coffeeRoute = router;