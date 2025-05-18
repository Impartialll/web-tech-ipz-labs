import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./styles/EditArtwork.css";

export default function EditArtwork() {
  const { id } = useParams();
  const [artworks, setArtworks] = useOutletContext();
  const navigate = useNavigate();

  const artwork = artworks.find((a) => a.id === parseInt(id));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: artwork,
  });

  useEffect(() => {
    if (artwork) reset(artwork);
  }, [artwork, reset]);

  const onSubmit = (data) => {
    const updated = artworks.map((a) =>
      a.id === artwork.id ? { ...data, id: artwork.id } : a
    );
    setArtworks(updated);
    navigate("/gallery");
  };

  if (!artwork) return <p>Картину не знайдено</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-artwork-form">
      <h2>Редагувати картину: {artwork.title}</h2>
      <input {...register("title", { required: true })} placeholder="Назва" />
      {errors.title && <span>Назва обов'язкова</span>}

      <input {...register("author", { required: true })} placeholder="Автор" />
      {errors.author && <span>Автор обов'язковий</span>}

      <input
        type="number"
        {...register("year", { valueAsNumber: true })}
        placeholder="Рік"
      />

      <input {...register("description")} placeholder="Короткий опис" />
      <textarea
        {...register("fullDescription")}
        placeholder="Повний опис"
        rows={6}
      />

      <input {...register("img")} placeholder="URL зображення" />

      <button type="submit">💾 Зберегти</button>
    </form>
  );
}
