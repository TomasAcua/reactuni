import React from 'react';
import styles from './ItemList.module.css';

const ItemList = ({ title, items }) => {
  const totalPorGenero = items.reduce((acc, item) => {
    acc[item.genero] = (acc[item.genero] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.listContainer}>
      <h2>{title} ({items.length})</h2>

      {Object.keys(totalPorGenero).map((genero) => (
        <p key={genero}>{genero}: {totalPorGenero[genero]}</p>
      ))}

      {items.length === 0 ? (
        <p className={styles.emptyMessage}>No hay elementos en esta lista.</p>
      ) : (
        <ul className={styles.itemList}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <img src={item.imagen} alt={item.titulo} />
              <div>
                <strong>{item.titulo}</strong> ({item.tipo})<br />
                Director: {item.director}<br />
                Año: {item.año} | Rating: {item.rating}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
