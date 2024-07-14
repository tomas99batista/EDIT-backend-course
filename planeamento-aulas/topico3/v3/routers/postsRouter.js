import express from "express";
import postsService from "../services/postsService.js";
import postsSchemas from "../schemas/postSchema.js";

const router = express.Router();

router.get("/posts", (req, res) => {
  const posts = postsService.getAll();
  res.status(200).json(posts);
});

router.get("/posts/:id", (req, res) => {
  const {error, value} = postsSchemas.getPostByIdSchema.validate(req.params);
  if (error) {
    return res.status(400).json({error: error.message});
  }
  const posts = postsService.getById(value.id);
  res.status(200).json(posts);
});

router.post("/posts", (req, res) => {
  const {error, value} = postsSchemas.createPostSchema.validate(req.body);
  if (error) {
    return res.status(400).json({error: error.message});
  }
  const createdPost = postsService.create(value);
  return res.status(201).json(createdPost);
});

export default router;
