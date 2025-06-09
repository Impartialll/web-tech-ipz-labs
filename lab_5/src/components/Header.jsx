import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart, theme, toggleTheme } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header>
      <Link to="/">Товари</Link>
      <Link to="/cart">Кошик ({totalItems})</Link>
      <Link to="/todo-list-one">Tasks 1</Link>
      <Link to="/todo-list-two">Tasks 2</Link>
      <button onClick={toggleTheme}>
        Змінити тему ({theme === "light" ? "🌞" : "🌙"})
      </button>
    </header>
  );
}
