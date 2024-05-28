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
