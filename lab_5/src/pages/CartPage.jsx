import React from "react";
import { useCart } from "../context/CartContext";
import { mockProducts } from "../mockProducts";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  const getProduct = (id) => mockProducts.find((p) => p.id === id);

  React.useEffect(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    document.title = `Кошик (${totalItems})`;
  }, [cart]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Кошик порожній.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {cart.map((item) => {
            const product = getProduct(item.id);
            return (
              <li key={item.id} style={{ marginBottom: "1rem" }}>
                <span style={{ margin: "0 10px" }}>
                  <strong>{product.name}</strong> —
                </span>
                Кількість: {item.count}
                <div>
                  <button
                    style={{ margin: "0 10px" }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <button
                    style={{ margin: "0 10px" }}
                    onClick={() => addToCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
