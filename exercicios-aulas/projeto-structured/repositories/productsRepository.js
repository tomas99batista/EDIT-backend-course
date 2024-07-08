// Produto {
// id: 1,
// name: "H&S",
// description: "Shampoo para a caspa",
// available: true
// createdAt: "2021-10-01T20:00:00Z"
// }

// Onde guardamos os nossos produtos (os iniciais + os que adicionamos)
let productsList = [
  {
    id: 1,
    name: "H&S",
    description: "Shampoo para a caspa",
    available: true,
    createdAt: "2021-10-01T20:00:00Z",
  },
  {
    id: 2,
    name: "Linic",
    description: "Shampoo para barba",
    available: false,
    createdAt: "2021-10-01T20:00:00Z",
  },
];

// Retorna todos os produtos
const getAll = () => {
  return productsList;
};

// Retorna um produto pelo id
const getById = (id) => {
  const product = productsList.find((product) => product.id === id);
  if (!product) return null;
  return product;
};

const getByAvailability = (available) => {
  console.log(available);
  return productsList.filter((product) => product.available === available);
};

// Adiciona um novo produto
const insert = (product) => {
  const newProduct = {
    id: productsList.length + 1,
    ...product,
  };

  productsList.push(newProduct);

  return newProduct;
};

// Remove um produto pelo id
const remove = (id) => {
  productsList = productsList.filter((p) => p.id !== id);
  return productsList;
};

export default {
  getAll,
  getById,
  getByAvailability,
  insert,
  remove,
};
