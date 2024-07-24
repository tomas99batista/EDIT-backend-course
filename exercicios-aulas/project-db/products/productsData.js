import dbService from "../db/mongo.js";

const productsCollection = "products";

// Obter todos os produtos
const getProducts = async () => {
  const db = await dbService.getDb();
  const products = db.collection(productsCollection).find().toArray();
  return products;
};

// Obter produtos pelo nome
const getProductsByName = async (productName) => {
  const db = await dbService.getDb();
  const products = db
    .collection(productsCollection)
    .find({
      name: productName,
    })
    .toArray();
  return products;
};

// Adicionar um novo produto
const createProduct = async (newProduct) => {
  const db = await dbService.getDb();
};

// TODO: Editar um produto existente
const updateProduct = async (id, productUpdates) => {
  const db = await dbService.getDb();
};

const deleteProduct = async (id) => {
  const db = await dbService.getDb();
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
