const { getDb } = require("../db/mongo");
const { ObjectId } = require("mongodb");

const collection = "posts";

async function insert(post) {
  const db = await getDb();
  const result = await db.collection(collection).insertOne(post);

  return result.insertedId;
}

function find(name) {}

async function getById(id) {
  const db = await getDb();
  const result = await db.collection(collection).findOne({
    _id: id,
  });
  return result;
}

function del(id) {}

function update(id, product) {}

module.exports = {
  insert,
  find,
  getById,
  del,
  update,
};
