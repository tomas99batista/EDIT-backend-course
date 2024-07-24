import express from "express";
import productsService from "./productsService.js";
import productsSchemas from "./productsSchemas.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  // localhost:3000/products?name=coxinha
  const name = req.query.name;

  if (name) {
    const products = await productsService.getProductsByName(name);
    return res.status(200).json(products);
  }

  const products = await productsService.getProducts();
  res.json(products);
});

router.post("/products", async (req, res) => {
  const {error, value} = productsSchemas.createProductSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  const createdProduct = await productsService.createProduct(value);
  res.status(201).json(createdProduct);
});

// TODO: Editar um produto existente
router.put("/products/:id", async (req, res) => {
  const updatedProducts = await productsService.updateProduct(
    req.params.id,
    req.body
  );
  res.json(updatedProducts);
});

router.delete("/products/:id", async (req, res) => {
  const deletedProduct = await productsService.deleteProduct(req.params.id);
  // OPTION 2: - enviar ok produto apagado
  res.send("Product deleted");
  // res.json(deletedProduct);
});

export default router;
