import Joi from "joi";
import express from "express";
import productsService from "../services/productsService.js";
import productsSchema from "../schemas/productsSchema.js";

const router = express.Router();

// GET - retorna todos os produtos
router.get("/produtos", (req, res) => {
  const {error, value} = productsSchema.querySchema.validate(
    req.query.available
  );

  if (error) {
    return res.status(400).json(error.details);
  }

  if (value !== undefined) {
    const filteredProducts = productsService.getByAvailability(value);
    return res.status(200).json(filteredProducts);
  } else {
    const products = productsService.getAll();
    return res.status(200).json(products);
  }
});

// POST - adiciona novo produto
router.post("/produtos", (req, res) => {
  const {error, value} = productsSchema.productSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const createdProduct = productsService.insert(value);

  return res.status(201).json(createdProduct);
});

// Rota DELETE para /produtos/:id que recebe um id e deleta o produto com esse id
router.delete("/produtos/:id", (req, res) => {
  const {error, value} = productsSchema.idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json(error.details);
  }

  const updatedList = productsService.remove(value);
  return res.status(200).json(updatedList);
});

export default router;
