import Joi from "joi";

//  Order = {
// id: number
// items: {
//  productId: string
//  quantity: number
//  price: number
// }[]
// status: string
// createdAt: Date
// }
const createOrderSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required().min(1),
      price: Joi.number().required().min(0),
    })
  ),
  status: Joi.string().optional().default("created"),
  createdAt: Joi.date().optional().default(new Date()),
});

export default {
  createOrderSchema,
};
