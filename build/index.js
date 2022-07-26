"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos nuestras librerias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./Routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./Routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.start();
    }
    //configuracion del servidor y el puerto en el que escuchara
    config() {
        this.app.set("port", process.env.PORT || 3500);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //configuracion de rutas las cuales usara el frontend
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/games", gamesRoutes_1.default);
    }
    //el servidor escuchara
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start;
