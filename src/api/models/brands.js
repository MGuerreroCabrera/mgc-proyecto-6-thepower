// Traer librería mongoose
const mongoose = require("mongoose");

// Crear el Schema
const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
    collection: "brands"
});

// Crear el modelo
const Brand = mongoose.model("brands", brandSchema, "brands");

// Exportar el modelo
module.exports = Brand;