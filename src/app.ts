import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { authRoute } from "./modules/auth/auth.route";
import { coffeeRoute } from "./modules/Coffees/coffees.route";
import { orderRoute } from "./modules/orders/orders.route";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

// middleware
app.use(express.json());

// Route Connection
app.use("/api/auth", authRoute);
app.use("/api/coffees", coffeeRoute);
app.use("/api/orders", orderRoute);

app.get("/", async (req: Request, res: Response) => {
  res.send("Coffee Server Is Running....");
});

app.use(globalErrorHandler);

export default app;
