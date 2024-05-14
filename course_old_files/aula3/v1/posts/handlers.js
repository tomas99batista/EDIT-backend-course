const express = require("express");
const router = express.Router();
const Joi = require("joi");
const services = require("./services");

router.get("/posts", (req, res) => {
  res.status(200).json(services.list());
});

const idSchema = Joi.string().guid({
  version: ["uuidv4"],
});

router.get("/posts/:id", (req, res) => {
  const { error, value } = idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json(error.details);
  }

  const post = services.getById(value);
  if (!post) {
    return res.status(404).json("post not found");
  }

  res.status(200).json(post);
});

const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

router.post("/posts", (req, res) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const created = services.create(value);

  res.status(201).json(created);
});

router.put("/posts/:id", (req, res) => {
  const { idError, parsedId } = idSchema.validate(req.params.id);
  if (idError) {
    return res.status(400).json(idError.details);
  }

  const { error, parsedPost } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  try {
    return res.status(200).json(services.update(parsedId, parsedPost));
  } catch (err) {
    return res.status(500).json("unexpected server error");
  }
});

router.delete("/posts/:id", (req, res) => {
  const { error, value } = idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json(error.details);
  }

  services.remove(value);

  return res.status(204);
});

module.exports = router;
