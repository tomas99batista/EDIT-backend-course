const postsRepository = require("../repositories/postsRepository");

const getAll = () => {
  return postsRepository.getAll();
};

const create = (post) => {
  return postsRepository.create(post);
};

module.exports = {
  getAll,
  create,
};
