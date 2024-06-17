const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
const validateUser = require("../middlewares/userMiddleware");

router.post("/user", validateUser, (req, res) => {
  const created = userService.create(req.body);
  res.status(201).json(created);
});

router.get("/user", (req, res) => {
  const users = userService.getAll();
  res.status(200).json(users);
});

module.exports = router;
