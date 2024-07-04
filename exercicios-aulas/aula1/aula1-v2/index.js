// Import o modulo express
const express = require("express");

// Cria uma instancia do express -
const app = express();

// ROTA GET localhost:3000/
app.get("/", (req, res) => {
  res.send("ola");
});

const cursoJSON = {
  id: 1,
  name: "FSWD",
  alunos: ["Augusto", "Rodrigos"],
  lecionar: true,
};

// ROTA GET localhost:3000/curso
// JSON - dados do curso
app.get("/curso", (req, res) => {
  res.send(cursoJSON);
});

// Servidor está a escuta na porta 3000
app.listen(3000, () => {
  console.log("estou no 3000");
});
