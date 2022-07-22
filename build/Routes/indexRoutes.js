"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../Controllers/indexControllers");
class IndexRoutes {
    constructor() {
        //inicializamos nuestras rutas con router
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", indexControllers_1.indexControllers.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
