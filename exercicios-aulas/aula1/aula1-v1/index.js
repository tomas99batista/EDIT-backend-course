const http = require("http");

const server = http.createServer(function (req, res) {
  // localhost:3000/
  if ((req.url = "/")) {
    res.end("Ola!");
  }
});

server.listen(3000, function () {
  console.log("Estou na porta 3000");
});
