import productsData from "./productsData.js";

const createProduct = (newProduct) => {
  const updatedProducts = productsData.createProduct(newProduct);
  return updatedProducts;
};

// TODO: Remover um produto existente

// TODO: Editar um produto existente

export default {
  createProduct,
};
