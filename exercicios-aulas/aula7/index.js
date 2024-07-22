import dotenv from "dotenv";
import {getDb} from "./db.js";

dotenv.config();

const collection = "posts";

// POST {
// title: string
// description: string
// saved: number
// tags: [string]
// }

const dbOperations = async () => {
  const db = await getDb();
  // Limpa a coleção antes de inserir novos dados
  await db.collection(collection).deleteMany({});

  const post = {
    title: "viagem para viseu",
    description: "vou num mercedes velho para viseu",
    saved: 12,
    tags: ["carros", "drama"],
  };

  const createdPost = await db.collection(collection).insertOne(post);
  console.log(createdPost.insertedId);

  const postByTitle = await db
    .collection(collection)
    .findOne({title: "viagem para viseu"});
  console.log(postByTitle);

  const updatePost = await db.collection(collection).updateOne(
    {
      _id: createdPost.insertedId,
    },
    {
      $set: {
        description: "cheguei a viseu",
        saved: 1,
      },
    }
  );

  console.log(updatePost);

  const updatedPost = await db
    .collection(collection)
    .findOne({_id: createdPost.insertedId});

  console.log("UPDATED POST");
  console.log(updatedPost);

  const deletePost = await db.collection(collection).deleteOne({
    _id: createdPost.insertedId,
  });
  console.log("DELETED POST:");
  console.log(deletePost);

  const findDeletePost = await db.collection(collection).findOne({
    _id: createdPost.insertedId,
  });
  console.log(findDeletePost);
};

await dbOperations();
