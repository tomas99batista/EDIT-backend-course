import Joi from "joi";

const createPostSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date().optional().default(new Date().toISOString()),
  tags: Joi.array().items(Joi.string()),
});

const getPostByIdSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

export default {
  createPostSchema,
  getPostByIdSchema,
};
