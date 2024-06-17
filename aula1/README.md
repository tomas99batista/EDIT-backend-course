# Class 1

## O que é uma API?

- API é a sigla para Application Programming Interface, que em português significa Interface de Programação de Aplicações. Uma API é um conjunto de regras e definições que permite a comunicação entre aplicações.

## Para que serve?

- APIs são utilizadas para permitir que diferentes aplicações se comuniquem entre si, permitindo que uma aplicação acesse os recursos de outra aplicação.

## Métodos HTTP

- GET - Usado para obter dados de um servidor.
- POST - Usado para enviar dados para um servidor.
- PUT - Usado para atualizar dados em um servidor.
- DELETE - Usado para deletar dados de um servidor.

## Status Code

- 200 - OK
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 404 - Not Found
- 500 - Internal Server Error

## Bruno

- Bruno é uma ferramenta que permite testar APIs. Com o Bruno é possível enviar requisições HTTP para uma API e visualizar a resposta.

## Exercícios

### 1 - Criar uma API simples com http

- Criar projeto

```bash
npm init -y
```

- Exemplo de uma API simples criada com http:

```javascript
const http = require("http"); // Importa o módulo http

// Cria um servidor http
const server = http.createServer(function (req, res) {
  // Switch case para verificar o url do request
  switch (req.url) {
    case "/": // Se a url for a raiz do servidor
      res.writeHead(200, {"Content-Type": "text/plain"}); // Define o status code 200 (ok) e o Content-Type da resposta
      res.end("Hello World"); // Envia a mensagem "Hello World" como resposta
      break;
    default: // Se a url não for a raiz do servidor
      res.writeHead(404, {"Content-Type": "text/plain"}); // Define o status code 404 (not found) e o Content-Type da resposta
      res.end("Not Found"); // Envia a mensagem "Not Found" como resposta
  }
});

// O servidor irá escutar na porta 3000
server.listen(3000, function () {
  console.log("Server running on port 3000"); // Esta mensagem será exibida no console quando o servidor estiver rodando
});
```

### 2 - Criar uma API simples com express

- Criar projeto e instalar nodemon e express

```bash
npm init -y
npm install nodemon
npm install express
```

Nodemon é uma ferramenta que reinicia o servidor automaticamente sempre que um file é modificado.

- Exemplo de package.json (podem reutilizar este package.json para esta aula - apenas editem o name)

```json
{
  "name": "aulaX-vX",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "5.0.0-beta.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.3"
  }
}
```

- Exemplo de uma API simples criada com express:

```javascript
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
```

### JSON

- JSON é a sigla para JavaScript Object Notation, que em português significa Notação de Objetos JavaScript. JSON é um formato de dados que é fácil de ler e escrever para humanos e fácil de interpretar e gerar para máquinas.
- Exemplo de um objeto JSON:

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@email.com"
}
```

- JSON é frequentemente utilizado para enviar e receber dados em APIs.
- Com JSON é possível enviar objetos complexos, arrays, strings, números, booleanos e null.

### 3 - Criar uma API simples com express e JSON

- Exemplo de uma API simples criada com express que retorna um objeto JSON:

```javascript
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
```

### 4 - Criar uma API com express e JSON que se baseia em Posts

- API deve ter um endpoint que retorna todos os posts
- API deve ter um endpoint que cria um novo post
- API deve ter um endpoint que atualiza um post
- API deve ter um endpoint que deleta um post

  ```javascript
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
  ```

- Apenas noções básicas de APIs e Express foram abordadas nesta aula. Na próxima aula iremos aprofundar mais em Express e também abordar Middlewares, Validação de Input e Estrutura.

- Não abordamos nenhum PUT mas iremos abordar na próxima aula.
