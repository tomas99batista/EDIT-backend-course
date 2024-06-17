# Class 2 - Middleware, Validação de Input e Estrutura

## O que é um Middleware?

- Middleware é uma função que recebe os objetos `request` e `response` e pode realizar operações antes de passar o request para a próxima função.

- Um middleware pode ser utilizado para realizar operações como validação de input, autenticação, log, etc.

- Um middleware pode ser utilizado em uma rota específica ou em todas as rotas.

- Exemplo de middleware que loga o método HTTP e a URL da request:

```javascript
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Inside middleware");
  console.log(`${req.method} ${req.url}`);
  next(); // Chama a próxima função
});

app.get("/", (req, res) => {
  console.log("After middleware");
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

- O middleware é chamado antes da função que responde a request, então o log será exibido antes de "Hello World!".

- TODO: req é

- TODO: res é
  -- É possível com o res fazer

- O `next()` é utilizado para chamar a próxima função, se não for chamado a request não será passada para a próxima função.

## Validação de Input

- Validação de input é uma prática comum em APIs para garantir que os dados recebidos são válidos.

- Uma biblioteca comum para validação de input é o Joi. Existem outras bibliotecas como o Yup e Zod.

- A validação de input pode ser feita em um middleware ou em uma função específica.

- Serve para garantir que os dados recebidos são válidos e seguros. Por exemplo, garantir que um email é um email válido ou que um número é um número, etc.

- Exemplo de validação de input com Joi:

```bash
npm install joi
```

```javascript
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
});

const data = {
  name: "John Doe",
  age: 30,
  email: "john@email.com",
};

const result = schema.validate(data);

if (result.error) {
  console.error(result.error.message);
} else {
  console.log("Data is valid");
}

const badData = {
  name: "John Doe",
  age: "30",
  email: "johnemail.com",
};

const badResult = schema.validate(badData);

if (badResult.error) {
  console.error(badResult.error.message);
} else {
  console.log("Data is valid");
}
```

- No exemplo acima estamos a validar um objeto, mas é possível validar um request body de uma API.

- Exemplo de validação de input numa API:

```javascript
const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
});

app.post("/user", (req, res) => {
  const result = schema.validate(req.body); // TODO: passar isto para o middleware

  if (result.error) {
    res.status(400).json({error: result.error.message});
  } else {
    res.json({message: "User created"});
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

- No exemplo acima estamos a validar o body de um request POST para a rota `/user`.

## Estrutura e Organização

- Organização por camadas é uma prática comum em APIs para separar as responsabilidades.

- As camadas mais comuns são: Controller, Service e Repository.

- Controller é responsável por receber o request, chamar o Service e enviar a response.

- Service é responsável por realizar a lógica de negócio da aplicação. Também pode chamar o Repository. Algumas operações do Service são: criar, atualizar, deletar, etc.

- Repository é responsável por realizar operações na base de dados.

- Podemos usar o router do express para organizar as rotas por files.

- Exemplo de organização por camadas:

```javascript
// index.js
const express = require("express");
const app = express();

const posts = require("./controllers/postsController");

app.use(express.json());
app.use(posts); // Utiliza o router de posts

app.listen(3000, () => {
  console.log("server is running (express)");
});

// Controller
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const postsService = require("../services/postsService");

router.get("/posts", (req, res) => {
  const posts = postsService.getAll();
  res.status(200).json(posts);
});

// post schema
const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

router.post("/posts", (req, res) => {
  const {error, value} = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const created = postsService.create(value);

  res.status(201).json(created);
});

module.exports = router;

// Service
const postsRepository = require("../repositories/postsRepository");

const getAll = () => {
  return postsRepository.getAll();
};

const create = (post) => {
  return postsRepository.create(post);
};

module.exports = {
  getAll,
  create,
};

// Repository
const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    date: "2024-01-01",
    tags: ["post1"],
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
    date: "2024-02-02",
    tags: ["post2"],
  },
];

const getAll = () => {
  return posts;
};

const create = (post) => {
  posts.push(post);
  return post;
};

module.exports = {
  getAll,
  create,
};
```

- No exemplo acima temos um Controller que chama um Service que chama um Repository.

- A organização por camadas facilita a manutenção e a escalabilidade da aplicação.

- Podemos criar files separados para cada camada, por exemplo `controllers/postsController.js`, `services/postsService.js` e `repositories/postsRepository.js`.

- Se tivessemos, por exemplo, outra entidade `User`, poderíamos criar os files `controllers/userController.js`, `services/userService.js` e `repositories/userRepository.js`.

## Exercício

TODO: - Criar uma API com Validação de Input no Middleware Estrutura e Organização
