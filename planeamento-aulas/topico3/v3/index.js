import express from "express";
import Joi from "joi";

const app = express();
app.use(express.json());

const schema = Joi.object({
  name: Joi.string().required().min(3),
  age: Joi.number().required().min(1),
  email: Joi.string().email().required(),
}).required();

// Define the route with validation
app.post("/user", (req, res) => {
  const {error} = schema.validate(req.body);

  if (error) {
    res.status(400).json({error: error.message});
  } else {
    res.json({message: "User created"});
  }
});

// V2:
// Create the validation middleware
// const validateUser = (req, res, next) => {
//   const {error} = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({error: error.message});
//   }
//   next();
// };

// // Use the middleware in the route
// app.post("/user", validateUser, (req, res) => {
//   res.json({message: "User created"});
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
