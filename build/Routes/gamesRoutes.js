"use strict";
//rutas para conectar con angular
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameControllers_1 = require("../Controllers/gameControllers");
class gamesRoutes {
    constructor() {
        //inicializamos nuestras rutas con router
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //muestra todos los datos
        this.router.get("/", [], gameControllers_1.gamesControllers.list);
        //muestra un solo dato
        this.router.get("/:id", gameControllers_1.gamesControllers.getOne);
        // crear juegos o guardar datos llamamos el metodo desde los controlers
        this.router.post("/", gameControllers_1.gamesControllers.create);
        // eliminar datos
        this.router.delete("/:id", gameControllers_1.gamesControllers.delete);
        //actualizar el juego o datos
        this.router.put("/:id", gameControllers_1.gamesControllers.update);
    }
}
const GamesRoutes = new gamesRoutes();
exports.default = GamesRoutes.router;
