import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../button/Button";

const Form = ({ onAdd }) => {
  const [form, setForm] = useState({
    titulo: "",
    director: "",
    año: "",
    genero: "Acción",
    rating: "",
    tipo: "Película",
    imagen: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      id: crypto.randomUUID(),
      año: Number(form.año),
      rating: Number(form.rating),
    });
    setForm({
      titulo: "",
      director: "",
      año: "",
      genero: "Acción",
      rating: "",
      tipo: "Película",
      imagen: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
        required
      />
      <input
        name="director"
        placeholder="Director"
        value={form.director}
        onChange={handleChange}
        required
      />
      <input
        name="año"
        type="number"
        placeholder="Año"
        value={form.año}
        onChange={handleChange}
        required
      />
      <select name="genero" value={form.genero} onChange={handleChange}>
        <option>Acción</option>
        <option>Comedia</option>
        <option>Drama</option>
        <option>Ciencia Ficción</option>
        <option>Terror</option>
      </select>
      <input
        name="rating"
        type="number"
        placeholder="Rating"
        value={form.rating}
        onChange={handleChange}
        required
      />
      <select name="tipo" value={form.tipo} onChange={handleChange}>
        <option>Película</option>
        <option>Serie</option>
      </select>
      <input
        name="imagen"
        placeholder="URL de imagen"
        value={form.imagen}
        onChange={handleChange}
        required
      />
      <div className={styles.buttonContainer}>
        <Button type="submit">Agregar</Button>
      </div>
    </form>
  );
};

export default Form;
