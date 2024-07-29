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

const querySchema = Joi.object({
  available: Joi.boolean().truthy("true").falsy("false").optional(),
});
// GET - retorna todos os produtos
app.get("/produtos", (req, res) => {
  // TODO: passar isto para middleware
  const {error, value} = querySchema.validate(req.query);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Extract validated boolean value for 'available'
  const isAvailable = value?.available; // Using optional chaining to handle undefined

  if (isAvailable) {
    // Filter produtosLista based on 'available' boolean value
    const filteredProdutos = produtosLista.filter((produto) => {
      return produto.available === isAvailable;
    });
    res.send(filteredProdutos);
  } else {
    // If 'available' query parameter is not provided, return the entire list
    res.send(produtosLista);
  }
});

// Define Joi schema for POST request body validation
const produtoSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required().min(10),
  available: Joi.boolean().optional().default(true), // Optional field
}).required();
// POST - adiciona novo produto
app.post("/produtos", (req, res) => {
  // TODO: passar isto para middleware
  // Validate the request body against the schema
  const {error, value} = produtoSchema.validate(req.body);

  if (error) {
    // If validation fails, return 400 - Bad Request
    return res.status(400).send(error.details[0].message);
  }

  // Calcular o id do novo produto vendo qual é o tamanho do array de produtos existentes
  const produtoId = produtosLista.length + 1;

  // Create a new product object with the validated values and assigned id
  const newProduto = {
    id: produtoId,
    name: value.name,
    description: value.description,
    available: value.available,
  };

  // Adiciona ao array este novo produto
  produtosLista.push(newProduto);

  res.send(produtosLista);
});

const idSchema = Joi.number().integer().positive().required();
// Rota DELETE para /produtos/:id que recebe um id e deleta o produto com esse id
app.delete("/produtos/:id", (req, res) => {
  // TODO: passar isto para middleware
  const {error, value} = idSchema.validate(req.params.id);

  if (error) {
    // Se houver erro de validação, retornar 400 - Bad Request
    return res.status(400).send(error.details[0].message);
  }

  const id = value;
  // console.log(id, typeof id);
  // console.log(req.params.id, typeof req.params.id);

  produtosLista = produtosLista.filter((produto) => {
    return produto.id != id;
  });

  res.send(produtosLista);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
