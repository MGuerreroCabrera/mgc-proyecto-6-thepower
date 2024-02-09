// Traer la librería dotenv y configurarla para acceder a variables de entorno
require("dotenv").config();

// Traer librería express
const express = require("express");

const { connectDB } = require("./src/config/db");

const brandsRouter = require("./src/api/routes/brands");
const shoesRouter = require("./src/api/routes/shoes");

// Crear el servidor
const app = express();

// Configurar servidor para que acepte recibir datos json
app.use(express.json());

// Conectar con la BBDD
connectDB();

// Definir ruta para recibir peticiones de Brands y Shoes
app.use("/api/v1/brands", brandsRouter);
app.use("/api/v1/shoes", shoesRouter);

// Controlar rutas que no existen para que el servidor no se rompa
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
});

// Crear variable para el puerto
const port = 3000;

// Escuchar el servidor
app.listen(port, () => {
    console.log("Servidor levantado en http://localhost:" + port + " 😜");
});