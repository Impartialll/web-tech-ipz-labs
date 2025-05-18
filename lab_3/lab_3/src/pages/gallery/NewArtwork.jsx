import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./styles/NewArtwork.css";

export default function NewArtwork() {
  useEffect(() => {
    document.title = "Нова картина";
  }, []);

  const navigate = useNavigate();
  const [artworks, setArtworks] = useOutletContext();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newArt = {
      id: artworks.length > 0 ? Math.max(...artworks.map((a) => a.id)) + 1 : 1,
      title: data.title,
      author: data.author,
      year: parseInt(data.year),
      description: data.description,
      fullDescription: data.fullDescription,
      img: data.img,
    };

    setArtworks([...artworks, newArt]);
    reset();
    navigate("/gallery");
  };

  return (
    <div>
      <h2>Додати нову картину</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Назва" />
        <br />
        <input {...register("author")} placeholder="Автор" />
        <br />
        <input
          {...register("year")}
          type="number"
          placeholder="Рік написання"
        />
        <br />
        <input {...register("description")} placeholder="Короткий опис" />
        <br />
        <textarea
          {...register("fullDescription")}
          cols={30}
          rows={8}
          placeholder="Повний опис"
        />
        <br />
        <input {...register("img")} placeholder="URL зображення" />
        <br />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}
