const express = require("express");
const app = express();

const posts = require("./controllers/postsController");

app.use(express.json());
app.use(posts); // Utiliza o router de posts

app.listen(3000, () => {
  console.log("server is running (express)");
});
