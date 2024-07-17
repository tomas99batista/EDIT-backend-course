import express from "express";
import dotenv from "dotenv";
dotenv.config();
import productsRouter from "./products/productsRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(productsRouter);

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
