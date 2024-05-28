const express = require("express"); // Importa o módulo express

const app = express(); // Cria uma instância do express - necessário para criar uma aplicação express

// Cria uma rota GET para a raiz do servidor
app.get("/", (req, res) => {
  const data = {
    name: "John Doe",
    age: 30,
    email: "john.doe@email.com",
  };
  res.json(data); // Envia o objeto JSON como resposta
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
