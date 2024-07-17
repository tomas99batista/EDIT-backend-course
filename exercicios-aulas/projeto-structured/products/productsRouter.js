import express from "express";
import productsService from "./productsService.js";

const router = express.Router();

router.get("/products", (req, res) => {
  const products = productsService.getProducts();
  res.json(products);
});

router.post("/products", (req, res) => {
  const updatedProductsList = productsService.createProduct(req.body);
  res.json(updatedProductsList);
});

// TODO: DELETE um produto existente - id
router.delete("/products/:id", (req, res) => {
  const updatedProducts = productsService.deleteProduct(req.params.id);
  res.json(updatedProducts);
});

// TODO: Editar um produto existente

export default router;
