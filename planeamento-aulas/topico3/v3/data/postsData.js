const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    date: "2024-01-01",
    tags: ["post1"],
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
    date: "2024-02-02",
    tags: ["post2"],
  },
];

const getAll = () => {
  return posts;
};

const create = (post) => {
  post.id = posts.length + 1;
  posts.push(post);
  return post;
};

export default {
  getAll,
  create,
};
