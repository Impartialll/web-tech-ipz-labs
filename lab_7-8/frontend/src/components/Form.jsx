export default function Form({ handleSubmit, editingId, form, setForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingId ? "Редагувати користувача" : "Додати користувача"}</h3>
      <input
        placeholder="Ім'я"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <br />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <br />
      <button type="submit">{editingId ? "Оновити" : "Додати"}</button>
    </form>
  );
}
