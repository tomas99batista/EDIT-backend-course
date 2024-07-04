const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Inside middleware !!!");
  console.log(`Method: ${req.method} URL: ${req.url}`);
  next(); // Chama a próxima função
});

const namedMiddleware = (req, res, next) => {
  console.log("Aqui só entra quando declarado");
  next(); // Chama a próxima função
};

app.get("/", namedMiddleware, (req, res) => {
  console.log("After middleware");
  res.send("Hello World!");
});

// app.get("/", (req, res) => {
//   console.log("After middleware");
//   res.send("Hello World!");
// });

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
