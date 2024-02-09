// Traer librería mongoose
const mongoose = require("mongoose");

// Crear función para conectar a la BBDD
const connectDB = async () => {
    try {
        
        // Resolver asincronía y conectar a la BBDD
        await mongoose.connect(process.env.DB_URL);

        console.log("Conectado a la BBDD 🥳")

    } catch (error) {
        
        console.log(error);

    }
};

module.exports = { connectDB }