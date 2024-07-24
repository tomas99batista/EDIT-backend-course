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
  const createdProduct = await productsData.createProduct(newProduct);
  // OPTION 1: - retornar todos os produtos
  // const allProducts = getProducts();
  // return allProducts;
  // OPTION 2: - retornar o produto certo
  const product = await productsData.getProductById(createdProduct.insertedId);
  return product;
};

// TODO: Editar um produto existente
const updateProduct = async (id, productUpdates) => {
  const updatedProduct = await productsData.updateProduct(id, productUpdates);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProducts = await productsData.deleteProduct(id);
  return deletedProducts;
  // OPTION 1: enviar a lista toda atualizada (getProducts())
  // const allProducts = getProducts();
  // return allProducts;
};

export default {
  getProducts,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
