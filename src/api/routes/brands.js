// Importar métodos de controllers
const { getBrands, getBrandById, postBrand, putBrand, deleteBrand } = require("../controllers/brands");

// Importar librería express - router
const brandsRouter = require("express").Router();

// Marca por id
brandsRouter.get("/:id", getBrandById);

// Crear marca
brandsRouter.post("/", postBrand);

// Actualizar marca
brandsRouter.put("/:id", putBrand);

// Eliminar registro
brandsRouter.delete("/:id", deleteBrand);

// Listado registros
brandsRouter.get("/", getBrands);

// Exportar enrutador
module.exports = brandsRouter;
