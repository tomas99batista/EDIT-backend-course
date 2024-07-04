# Tópico 2 - Variáveis de Ambiente e Parâmetros da API

- Environment Variables
  -- dotenv
- Path Parameters
- Query String
- Criar uma API com Environment Variables, Path Parameters e Query String

# Environment Variables

- Environment Variables são variáveis de ambiente que podem ser acedidas por qualquer processo em execução no sistema operacional.

- Estas variáveis são usadas para passar informação ao programa que queremos parametrizar/configurar.

- Podemos definir, por exemplo, variáveis de ambiente para configurar a nossa aplicação, como a porta onde a aplicação vai correr, a URL da base de dados, passwords de acesso, etc.

- No Node.js, podemos aceder às variáveis de ambiente através do objeto `process.env`.

- Para definir variáveis de ambiente, podemos fazê-lo diretamente no terminal, antes de correr a aplicação, ou podemos definir variáveis de ambiente num ficheiro `.env`.

- Tendo o seguinte num ficheiro "vars.js":

```javascript
console.log(process.env.FOO);
```

- Testando no terminal:

```bash
FOO=bar node vars.js
```

- Para definir variáveis de ambiente num ficheiro `.env`, podemos usar o pacote `dotenv`.

# dotenv

- O pacote `dotenv` permite carregar variáveis de ambiente a partir de um ficheiro `.env`.

- Para usar o pacote `dotenv`, primeiro temos de instalar o pacote:

```bash
npm install dotenv
```

- Depois, podemos carregar as variáveis de ambiente a partir do ficheiro `.env`:

```javascript
require("dotenv").config();
```

- O ficheiro `.env` deve estar na raiz do projeto e deve conter as variáveis de ambiente no formato `NOME_VARIAVEL=VALOR`.

- Por exemplo:

```
PORT=3000
PASSWORD_SECRET=123456
```

- Depois de carregar as variáveis de ambiente, podemos aceder às variáveis de ambiente através do objeto `process.env`.

- Por exemplo:

```javascript
const port = process.env.PORT;
const passwordSecret = process.env.PASSWORD_SECRET;

console.log("port", port);
console.log("password:", passwordSecret);
```

# Path Parameters

- Path Parameters são parâmetros que fazem parte do URL.

- Por exemplo, no URL `http://localhost:3000/users/123`, o `123` é um path parameter.

- Para aceder a path parameters no Express, podemos usar `req.params`

- Por exemplo:

```javascript
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});
```

- No exemplo acima, o valor de `id` é extraído do URL e disponibilizado no objeto `req.params`.

- Podemos ter vários path parameters no URL:

```javascript
app.get("/users/:userId/books/:bookId", (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.bookId);
  // ...
});
```

# Query String

- A Query String é uma parte opcional de um URL, composta por pares chave-valor: `https://example.com/field1=value1&field2=value2&field3=value3`.

- Estes valores podem ser usados para qualquer finalidade mas no contexto de uma API REST, são normalmente informação adicional a passar a um GET, por exemplo para filtrar ou paginar a resposta.

- Por exemplo:

```
GET /products - retorna todos os produtos
GET /products?category=music - retorna todos os produtos, filtrados pela categoria music
```

- O Express trata de reconhecer a query string e disponibilizar todos os pares no objeto `req.query`. No exemplo acima, poderiamos aceder à categoria através de `req.query.category`.

- Exemplo:

```javascript
app.get("/products", (req, res) => {
  const category = req.query.category;
  res.send(`Category: ${category}`);
});
```

# Criar uma API com Environment Variables, Path Parameters e Query String

- Vamos criar uma API que usa variáveis de ambiente, path parameters e query string.

- O objetivo é criar uma API que retorna um array de produtos.

- Cada produto tem um ID, um nome e uma categoria.

- A API deve permitir filtrar os produtos por categoria.

- O ficheiro `.env` deve conter a variável `PORT` com o valor da porta onde a aplicação vai correr.
