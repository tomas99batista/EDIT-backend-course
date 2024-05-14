const pino = require("pino-http");
const express = require("express");
const app = express();
const posts = require("./posts/handlers");

app.use(express.json());
app.use(pino());

app.use(posts);

app.listen(process.env.PORT, () => {
  console.log("server is running (express)");
});
