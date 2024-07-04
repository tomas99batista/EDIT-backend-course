import express from "express";

// Cria uma instancia do express
const app = express();

// para fazer a "traduçao" do body do request para JSON automaticamente
app.use(express.json());

// Produto {
// id: 1,
// name: "H&S",
// description: "Shampoo para a caspa",
// available: true
// }

// Onde guardamos os nossos produtos (os iniciais + os que adicionamos)
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

// GET - retorna todos os produtos
app.get("/produtos", (req, res) => {
  res.send(produtosLista);
});

// POST - adiciona novo produto
app.post("/produtos", (req, res) => {
  const produto = req.body;

  // Calcular o id do novo produto vendo qual é o tamanho do array de produtos existentes
  const produtoId = produtosLista.length + 1;
  // Adicionar o id ao produto
  produto.id = produtoId;

  // Adiciona ao array este novo produto
  produtosLista.push(produto);
  res.send(produtosLista);
});

// Rota DELETE para /produtos que recebe um id e deleta o produto com esse id
// BODY: {id: 1}
// Dica: filtrem a produtosLista para remover o id quer receberem

// TODO: topico 2: transformar este {id: 1} para um url param
// TODO: topico 2: criar um get por ?isAvailable=true que retorna todos os produtos cujo available=true

// TODO: topico 2: transformar esta port para uma .env
app.listen(3000, () => {
  console.log("servidor na porta 3000");
});
