const express = require("express");
const app = express();

const users = require("./controllers/userController.js");

app.use(express.json());
app.use(users); // Utiliza o router de users

app.listen(3000, () => {
  console.log("server is running (express)");
});
