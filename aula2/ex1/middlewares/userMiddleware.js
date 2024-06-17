const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
});

const validateUser = (req, res, next) => {
  const {error} = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }
  next();
};

module.exports = validateUser;
