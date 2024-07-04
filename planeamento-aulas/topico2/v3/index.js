import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  console.log();
  res.send(`Post Id: ${id}`);
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
