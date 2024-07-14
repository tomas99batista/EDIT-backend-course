import express from "express";
import Joi from "joi";
import dotenv from "dotenv";
dotenv.config();

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
let produtosLista = [
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

// name
// description
// available
const produtoSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required().min(5),
  available: Joi.boolean().optional().default(true),
});
// POST - adiciona novo produto
app.post("/produtos", (req, res) => {
  const {error, value} = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  // Calcular o id do novo produto vendo qual é o tamanho do array de produtos existentes
  const produtoId = produtosLista.length + 1;

  // Adiciona ao array este novo produto
  produtosLista.push({
    // Adicionar o id ao produto
    id: produtoId,
    ...value,
  });
  res.send(produtosLista);
});

// Rota DELETE para /produtos/:id que recebe um id e deleta o produto com esse id
app.delete("/produtos/:id", (req, res) => {
  const id = req.params.id;
  produtosLista = produtosLista.filter((produto) => {
    // Aqui temos de fazer comparaçao loose porque o id quando vem dos req.params vem como uma string,
    // por exemplo se passarmos /produtos/1 ele chega como "1", em string
    // Podemos fazer um cast para inteiro
    // TODO: iremos resolver isto na prox aula com validação de input e etc
    return produto.id != id;
  });
  res.send(produtosLista);
});

// URL query
// GET /active-produtos?isAvailable=boolean -> ia a lista dos produtos e faziam filter pelos activos
// TODO: este endpoint pode chamar-se /produtos e ser integrado com o primeiro get - verificamos se ha req.query.available
// Se sim filtramos, se nao mandamos de volta a lista toda
app.get("/active-produtos", (req, res) => {
  const isAvailable = req.query.available;
  // Como nao temos validaçao de input, ao ler req.query.available recebemos uma string, ou seja "true"
  // para obtermos um boolean podemos comparar o isAvailable com "true", se forem iguais dá true, se for diferente dá false
  // TODO: iremos resolver isto na prox aula com validação de input e etc
  // TODO: passar isto para um middleware
  const isTrue = isAvailable === "true";
  const filteredProdutos = produtosLista.filter((produto) => {
    return produto.available === isTrue;
  });
  res.send(filteredProdutos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
