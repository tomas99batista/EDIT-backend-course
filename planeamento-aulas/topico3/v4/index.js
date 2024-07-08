import express from "express";
import dotenv from "dotenv";

import postsRouter from "./routers/postsRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(postsRouter); // Utiliza o router de posts

// caso tenhamos mais routers, podemos adicionar aqui, por exemplo:
// app.use(userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is running (express)", PORT);
});
