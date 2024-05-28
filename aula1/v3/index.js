const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // Cria um objeto JSON
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
