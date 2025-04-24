Correcciones:
cosas que note muy bien:
- estructura clara y componentes bien separados
- buen uso de estado con useState y efectos con useEffect
- buena lógica para filtrar y ordenar elementos
- todos los componentes son reutilizables y fáciles de leer
- implementación correcta de localStorage
- integración prolija entre vista, lógica y persistencia
- fetch automático de posters desde la OMDB, fue un feature interesante.

Cosas a mejorar:
Pueden agregar value explicito a los option del select para evitar posibles bugs/errores. 

Nota: 10



# Gestor de Películas y Series 

## Miembros del grupo
- Tomás Acuña - [GitHub](https://github.com/TomasAcua)
- Facundo Garcia - [GitHub](https://github.com/FacuGarcia05)

## Descripción
Aplicación en React para gestionar películas y series por ver y vistas. Permite filtrar, buscar, ordenar, editar, eliminar y guardar todo en localStorage.

## index.js
La funcion principal de  este archivo es renderizar el componente raíz dentro del documento HTML.

## App.js
Es el componente principal de la aplicacion. Desde aqui se estructura la interfaz, se renderizan los demás componentes y se maneja la lógica general.

## index.css
Este archivo contiene los estilos globales de la aplicacion. Se utiliza para definir reglas de estilo que afecten a todo el proyecto.

## package.json
Este archivo contiene la configuracion del proyecto. Inclye el nombre, la version, las dependencias necesarias, los scripts para ejecutar tareas y otras configuraciones.

## Cómo correr el proyecto
```bash
git clone 
cd gestor-peliculas-series
npm install
npm start


//Falta agregar capturas de pantalla y ya que tienen el vercel corriendo podrian agregarlo aca tambien