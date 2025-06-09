import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  React.useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Сторінку не знайдено</p>
      <Link to="/" style={styles.link}>
        Повернутися на головну
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  code: {
    fontSize: "5rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
  },
  link: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#007bff",
  },
};
