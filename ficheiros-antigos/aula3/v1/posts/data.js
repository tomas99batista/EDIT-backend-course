const posts = [
  {
    id: 1,
    title: "express tutotial",
    content: "lorem ipsum",
    date: new Date("2020-04-23"),
    tags: ["tag1", "tag2"],
  },
];

class PostNotFoundError extends Error {
  constructor(message) {
    super(message);
  }
}

function all() {
  return posts;
}

function getById(id) {
  const post = posts.find((p) => p.id === id);
  if (!post) return null;
  return post;
}

function insert(post) {
  const newPost = {
    id: posts.length + 1,
    ...post,
  };

  posts.push(newPost);

  return newPost;
}

function update(id, fields) {
  const ix = posts.indexOf((p) => p.id === id);
  if (!ix) throw new PostNotFoundError();

  for (const [key, value] of Object.entries(fields)) {
    posts[ix][key] = value;
  }

  return posts[ix];
}

// removes a post by id, return true if it existed, false otherwise
function remove(id) {
  const ix = posts.indexOf((p) => p.id === id);
  if (ix) {
    posts.splice(ix, 1);
  }
  return !!ix;
}

module.exports = {
  all,
  getById,
  insert,
  update,
  remove,
};
