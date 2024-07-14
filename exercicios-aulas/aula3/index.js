import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("Dentro do middleware!");
  console.log("DATA: ", new Date());
  next();
});

const logOriginalUrl = (req, res, next) => {
  console.log("URL: ", req.originalUrl);
  next();
};
// app.use(logOriginalUrl); // ! nao queremos isto em toda a nossa app

// Middleware que conta todos os pedidos feitos a todas as rotas da API
let counter = 0;
app.use((req, res, next) => {
  counter++; // ISTO É IGUAL A => counter = counter + 1;
  console.log("Request number: ", counter);
  req.counter = counter;
  next();
});

app.get("/", (req, res) => {
  console.log("Dentro da rota!");
  res.send("Hello World! Pedido numero" + req.counter);
});

app.get("/about", logOriginalUrl, (req, res) => {
  res.send("Curso FSWD");
});

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
