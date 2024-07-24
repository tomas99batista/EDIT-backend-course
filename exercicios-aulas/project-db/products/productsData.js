import {ObjectId} from "mongodb";
import dbService from "../db/mongo.js";

const productsCollection = "products";

// Obter todos os produtos
const getProducts = async () => {
  try {
    const db = await dbService.getDb();
    const products = await db.collection(productsCollection).find().toArray();
    return products;
  } catch (error) {
    console.error(error);
  }
};

// Obter produto pelo id
const getProductById = async (productId) => {
  try {
    const db = await dbService.getDb();
    const product = await db
      .collection(productsCollection)
      .findOne({_id: new ObjectId(productId)});
    return product;
  } catch (error) {
    console.error(error);
  }
};

// Obter produtos pelo nome
const getProductsByName = async (productName) => {
  try {
    const db = await dbService.getDb();
    const products = await db
      .collection(productsCollection)
      .find({
        name: productName,
      })
      .toArray();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (newProduct) => {
  try {
    const db = await dbService.getDb();
    const createdProduct = await db
      .collection(productsCollection)
      .insertOne(newProduct);
    return createdProduct;
  } catch (error) {
    console.error(error);
  }
};

// TODO: Editar um produto existente
const updateProduct = async (id, productUpdates) => {
  const db = await dbService.getDb();
};

const deleteProduct = async (id) => {
  try {
    const db = await dbService.getDb();
    const deletedProduct = await db
      .collection(productsCollection)
      .deleteOne({_id: new ObjectId(id)});
    return deletedProduct;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getProducts,
  getProductsByName,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
