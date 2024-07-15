import express from "express";
import postsService from "./postsService.js";
const router = express.Router();

// get all posts
router.get("/posts", (req, res) => {
  const posts = postsService.getAllPosts();
  res.json(posts);
});

// adicionar novo post
router.post("/posts", (req, res) => {
  const posts = postsService.createPost(req.body);
  res.json(posts);
});

export default router;
