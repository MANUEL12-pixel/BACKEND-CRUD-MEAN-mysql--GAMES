import { Request, Response } from "express";

class IndexControllers {
    public index(req: Request, res: Response) {
        res.json({ text: "API Is /api/games" });
    }
}

export const indexControllers = new IndexControllers();