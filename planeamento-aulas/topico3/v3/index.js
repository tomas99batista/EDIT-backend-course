const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
});

app.post("/user", (req, res) => {
  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).json({error: result.error.message});
  } else {
    res.json({message: "User created"});
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
