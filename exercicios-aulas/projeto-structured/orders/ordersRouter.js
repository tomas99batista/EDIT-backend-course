import express from "express";
import ordersService from "./ordersService.js";
import ordersSchemas from "./ordersSchemas.js";

const router = express.Router();

router.get("/orders", (req, res) => {
  const orders = ordersService.getOrders();
  res.json(orders);
});

router.post("/orders", (req, res) => {
  const {error, value} = ordersSchemas.createOrderSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  const updatedOrdersList = ordersService.createOrder(value);
  res.json(updatedOrdersList);
});

export default router;
