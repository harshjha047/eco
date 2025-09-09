import { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let { product, setProduct } = useProduct();

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === product._id);
      if (existing) {
        return prevCart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                unit: item.unit + 1,
                cost: (item.unit + 1) * item.price,
              }
            : item
        );
      } else {
        return [...prevCart, { ...product, unit: 1, cost: product.price }];
      }
    });
  };
  const handleRemoveToCart = (ind) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item._id === ind._id);
    if (!existing) return prevCart; // nothing to remove

    if (existing.unit === 1) {
      // remove item completely if unit drops to 0
      return prevCart.filter((item) => item._id !== ind._id);
    }

    // otherwise decrease unit
    return prevCart.map((item) =>
      item._id === ind._id
        ? { ...item, unit: item.unit - 1, cost: (item.unit - 1) * item.price }
        : item
    );
  });
};

  console.log(cart);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.unit * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, setCart, totalPrice, handleAddToCart, handleRemoveToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
