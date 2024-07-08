import productsRepository from "../repositories/productsRepository.js";

const getAll = () => {
  return productsRepository.getAll();
};

const getById = (id) => {
  return productsRepository.getById(id);
};

const getByAvailability = (available) => {
  return productsRepository.getByAvailability(available);
};

const insert = (product) => {
  return productsRepository.insert({...product, createdAt: new Date()});
};

const remove = (id) => {
  return productsRepository.remove(id);
};

export default {
  getAll,
  getById,
  getByAvailability,
  insert,
  remove,
};
