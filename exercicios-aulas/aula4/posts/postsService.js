import postsData from "./postsData.js";

// obter todos os produtos
const getAllPosts = () => {
  const posts = postsData.getAllPosts();
  return posts;
};

// adicionar novo produto
const createPost = (newPost) => {
  // ALTERNATIVA 1 - ...spread operator
  const postWithDate = {
    ...newPost,
    date: new Date(),
  };
  const posts = postsData.addPost(postWithDate);
  return posts;
  // ALTERNATIVA 2
  // newPost.date = new Date();
  // const posts = postsData.addPost(newPost);
  // return posts;
};

export default {
  getAllPosts,
  createPost,
};
