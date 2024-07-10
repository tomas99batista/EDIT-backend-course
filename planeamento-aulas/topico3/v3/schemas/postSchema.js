import Joi from "joi";

const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

export default postSchema;
