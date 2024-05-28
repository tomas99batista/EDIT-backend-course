const express = require("express"); // Importa o módulo express

const app = express(); // Cria uma instância do express - necessário para criar uma aplicação express

// Cria uma rota GET para a raiz do servidor
app.get("/", (req, res) => {
  res.send("Hello World from Express :)"); // Envia a mensagem "Hello World" como resposta
});

// O servidor irá escutar na porta 3000
app.listen(3000, () => {
  console.log("Server running on port 3000"); // Esta mensagem será exibida no console quando o servidor estiver rodando
});
