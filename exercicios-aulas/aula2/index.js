import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
});

app.get("/users/:userId/posts/:postId", (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  console.log(req.params);
  res.send({
    userId: userId,
    postId: postId,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server running", process.env.PORT);
});
