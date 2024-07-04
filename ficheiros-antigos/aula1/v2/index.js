const express = require("express");
const app = express();

app.get("/tracking", (req, res) => {
  res.status(200).send("package is on the way");
});

app.listen(3000, () => {
  console.log("server is running (express)");
});
