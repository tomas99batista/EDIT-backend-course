# Path parameters

Na composição das rotas, podemos ter partes cujo valor é necessário para a nossa lógica. O caso mais comum é uma parte da rota representar o identificador do recurso a que queremos aceder. Por exemplo `GET /products/606dd9ab-2809-434c-b90b-2c5d52eb7d6a`, seria um request GET para obter o produto com o id `606dd9ab-2809-434c-b90b-2c5d52eb7d6a`.

No Express podemos, nas rotas que declaramos, indicar as partes que queremos usar como variáveis e o Express trata de as disponibilizar no objeto `Request`, em `req.params`

```
app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params.userId)
    console.log(req.params.bookId)
    ...
})
```

https://expressjs.com/en/guide/routing.html (ver secção "Route parameters")

# Query string

A query string é uma parte opcional de um URL, composta por pares chave-valor: `https://example.com/field1=value1&field2=value2&field3=value3`.
Estes valores podem ser usados para qualquer finalidade mas no contexto de uma API REST, são normalmente informação adicional a passar a um GET, por exemplo para filtrar ou paginar a resposta.

```
GET /products - retorna todos os produtos
GET /products?category=music - retorna todos os produtos, filtrados pela categoria music
```

O Express trata de reconhecer a query string e disponibilizar todos os pares no objeto `req.query`. No exemplo acima, poderiamos aceder à categoria através de `req.query.category`.

https://expressjs.com/en/5x/api.html#req.query
https://en.wikipedia.org/wiki/Query_string

# Environment variables

Estejemos a falar de Node.js, C++, Python, etc., quando executamos um programa, executamos este através do sistema operativo. Por exemplo, quando abrimos o VSCode, estamos a executar o VSCode no Linux/Windows/MacOS, conforme o OS que tiverem.
No sistema operativo existem variáveis (externas aos nossos programas), que servem para descrever o ambiente - o contexto em que as aplicações serão executadas.
É comum usar estas variáveis para passar informação a um programa que queremos parametrizar/configurar.

Podemos definir estas variáveis de forma mais permanente, ou então apenas de forma a existirem durante a execução dum process/programa.

No exemplo abaixo (linux/macOS), usamos o programa "printenv" para imprimir o valor de uma variável de ambiente. Verificamos o seguinte:

- na primeira execução não tem valor definido
- na segunda tem o valor "bar" porque definimos a variável antes do comando a executar
- na terceira não tem valor
- usamos o "export" para definir a variável no ambiente de forma "persistente" (não totalmente persistente porque se eu iniciar um novo terminal ela não vai existir)
- na ultima execução, temos o valor "bar" de novo, sem ter que definir a variável na mesma linha

```
~$ printenv FOO

~$ FOO=bar printenv FOO
bar

~$ printenv FOO

~$ export FOO=bar

~$ printenv FOO
bar
```

https://en.wikipedia.org/wiki/Environment_variable
https://www.twilio.com/en-us/blog/how-to-set-environment-variables-html

## No Node.js

No Node.js podemos ler as variáveis de ambiente existentes no contexto de execução atual, através do `process.env`.

Tendo o seguinte num ficheiro "vars.js":

```
console.log(process.env.FOO)
```

Testando no terminal:

```
~$ FOO=bar node vars.js
bar
```

https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs

### dotenv

Habitualmente temos várias variáveis de ambiente num projeto real, e especialmente quando desenvolvemos o código, seria muito penoso definir essas variáveis todas na linha em que executamos o comando:

```
VAR1=teste VAR2=32134134 VAR3=ashflaksdfkajsldkfj ....... node index.js
```

A abordagem habitual é:

- criar um ficheiro `.env` na raíz do projeto onde declaramos essas variáveis
- adicionar ".env" ao .gitignore para evitar que este ficheiro seja adicionado ao repositório (pode conter informação sensível)
- usar um package/módulo para carregar as variáveis do `.env` em `process.env`: https://www.npmjs.com/package/dotenv
