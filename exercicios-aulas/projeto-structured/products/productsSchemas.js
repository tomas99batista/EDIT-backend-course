import Joi from "joi";

//  Product = {
// name: string
// description: string
// imageUrl: string
// price: number
// }
const createProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  description: Joi.string().required().min(5),
  imageUrl: Joi.string().optional(),
  price: Joi.number().required().min(0),
});

export default {
  createProductSchema,
};
