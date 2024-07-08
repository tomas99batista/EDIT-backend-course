import express from "express";
import dotenv from "dotenv";
// Importa o router de produtos
import productsRouter from "./routers/productsRouter.js";

dotenv.config();

// Cria uma instancia do express
const app = express();

// para fazer a "traduçao" do body do request para JSON automaticamente
app.use(express.json());

app.use(productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
