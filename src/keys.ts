export default {
    //informacion de la base de datos a la que se conectara
    database: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.BD_USER || "root",
        password: process.env.DB_PASSWORD || "13578924680",
        database: process.env.DB_NAME || "ng_games_db"
    },
}