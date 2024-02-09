// Importar el modelo
const Shoe = require("../models/shoes");

// Listar registros
const getShoes = async (req, res, next) => {
    try {

        // Crear variable donde irán los registros
        const shoes = await Shoe.find().populate("brand");

        // Devolver el resultado y json
        return res.status(200).json(shoes);
        
    } catch (error) {

        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");
        
    }
};

// Obtener registro por ID
const getShoeById = async (req, res, next) => {
    try {

        // Recoger el id del registro a buscar
        const { id } = req.params;

        // Declarar variable que contendrá el registro
        const shoe = await Shoe.findById(id).populate("brand");

        // Devolver resultado y json
        return res.status(200).json(shoe);
        
    } catch (error) {

        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Crear registro
const postShoe = async (req, res, next) => {
    try {

        // Crear variable con los datos a insertar
        const newShoe = new Shoe(req.body);

        // Lanzar la petición para guardar registro
        const shoeSaved = await newShoe.save();

        // Devolver resultado y json
        return res.status(201).json(shoeSaved);
        
    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Actualizar registro
const putShoe = async (req, res, next) => {
    try {
        
        // Recoger el id del registro a actualizar
        const { id } = req.params;

        // Crear variable con los datos a actualizar
        const newShoe = new Shoe(req.body);

        // Asignar mismo id
        newShoe._id = id;

        // Lanzar petición de actualizar registro
        const shoeUpdated = await Shoe.findByIdAndUpdate(id, newShoe, { new: true });

        // Devolver resultado y json
        return res.status(200).json(shoeUpdated);

    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");
    }
};

// Eliminar registro
const deleteShoe = async (req, res, next) => {
    try {
        
        // Recoger el id del registro a eliminar
        const { id } = req.params;

        // Crear variable donde almacenar registro eliminado y eliminar
        const shoeDeleted = await Shoe.findByIdAndDelete(id);

        // Devolver resultado y json
        return res.status(200).json(shoeDeleted);

    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Exportar los métodos
module.exports = { getShoes, getShoeById, postShoe, putShoe, deleteShoe };