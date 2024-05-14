const express = require("express");
const app = express();

app.use(express.json());

const posts = [
  {
    id: 1,
    title: "express tutotial",
    content: "lorem ipsum",
  },
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post("/posts", (req, res) => {
  posts.push(req.body);
  res.status(201).json(posts[posts.length - 1]);
});

app.listen(3000, () => {
  console.log("server is running (express)");
});
