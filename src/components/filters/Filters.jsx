import React from 'react';
import styles from './Filters.module.css';

const Filters = ({
  busqueda, setBusqueda,
  filtroGenero, setFiltroGenero,
  filtroTipo, setFiltroTipo,
  orden, setOrden
}) => {
  return (
    <div className={styles.filters}>
      <input
        placeholder="Buscar por título o director"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <select value={filtroGenero} onChange={(e) => setFiltroGenero(e.target.value)}>
        <option>Todos</option>
        <option>Acción</option>
        <option>Comedia</option>
        <option>Drama</option>
        <option>Ciencia Ficción</option>
        <option>Terror</option>
      </select>
      <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
        <option>Todos</option>
        <option>Película</option>
        <option>Serie</option>
      </select>
      <select value={orden} onChange={(e) => setOrden(e.target.value)}>
        <option value="default">Ordenar por</option>
        <option value="anioAsc">Año ↑</option>
        <option value="anioDesc">Año ↓</option>
        <option value="ratingAsc">Rating ↑</option>
        <option value="ratingDesc">Rating ↓</option>
      </select>
    </div>
  );
};

export default Filters;
