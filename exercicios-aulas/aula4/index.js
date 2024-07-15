import express from "express";
import dotenv from "dotenv";
import postsRouter from "./posts/postsRouter.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(postsRouter);

app.listen(PORT, () => {
  console.log("Server running: ", PORT);
});
