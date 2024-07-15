import express from "express";
import Joi from "joi";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// {
// name: string
// age: number
// }
// const userSchema = Joi.object({
//   name: Joi.string().required().min(4).max(15),
//   age: Joi.number().required().min(1).max(99),
// });
// app.post("/users", (req, res) => {
//   const {error, value} = userSchema.validate(req.body, {abortEarly: true});
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   res.json(value);
// });

const userSchema = Joi.object({
  name: Joi.string().required().min(4).max(15),
  age: Joi.number().required().min(1).max(99),
});
const validateUserMiddleware = (req, res, next) => {
  const {error, value} = userSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }
  // req.body = value;
  req.validatedBody = value;

  next();
};

app.post("/users", validateUserMiddleware, (req, res) => {
  console.log("req.body", req.body);
  console.log("req.validatedBody", req.validatedBody);
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
