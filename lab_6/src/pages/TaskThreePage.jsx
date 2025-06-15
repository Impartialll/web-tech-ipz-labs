import React, { useEffect, useState } from "react";
import "../styles/TaskThreePage.css";

export default function TaskThreePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);

  return (
    <div className="users-container">
      <h2>Список користувачів</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ім’я</th>
            <th>Username</th>
            <th>Email</th>
            <th>Місто</th>
            <th>Телефон</th>
            <th>Сайт</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.address.city}</td>
              <td>{u.phone}</td>
              <td>
                <a
                  href={`http://${u.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {u.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
