import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === id);
      if (found) {
        return prev.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { id, count: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, theme, toggleTheme }}
    >
      {children}
    </CartContext.Provider>
  );
}
