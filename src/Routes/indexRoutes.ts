import { Router } from "express";
import { indexControllers } from "../Controllers/indexControllers";

class IndexRoutes {
    //inicializamos nuestras rutas con router
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get("/", indexControllers.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;