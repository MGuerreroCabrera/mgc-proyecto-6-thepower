// Traer la librería mongoose
const mongoose = require("mongoose");

// Crear el Schema
const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    brand: [{ type: mongoose.Types.ObjectId, ref: "brands" }]
}, {
    timestamps: true,
    collection: "shoes"
});

// Crear el modelo
const Shoe = mongoose.model("shoes", shoeSchema, "shoes");

// Exportar el modelo
module.exports = Shoe;