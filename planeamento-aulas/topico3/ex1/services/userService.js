const userRepository = require("../repositories/userRepository");

const getAll = () => {
  return userRepository.getAll();
};

const create = (user) => {
  return userRepository.create(user);
};

module.exports = {
  getAll,
  create,
};
