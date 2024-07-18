import productsData from "./productsData.js";

const getProducts = () => {
  const products = productsData.getProducts();
  return products;
};

const getProductsByName = (productName) => {
  const products = productsData.getProductsByName(productName);
  return products;
};

const createProduct = (newProduct) => {
  const updatedProducts = productsData.createProduct(newProduct);
  return updatedProducts;
};

// TODO: Editar um produto existente
const updateProduct = (id, productUpdates) => {
  const updatedProduct = productsData.updateProduct(id, productUpdates);
  return updatedProduct;
};

const deleteProduct = (id) => {
  const updatedProducts = productsData.deleteProduct(id);
  return updatedProducts;
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
