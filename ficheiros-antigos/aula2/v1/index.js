const Joi = require("joi");
const pino = require("pino-http");
const express = require("express");
const app = express();

app.use(express.json());
app.use(pino());

const posts = [
  {
    id: 1,
    title: "express tutotial",
    content: "lorem ipsum",
    date: new Date("2020-04-23"),
    tags: ["tag1", "tag2"],
  },
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// post schema
const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

app.post("/posts", (req, res) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  // add to database
  posts.push(value);

  // response
  res.status(201).json(posts[posts.length - 1]);
});

app.listen(3000, () => {
  console.log("server is running (express)");
});
