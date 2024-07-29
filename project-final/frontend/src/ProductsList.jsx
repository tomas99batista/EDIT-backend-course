import {useEffect, useState} from "react";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [products]);

  // const deleteProduct = async (productId) => {
  //   try {
  //     await fetch(`http://localhost:3000/products/${productId}`, {
  //       method: "DELETE",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product._id}>
          <span>
            {product.name} - {product.price}
          </span>
          {/* <button onClick={() => deleteProduct(product._id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};
