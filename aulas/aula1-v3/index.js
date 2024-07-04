const express = require("express");
const app = express();
// para fazer uma "traduçao" do body do request para JSON
app.use(express.json());

// Produto {
// id: 1,
// name: "H&S",
// description: "Shampoo para a caspa"
// available: true
// }

const produtosLista = [
  {
    id: 1,
    name: "H&S",
    description: "Shampoo para a caspa",
    available: true,
  },
  {
    id: 2,
    name: "Linic",
    description: "Shampoo para barba",
    available: false,
  },
];

// GET todos os produtos
app.get("/produtos", (req, res) => {
  res.send(produtosLista);
});

// POST novo produto
app.post("/produtos", (req, res) => {
  const produto = req.body;

  // Calcular o id do novo produto vendo qual é o tamanho do array
  console.log(produtosLista.length);
  const produtoId = produtosLista.length + 1;
  // Adicionar o id ao produto
  produto.id = produtoId;

  //   Adicionem ao array este produto
  produtosLista.push(produto);
  res.send(produtosLista);
});

// Rota DELETE para /produtos que recebe um id e deleta o produto com esse id
// BODY: {id: 1}
// Dica: filtrem a produtosLista para remover o id quer receberem

app.listen(3000, () => {
  console.log("servidor na porta 3000");
});
