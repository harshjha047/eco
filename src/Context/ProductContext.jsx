import React, { createContext, useContext, useState } from "react";
import products from "../media/ProductApi";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(products.All);
  const [filtered, setFiltered] = useState(product);
  return (
    <ProductContext.Provider value={{ product, setProduct,filtered, setFiltered }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
