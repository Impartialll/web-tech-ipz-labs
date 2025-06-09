import React from "react";
import { useCart } from "../context/CartContext";
import { mockProducts } from "../mockProducts";

export default function ProductsPage() {
  const { addToCart, removeFromCart, cart } = useCart();

  const getCount = (id) => cart.find((item) => item.id === id)?.count || 0;

  React.useEffect(() => {
    document.title = "Товари";
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Товари</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {mockProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <strong>{product.name}</strong>
            <div>
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{getCount(product.id)}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
