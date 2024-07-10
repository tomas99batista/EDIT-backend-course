// Id min 0 e maximo 10
// const numberSchema = Joi.number().required().min(0).max(10);
// const num = 15;
// const {error, value} = numberSchema.validate(num);
// console.log(`Error ${error}, value ${value}`);

// const postSchema = Joi.object({
//   id: Joi.number().required(),
//   title: Joi.string().required(),
//   description: Joi.string().required().min(5),
//   active: Joi.bool().optional().default(false),
//   tags: Joi.array(),
// });
// const postExample = {
//   id: 1,
//   title: "teste",
//   description: "description teste",
//   tags: ["teste"],
// };
// const {error, value} = postSchema.validate(postExample);
// console.log(error, value);
//
import express from "express";
import Joi from "joi";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// {
//  id: number e obrigatorio
// title: string e obrigatoria
// description: string e obrigatoria e min 5 caracteres
// active: boolean e opcional e false por defeito
// }

const blogSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required().min(5),
  active: Joi.bool().optional().default(false),
});
app.post("/blog", (req, res) => {
  console.log(req.body);
  const {error, value} = blogSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  res.send(value);
});

// const validarBody = (req, res, next) => {
//   const {error, value} = blogSchema.validate(req.body);
//   if (error) {
//     return res.status(400).send(error.message);
//   }
//   req.body = value;
//   next();
// };

app.post("/blog", validarBody, (req, res) => {
  console.log(req.body);
  // const {error, value} = blogSchema.validate(req.body);
  // if (error) {
  //   return res.status(400).send(error.message);
  // }
  // console.log(error, value);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
