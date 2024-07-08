import postsRepository from "../repositories/postsRepository.js";

const getAll = () => {
  return postsRepository.getAll();
};

const create = (post) => {
  return postsRepository.create(post);
};

export default {
  getAll,
  create,
};
