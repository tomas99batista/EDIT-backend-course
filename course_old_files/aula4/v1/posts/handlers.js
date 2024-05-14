const express = require("express");
const router = express.Router();
const Joi = require("joi");
const services = require("./services");

router.get("/posts", (req, res) => {
  if (req.query.name) {
    res.status(200).json(services.find({ name: req.query.name }));
  }
  res.status(200).json(services.find());
});

router.get("/posts/:id", (req, res) => {
  const prod = services.getById(req.params.id);
  if (!prod) {
    return res.status(404).json(prod);
  }
  res.status(200).json(post);
});

// post schema
const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

router.post("/posts", async (req, res) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const created = await services.create(value);

  res.status(201).json(created);
});

router.delete("/products", (req, res) => {
  services.del(req.params.id);
  res.status(204).end();
});

module.exports = router;
