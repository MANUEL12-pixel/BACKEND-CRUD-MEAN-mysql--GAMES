//importamos nuestras librerias
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexroutes from "./Routes/indexRoutes";
import gamesroutes from "./Routes/gamesRoutes";

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    //configuracion del servidor y el puerto en el que escuchara
    config(): void {
        this.app.set("port", process.env.PORT || 3500);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    //configuracion de rutas las cuales usara el frontend
    routes(): void {
        this.app.use("/", indexroutes);
        this.app.use("/api/games", gamesroutes);
    }

    //el servidor escuchara
    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start;

