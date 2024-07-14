import postsRepository from "../data/postsData.js";

const getAll = () => {
  return postsRepository.getAll();
};

const getById = (id) => {
  // TODO: instead of implementing on data layer, implement here to see the capabilities of service
  // HINT: use a find (since the ids are unique and we will be only looking for one - do not use filter)
  const allPosts = postsRepository.getAll();
  return allPosts.find((post) => post.id === id);
};

const create = (post) => {
  return postsRepository.create(post);
};

export default {
  getAll,
  getById,
  create,
};
