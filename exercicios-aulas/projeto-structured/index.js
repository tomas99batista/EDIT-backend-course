import dotenv from "dotenv";
import express from "express";
import ordersRouter from "./orders/ordersRouter.js";
import productsRouter from "./products/productsRouter.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(productsRouter);
app.use(ordersRouter);

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
