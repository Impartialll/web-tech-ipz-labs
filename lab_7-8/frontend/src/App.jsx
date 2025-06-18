import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import Form from "./components/Form";

export default function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`http://localhost:3000/users/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setEditingId(null);
    } else {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setForm({ name: "", email: "" });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  return (
    <div className="container">
      <UsersList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Form
        handleSubmit={handleSubmit}
        editingId={editingId}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}
