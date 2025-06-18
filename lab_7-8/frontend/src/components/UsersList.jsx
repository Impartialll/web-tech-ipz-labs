export default function UsersList({ users, handleEdit, handleDelete }) {
  return (
    <>
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b> – {user.email}
            <br />
            <button onClick={() => handleEdit(user)}>Редагувати</button>
            <button
              onClick={() => handleDelete(user.id)}
              style={{ marginLeft: "10px" }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
