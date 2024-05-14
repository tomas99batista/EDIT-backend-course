const data = require("./data");

async function create(newPost) {
  const newPostId = await data.insert({
    ...newPost,
    createdAt: new Date().getUTCMilliseconds(),
  });

  return data.getById(newPostId);
}

function find(options) {
  return data.find(options);
}

function getById(id) {
  return data.getById(id);
}

function update(id, prod) {
  return data.update(id, prod);
}

function del(id) {
  return data.del(id);
}

module.exports = {
  getById,
  find,
  create,
  update,
  del,
};
