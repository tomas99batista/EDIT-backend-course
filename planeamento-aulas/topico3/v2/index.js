import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
});

const data = {
  name: "John Doe",
  age: 30,
  email: "john@email.com",
};

const result = schema.validate(data);

if (result.error) {
  console.error(result.error.message);
} else {
  console.log("Data is valid");
}

const badData = {
  name: "John Doe",
  age: "30",
  email: "johnemail.com",
};

const badResult = schema.validate(badData);

if (badResult.error) {
  console.error(badResult.error.message);
} else {
  console.log("Data is valid");
}
