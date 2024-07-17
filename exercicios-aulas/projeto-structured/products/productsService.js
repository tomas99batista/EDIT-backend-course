import productsData from "./productsData.js";

const getProducts = () => {
  const products = productsData.getProducts();
  return products;
};

const createProduct = (newProduct) => {
  const updatedProducts = productsData.createProduct(newProduct);
  return updatedProducts;
};

const deleteProduct = (id) => {
  const updatedProducts = productsData.deleteProduct(id);
  return updatedProducts;
};

// TODO: Editar um produto existente

export default {
  getProducts,
  createProduct,
  deleteProduct,
};
