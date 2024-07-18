//  Product = {
// id: string
// name: string
// description: string
// imageUrl: string
// price: number
// }

let productsList = [
  {
    id: 1,
    name: "Pastel de Queijo",
    description: "Pastel de Queijo da Alameda com Frango e Queijo",
    imageUrl:
      "https://www.sabornamesa.com.br/media/k2/items/cache/990810f9242641a8e264ce996a78ed28_XL.jpg",
    price: 5,
  },
  {
    id: 2,
    name: "Coxinha de Frango",
    description: "Coxinha de Frango com Queijo Catupiry",
    imageUrl:
      "https://benditosalgado.com.br/wp-content/uploads/2020/04/Coxinha-Frango-Catupiry.jpg",
    price: 2.5,
  },
];

// Obter todos os produtos
const getProducts = () => {
  return productsList;
};

// Obter produtos pelo nome
const getProductsByName = (productName) => {
  const products = productsList.filter((product) => {
    return product.name == productName;
  });
  return products;
};

// Adicionar um novo produto
const createProduct = (newProduct) => {
  const productId = productsList.length + 1;
  const newProductWithId = {
    id: productId,
    ...newProduct,
  };
  productsList.push(newProductWithId);
  return productsList;
};

// TODO: Editar um produto existente
const updateProduct = (id, productUpdates) => {
  return productsList;
};

const deleteProduct = (id) => {
  productsList = productsList.filter((product) => {
    return product.id != id;
  });
  return productsList;
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
