import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title.jsx";
import ItemList from "../../components/ItemList/ItemList.jsx";
import Form from "../../components/form/form.jsx";
import styles from "./Home.module.css";
import inceptionImg from "../../assets/img/inception.png";
import Button from "../../components/button/Button.jsx";
import Filters from "../../components/filters/Filters.jsx";

const Home = () => {
    const [porVer, setPorVer] = useState([
        {
            id: 1,
            imagen: inceptionImg,
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

    const handleToggleVisto = (item) => {
        if (porVer.includes(item)) {
            setPorVer(porVer.filter(i => i.id !== item.id));
            setVistas([...vistas, item]);
        } else {
            setVistas(vistas.filter(i => i.id !== item.id));
            setPorVer([...porVer, item]);
        }
    };

    const handleDelete = (item) => {
        setPorVer(porVer.filter(i => i.id !== item.id));
        setVistas(vistas.filter(i => i.id !== item.id));
    };

    const [busqueda, setBusqueda] = useState('');
    const [filtroGenero, setFiltroGenero] = useState('Todos');
    const [filtroTipo, setFiltroTipo] = useState('Todos');
    const [orden, setOrden] = useState('default');

    const filtrarYOrdenar = (lista) => {
        let resultado = [...lista];

        // Filtro búsqueda
        resultado = resultado.filter(item =>
            item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
            item.director.toLowerCase().includes(busqueda.toLowerCase())
        );

        // Filtro por género
        if (filtroGenero !== 'Todos') {
            resultado = resultado.filter(item => item.genero === filtroGenero);
        }

        // Filtro por tipo
        if (filtroTipo !== 'Todos') {
            resultado = resultado.filter(item => item.tipo === filtroTipo);
        }

        // Ordenamiento
        if (orden === 'anioAsc') {
            resultado.sort((a, b) => a.año - b.año);
        } else if (orden === 'anioDesc') {
            resultado.sort((a, b) => b.año - a.año);
        } else if (orden === 'ratingAsc') {
            resultado.sort((a, b) => a.rating - b.rating);
        } else if (orden === 'ratingDesc') {
            resultado.sort((a, b) => b.rating - a.rating);
        }

        return resultado;
    };

    const porVerFiltradas = filtrarYOrdenar(porVer);
    const vistasFiltradas = filtrarYOrdenar(vistas);

    useEffect(() => {
        const porVerLS = localStorage.getItem("porVer");
        const vistasLS = localStorage.getItem("vistas");

        if (porVerLS) setPorVer(JSON.parse(porVerLS));
        if (vistasLS) setVistas(JSON.parse(vistasLS));
    }, []);

    useEffect(() => {
        localStorage.setItem("porVer", JSON.stringify(porVer));
    }, [porVer]);

    useEffect(() => {
        localStorage.setItem("vistas", JSON.stringify(vistas));
    }, [vistas]);

    return (
        <div className={styles.container}>
            <Title text="Gestor de Películas y Series T/F" />

            <p>¡Bienvenidos! Acá vas a poder gestionar tus películas y series por ver y las ya vistas.</p>
            <Button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                {mostrarFormulario ? "Cerrar formulario" : "Agregar nueva película/serie"}
            </Button>

            {mostrarFormulario && <Form onAdd={handleAdd} />}
            <Filters
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                filtroGenero={filtroGenero}
                setFiltroGenero={setFiltroGenero}
                filtroTipo={filtroTipo}
                setFiltroTipo={setFiltroTipo}
                orden={orden}
                setOrden={setOrden}
            />
            <div className={styles.listContainer}>
                <ItemList
                    title="Por Ver"
                    items={porVerFiltradas} // Lista filtrada
                    onToggleVisto={handleToggleVisto}
                    onDelete={handleDelete}
                />
                <ItemList
                    title="Vistas"
                    items={vistasFiltradas} // Lista filtrada
                    onToggleVisto={handleToggleVisto}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default Home;