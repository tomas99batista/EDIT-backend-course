const http = require("http");

// server configuration
const server = http.createServer(function (req, res) {
  switch (req.url) {
    case "/tracking": {
      if (req.method === "GET") {
        res.writeHead(200);
        res.end("package is on the way");
        break;
      }
    }
    default: {
      res.writeHead(404);
      res.end("route not found");
    }
  }
});

// start server on localhost address, port 3000; print a log when started successfully
server.listen(3000, "localhost", function () {
  console.log("server is running");
});
