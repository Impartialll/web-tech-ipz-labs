import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";

import Header from "./components/Header";

import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import TodoListOnePage from "./pages/TaskProgs/one/TodoListOnePage";
import TodoListTwoPage from "./pages/TaskProgs/two/TodoListTwoPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/todo-list-one" element={<TodoListOnePage />} />
          <Route path="/todo-list-two" element={<TodoListTwoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
