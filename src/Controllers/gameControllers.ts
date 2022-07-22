import { Request, Response } from "express";
import pool from "../database";

class GamesControllers {
    //metodo para listar
    public async list(req: Request, res: Response) {
        const games = await pool.query(`SELECT * FROM games`);
        res.json(games);
    }

    //metodo para consultar uno
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
        if (games.length > 0) {
            return res.json(games[0]);
        } else {
            res.status(404).json({ text: "El juego no existe" });
        }
        res.json(games);
    }
    //metodo para crear
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query(`INSERT INTO games set ?`, [req.body]);
        console.log(req.body);
        res.json({ text: "creating game" });
    }

    //metodo para eliminar
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("DELETE FROM games WHERE id = ?", [id]);
        res.json({ text: "Juego eliminado" });
    }

    //metodo para actualizar
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("UPDATE games set ? WHERE id = ?", [req.body, id]);
        res.json({ text: "el juego fue actualizado" });
    }
}

export const gamesControllers = new GamesControllers();
export default GamesControllers;