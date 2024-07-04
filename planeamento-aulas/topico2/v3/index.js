import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  console.log("Post id: ", id);
  res.send({
    id: id,
  });
});

app.get("/users/:userId/posts/:postId", (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  console.log("User id: ", userId, "Post id: ", postId);
  res.send({
    userId: userId,
    postId: postId,
  });
});

app.get("/posts", (req, res) => {
  const category = req.query.category;
  res.send({category: category});
});

app.get("/posts", (req, res) => {
  const queryParams = req.query;
  res.send(queryParams);
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
