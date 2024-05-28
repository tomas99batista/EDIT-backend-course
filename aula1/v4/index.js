const express = require("express");
const app = express();

app.use(express.json()); // Middleware para fazer o parse do body da requisição para JSON automaticamente

// Array de posts com id, title e content
let posts = [
  {id: 1, title: "Post 1", content: "Content 1"},
  {id: 2, title: "Post 2", content: "Content 2"},
];

// Rota GET para /posts que retorna o array de posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Rota POST para /posts que recebe um post e o adiciona ao array de posts
// BODY: {title: "Post 3", content: "Content 3"}
app.post("/posts", (req, res) => {
  const post = req.body;
  post.id = posts.length + 1; // Define o id do post - o id é o tamanho do array de posts + 1
  posts.push(post); // Adiciona o post ao array de posts
  res.json(post);
});

// Rota DELETE para /posts que recebe um id e deleta o post com esse id
// BODY: {id: 1}
app.delete("/posts", (req, res) => {
  const id = req.body.id;
  posts = posts.filter((post) => post.id !== id); // Filtra os posts que não tem o id igual ao id recebido no body
  res.json({message: "Post deleted"});
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
