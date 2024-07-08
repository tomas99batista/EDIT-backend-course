import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required().min(10),
  available: Joi.boolean().optional().default(true), // Optional field
}).required();

const querySchema = Joi.boolean().truthy("true").falsy("false").optional();

const idSchema = Joi.number().integer().positive().required();

export default {
  productSchema,
  querySchema,
  idSchema,
};
