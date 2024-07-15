// array de posts que funciona como DB da nossa app
// POST: {
// title: string
// content: string
// image: string
// saved: number
// date: Date
// }

let postsList = [
  {
    title: "Post number 1: welcome",
    content: "Este e o meu primeiro post, bem-vindos",
    image:
      "https://hermes.dio.me/articles/cover/612bcf90-777a-452f-a501-156348543448.jpg",
    saved: 5,
    date: "2024-07-15",
  },
  {
    title: "Post number 2: vou encerrar o blog",
    content: "Este e o meu ultimo post, adeus fas",
    image:
      "https://hermes.dio.me/articles/cover/612bcf90-777a-452f-a501-156348543448.jpg",
    saved: 1,
    date: "2024-07-16",
  },
];

// obter todos os posts
const getAllPosts = () => {
  return postsList;
};

// adicionar post
const addPost = (newPost) => {
  postsList.push(newPost);
  return postsList;
};

export default {
  getAllPosts,
  addPost,
};
