import React, { useState } from "react";
import Title from "../../components/Title/Title.jsx";
import ItemList from "../../components/ItemList/ItemList.jsx";
import Form from "../../components/form/form.jsx";
import styles from "./home.module.css";
import inceptionImg from "../../assets/img/inception.png"; // Importa la imagen
import Button from "../../components/button/button.jsx";


const Home = () => {
    const [porVer, setPorVer] = useState([
        {
            id: 1,
            imagen: inceptionImg, // Asigna la imagen importada
            titulo: "Inception",
            director: "Christopher Nolan",
            año: 2010,
            genero: "Ciencia Ficción",
            rating: 8.8,
            tipo: "película",
        },
    ]);
    const [vistas, setVistas] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleAdd = (item) => {
        setPorVer([...porVer, item]);
    };

    return (
        <div className={styles.container}>
            <Title text="Gestor de Películas y Series T/F" />

            <p>¡Bienvenidos! Acá vas a poder gestionar tus películas y series por ver y las ya vistas.</p>
            <Button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                {mostrarFormulario ? "Cerrar formulario" : "Agregar nueva película/serie"}
            </Button>
            {mostrarFormulario && <form onAdd={handleAdd} />} */

            <Form onAdd={handleAdd} />
            <div className={styles.listContainer}>
                <ItemList title="Por Ver" items={porVer} />
                <ItemList title="Vistas" items={vistas} />
            </div>
        </div>
    );
};

export default Home;