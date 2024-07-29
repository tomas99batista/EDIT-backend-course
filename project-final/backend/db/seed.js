import dotenv from "dotenv";
import dbService from "./mongo.js";

dotenv.config();

await dbService.initializeDb();
const db = await dbService.getDb();

const seedProductsDb = async () => {
  const seedProducts = [
    {
      name: "Pastel de Carne",
      description: "Pastel de Carne de Frango",
      imageUrl:
        "https://www.sabornamesa.com.br/media/k2/items/cache/990810f9242641a8e264ce996a78ed28_XL.jpg",
      price: 4,
    },
    {
      name: "Coxinha de Frango",
      description: "Coxinha de Frango com Queijo Catupiry",
      imageUrl:
        "https://benditosalgado.com.br/wp-content/uploads/2020/04/Coxinha-Frango-Catupiry.jpg",
      price: 2.5,
    },
    {
      name: "Pastel de Queijo",
      description: "Pastel de Queijo da Alameda com Frango e Queijo",
      imageUrl:
        "https://www.sabornamesa.com.br/media/k2/items/cache/990810f9242641a8e264ce996a78ed28_XL.jpg",
      price: 5,
    },
  ];

  try {
    // CLEAR DB:
    console.log("\nClearing DB...");
    await db.collection("products").deleteMany();
    console.log("DB clean!\n");

    // SEED DB:
    console.log("Seeding DB...");
    await db.collection("products").insertMany(seedProducts);
    console.log("DB seeded!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

await seedProductsDb();
