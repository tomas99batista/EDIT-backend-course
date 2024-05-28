const express = require("express");
const app = express();

app.use(express.json()); // Middleware que trata os pedidos com body JSON

let posts = [
  {id: 1, title: "Post 1", content: "Content 1"},
  {id: 2, title: "Post 2", content: "Content 2"},
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

// BODY: {title: "Post 3", content: "Content 3"}
app.post("/posts", (req, res) => {
  const post = req.body;
  post.id = posts.length + 1; // Define o id do post - o id é o tamanho do array de posts + 1
  posts.push(post); // Adiciona o post ao array de posts
  res.json(post);
});

// BODY: {id: 1, title: "Post 1 Updated", content: "Content 1 Updated"}
app.put("/posts", (req, res) => {
  const id = req.body.id;
  // encontramos o index do post com o id enviado
  const postIndex = posts.findIndex((post) => post.id === id);
  // verificamos se o post foi encontrado (index retornado diferente de -1)
  if (postIndex !== -1) {
    // Atualiza o título e conteúdo do post encontrado
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(404).json({message: "Post not found"});
  }
});

// BODY: {id: 1}
app.delete("/posts", (req, res) => {
  const id = req.body.id;
  posts = posts.filter((post) => post.id !== id); // Filtra os posts que não tem o id igual ao id recebido no body
  res.json({message: "Post deleted"});
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
