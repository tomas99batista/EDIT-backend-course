import {MongoClient} from "mongodb";

// Singleton objec
let db;

// getDb returns an initialized MongoDB connection
async function getDb() {
  if (db) {
    return db;
  }

  const client = new MongoClient(process.env.DB_URL);
  const connection = await client.connect();
  db = connection.db(process.env.DB_NAME);

  console.log("DB connected");

  return db;
}

export {getDb};
