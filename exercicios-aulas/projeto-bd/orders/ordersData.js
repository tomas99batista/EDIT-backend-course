import dbService from "../db/mongo.js";

const collectionName = "orders";

// Obter todas as orders
const getOrders = async () => {
  const db = await dbService.getDb();
  const orders = await db.collection(collectionName).find().toArray();
  return orders;
};

// Adicionar uma nova order
const createOrder = async (newOrder) => {
  const db = await dbService.getDb();
  const result = await db.collection(collectionName).insertOne({
    ...newOrder,
    createdAt: new Date(), // Adiciona a data de criação
  });
  return result.insertedId;
};

export default {
  getOrders,
  createOrder,
};
