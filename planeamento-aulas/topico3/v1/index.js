import express from "express";
const app = express();

// Este middleware vai ser chamado em todas as rotas
app.use((req, res, next) => {
  console.log("DENTRO do middleware");
  console.log(`${req.method} ${req.url}`);
  next(); // Chama a próxima função
});

// Outra alternativa:
// const logRequest = (req, res, next) => {
//   console.log("DENTRO do middleware");
//   console.log(`${req.method} ${req.url}`);
//   next(); // Chama a próxima função
// };
// app.use(logRequest);

app.get("/", (req, res) => {
  console.log("DEPOIS do middleware! - DENTRO ENDPOINT");
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
