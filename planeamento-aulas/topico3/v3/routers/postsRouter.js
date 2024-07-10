import express from "express";
import postsService from "../services/postsService.js";
import postSchema from "../schemas/postSchema.js";
import validateBody from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.get("/posts", (req, res) => {
  const posts = postsService.getAll();
  res.status(200).json(posts);
});

router.post("/posts", validateBody(postSchema), (req, res) => {
  const createdPost = postsService.create(req.body);
  res.status(201).json(createdPost);
});

export default router;
