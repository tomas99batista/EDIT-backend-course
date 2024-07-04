const data = require("./data");

function list() {
  return data.allPosts();
}

function getById() {
  return data.getById();
}

function update(id, data) {
  return data.update(id, data);
}

function create(newPost) {
  return data.insert({
    ...newPost,
    createdAt: new Date().getUTCMilliseconds(),
  });
}

function remove(id) {
  return data.remove(id);
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
};
