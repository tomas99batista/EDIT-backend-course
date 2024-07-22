import dbService from "../db/mongo.js";

const collectionName = "products";

// Obter todos os produtos
const getProducts = async () => {
  const db = await dbService.getDb();
  const products = await db.collection(collectionName).find().toArray();
  return products;
};

// Obter produtos pelo nome
const getProductsByName = async (productName) => {
  const db = await dbService.getDb();
  const products = await db
    .collection(collectionName)
    .find({name: productName})
    .toArray();
  return products;
};

// Criar um novo produto
const createProduct = async (newProduct) => {
  const db = await dbService.getDb();
  const result = await db.collection(collectionName).insertOne(newProduct);
  return result.insertedId;
};

// Atualizar um produto existente
const updateProduct = async (id, productUpdates) => {
  const db = await dbService.getDb();
  const result = await db.collection(collectionName).updateOne(
    {_id: new dbService.ObjectId(id)}, // Usar ObjectId para o filtro
    {$set: productUpdates} // Atualizar apenas os campos fornecidos
  );
  return result.modifiedCount > 0; // Retorna true se o produto foi atualizado
};

// Excluir um produto
const deleteProduct = async (id) => {
  const db = await dbService.getDb();
  const result = await db
    .collection(collectionName)
    .deleteOne({_id: new dbService.ObjectId(id)});
  return result.deletedCount > 0; // Retorna true se o produto foi excluído
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
