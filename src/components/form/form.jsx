import React, { useState, useEffect } from "react";
import styles from "./form.module.css";
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
    nota: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const añoValido = Number(form.año) >= 1600 && Number(form.año) <= new Date().getFullYear();
    const ratingValido = Number(form.rating) >= 0 && Number(form.rating) <= 10;

    if (!añoValido) {
      alert("El año debe ser entre 1600 y el actual.");
      return;
    }

    if (!ratingValido) {
      alert("El rating debe estar entre 0 y 10.");
      return;
    }

    onAdd({ ...form, id: crypto.randomUUID(), año: Number(form.año), rating: Number(form.rating) });
    setForm({
      titulo: '',
      director: '',
      año: '',
      genero: 'Acción',
      rating: '',
      tipo: 'Película',
      imagen: '',
      nota: "",
    });
  };

  useEffect(() => {
    const fetchPoster = async () => {
      if (form.titulo.length < 3) return;
  
      try {
        const res = await fetch(`https://www.omdbapi.com/?t=${form.titulo}&apikey=2bc42f63`);
        const data = await res.json();
        if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
          setForm(prev => ({ ...prev, imagen: data.Poster }));
        }
      } catch (err) {
        console.error("Error al buscar imagen:", err);
      }
    };
  
    fetchPoster();
  }, [form.titulo]);
  

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
      <textarea
        name="nota"
        placeholder="Notas personales (opcional)"
        value={form.nota}
        onChange={handleChange}
      />

      <div className={styles.buttonContainer}>
        <Button type="submit">Agregar</Button>
      </div>
    </form>
  );
};

export default Form;
