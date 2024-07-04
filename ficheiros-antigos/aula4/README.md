# Bases de Dados

Uma base de dados é um software que permite armazenar e consultar informação de forma mais ou menos estruturada, conforme o tipo da base de dados: relacional, documental, chave-valor, grafo, objetos, temporal, etc.

As mais comuns que vão encontrar em aplicações web são as relacionais e documentais.

Muitas bases de dados, como as relacionais, têm uma linguagem própria que é usada para definir estruturas de dados, manipular e consultar dados. O standard dessa linguagem é o [SQL](https://aws.amazon.com/what-is/sql).

Outras, como as documentais (aka NoSQL), usam outros tipos de interface (em vez de uma linguagem SQL).

No grupo das bases de dados NoSQL, a mais conhecida é o MongoDB, e é essa que utilizaremos para introdução a este tópico.

# MongoDB

Este tipo de base de dados é mais simples porque nele arquivamos "documentos" JSON, sendo que estes podem ter qualquer estrutura.
Documentos são agrupados em "collections".

Por exemplo, posso ter uma collection `books`, onde crio o seguinte documento:

```
{
    "title": "1984",
    "author": "George Orwell",
    "publishedAt": "1949-06-08"
}
```

Através do Node.js, criamos uma ligação à nossa instância MongoDB e podemos então pesquisar, listar, alterar, remover documentos.

https://www.mongodb.com/basics#documents
https://www.mongodb.com/basics#collections

Para testar podem criar uma instância MongoDB grátis na cloud deles em: https://www.mongodb.com/cloud/atlas/register

## Ligação

Quando criam uma base de dados (seja no Mongo Atlas ou se tiverem instalado no vosso computador), vão ter um URL que especifica a ligação, semelhante a este:

```
mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority
```

Os elementos com <> são para substituir pelos vossos valores.

É esta string que usamos para, com um cliente MongoDB, iniciar a ligação, que depois usamos e reutilizamos quando queremos aceder aos documentos.

https://www.mongodb.com/docs/drivers/node/current/usage-examples/

## Exemplos de operações

Estãs são as operações básica que vamos usar, embora existam outras semelhantes que podem explorar se quiserem.
Nos links abaixo têm uma breve explicação e um exemplo de código JavaScript (Node.js) para cada uma:

### Procurar um documento

https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/

### Procurar vários documentos

https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/

### Inserir um documento

https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/

### Atualizar um documento

https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/

### Remover um documento

https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/
