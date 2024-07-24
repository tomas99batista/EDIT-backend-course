import productsData from "./productsData.js";

const getProducts = async () => {
  const products = await productsData.getProducts();
  return products;
};

const getProductsByName = async (productName) => {
  const products = await productsData.getProductsByName(productName);
  return products;
};

const createProduct = async (newProduct) => {
  const updatedProducts = await productsData.createProduct(newProduct);
  return updatedProducts;
};

// TODO: Editar um produto existente
const updateProduct = async (id, productUpdates) => {
  const updatedProduct = await productsData.updateProduct(id, productUpdates);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const updatedProducts = await productsData.deleteProduct(id);
  return updatedProducts;
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
