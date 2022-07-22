//rutas para conectar con angular

import { Router } from "express";
import { gamesControllers } from "../Controllers/gameControllers";

class gamesRoutes {
    //inicializamos nuestras rutas con router
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //muestra todos los datos
        this.router.get("/", [], gamesControllers.list);
        //muestra un solo dato
        this.router.get("/:id", gamesControllers.getOne);
        // crear juegos o guardar datos llamamos el metodo desde los controlers
        this.router.post("/", gamesControllers.create);
        // eliminar datos
        this.router.delete("/:id", gamesControllers.delete);
        //actualizar el juego o datos
        this.router.put("/:id", gamesControllers.update);
    }
}

const GamesRoutes = new gamesRoutes();
export default GamesRoutes.router;