import express from "express";
import Joi from "joi";

const app = express();
app.use(express.json());

// ! Exemplo enviando age como string
// {
//   "name": "John Doe",
//   "email": "john@email.com",
//   "age": "30"
// }
// Observar que a age apos a validaçao é convertida para number
// console.log(req.body.age) // "30"
// console.log(value.age) // 30

// ! Joi em middleware
// const validateBody = (req, res, next) => {
//   const {error, value} = schema.validate(req.body);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.body = value;
// TODO: change to req.validatedBody = value;
//   next();
// };
// app.post("/users", validateBody, (req, res) => {

// ! Joi em req.param
// const validatePostId = (req, res, next) => {
//   const schema = Joi.number().integer().positive().required();
//   const {error, value} = schema.validate(req.params.id);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.paramId = value;
//   next();
// };
// app.get("/posts/:id", validatePostId, (req, res) => {
// const productId = req.paramId;

// ! Joi em req.param object
// const validatePostId = (req, res, next) => {
//   const schema = Joi.object({
//     id: Joi.number().integer().positive().required(),
//   });
//   const {error, value} = schema.validate(req.params);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.validatedParams = value;
//   next();
// };
// app.get("/posts/:id", validatePostId, (req, res) => {
// const productId = req.validatedParams.id;

// ! Joi em req.query
// const validateQuery = (req, res, next) => {
//   const schema = Joi.boolean().required();
//   const {error, value} = schema.validate(req.query.active);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.isAvailable = value;
//   next();
// };
// app.get("/products", validateQuery, (req, res) => {

// ! Joi em req.query object
// const validateQuery = (req, res, next) => {
//   const schema = Joi.object({
//     active: Joi.boolean().required(),
//     country: Joi.string().required(),
//   });
//   const {error, value} = schema.validate(req.query);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.validatedQuery = value;
//   next();
// };
// app.get("/products", validateQuery, (req, res) => {

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(1).max(100),
});

app.post("/users", (req, res) => {
  const {error} = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  res.send("User is valid");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
