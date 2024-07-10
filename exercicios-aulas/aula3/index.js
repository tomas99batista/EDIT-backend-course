import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("a) Dentro do middleware!");
//   console.log(req.method);
//   console.log(req.url);
//   next();
// res.status(400).send("Body invalido")
// });

const validarBody = (req, res, next) => {
  console.log("validando o body", req.body);
  // blog
  // Title, descriçao
  // Verificar se existe titulo
  if (req.body.title === undefined) {
    return res.status(400).send("Falta o titulo");
  }
  // Verificar se a descriçao é > 5 letras
  if (req.body.descricao.length < 5) {
    return res.status(400).send("A descricao tem de ser superior a 5");
  }
  req.body.id = 1;
  req.body.isValid = true;
  next();
};

// Criar uma nova entrada no nosso blog
app.post("/blog", validarBody, (req, res) => {
  console.log("entrou no endpoint");
  res.send(req.body);
});

app.get("/", (req, res) => {
  console.log("b) Dentro da route");
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
