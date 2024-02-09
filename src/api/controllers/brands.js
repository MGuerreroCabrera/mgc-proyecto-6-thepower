// Importar el modelo Brands.
const Brand = require("../models/brands");

// Listado de registros
const getBrands = async (req, res, next) => {
    try {
        
        // Crear variable que contendrá los registros
        const brands = await Brand.find();

        // Devolver resultado y json
        return res.status(200).json(brands);

    } catch (error) {

        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");
        
    }
};

// Obtener registro por ID
const getBrandById = async (req, res, next) => {
    try {

        // Recoger el id del registro a buscar
        const { id } = req.params;

        // Declarar variable que contendrá el registro
        const brand = await Brand.findById(id);

        // Devolver resultado y json
        return res.status(200).json(brand);
        
    } catch (error) {

        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Crear registro
const postBrand = async (req, res, next) => {
    try {

        // Crear variable con los datos a insertar
        const newBrand = new Brand(req.body);

        // Lanzar la petición para guardar registro
        const brandSaved = await newBrand.save();

        // Devolver resultado y json
        return res.status(201).json(brandSaved);
        
    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Actualizar registro
const putBrand = async (req, res, next) => {
    try {
        
        // Recoger el id del registro a actualizar
        const { id } = req.params;

        // Crear variable con los datos a actualizar
        const newBrand = new Brand(req.body);

        // Asignar mismo id
        newBrand._id = id;

        // Lanzar petición de actualizar registro
        const brandUpdated = await Brand.findByIdAndUpdate(id, newBrand, { new: true });

        // Devolver resultado y json
        return res.status(200).json(brandUpdated);

    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");
    }
};

// Eliminar registro
const deleteBrand = async (req, res, next) => {
    try {
        
        // Recoger el id del registro a eliminar
        const { id } = req.params;

        // Crear variable donde almacenar registro eliminado y eliminar
        const brandDeleted = await Brand.findByIdAndDelete(id);

        // Devolver resultado y json
        return res.status(200).json(brandDeleted);

    } catch (error) {
        
        return res.status(400).json("Error: Algo ha ocurrido con la solicitud");

    }
};

// Exportar los métodos
module.exports = { getBrands, getBrandById, postBrand, putBrand, deleteBrand };