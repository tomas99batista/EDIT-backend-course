import express from "express";
const app = express();

// middleware numa funcao e apenas usado nos endpoints que queremos
const addUserToRequest = (req, res, next) => {
  req.user = {
    name: "John Doe",
  };
  next(); // Chama a próxima função
};

// app.get("path", middleware, (req, res) => {});
app.get("/", addUserToRequest, (req, res) => {
  console.log(req.user);
  res.send("Hello, " + req.user.name);
});

// Aqui nao entrou no middleware
app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About page");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
