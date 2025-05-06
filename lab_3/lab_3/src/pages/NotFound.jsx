import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  React.useEffect(() => {document.title = "404"},[]);
  return (
    <div className="page">
      <h2>404 — Сторінку не знайдено</h2>
      <p>
        Ми не змогли знайти цю сторінку. Можливо, ви перейшли за некоректним
        посиланням.
      </p>
      <Link to="/" style={{ color: "blue", textDecoration: "none" }}>
        Повернутись на головну
      </Link>
    </div>
  );
}