// Importar métodos de controllers
const { getShoes, getShoeById, postShoe, putShoe, deleteShoe } = require("../controllers/shoes");


// Importar librería express - router
const shoesRouter = require("express").Router();

// Marca por id
shoesRouter.get("/:id", getShoeById);

// Crear marca
shoesRouter.post("/", postShoe);

// Actualizar marca
shoesRouter.put("/:id", putShoe);

// Eliminar registro
shoesRouter.delete("/:id", deleteShoe);

// Listado registros
shoesRouter.get("/", getShoes);

// Exportar enrutador
module.exports = shoesRouter;