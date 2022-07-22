"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(req, res) {
        res.json({ text: "API Is /api/games" });
    }
}
exports.indexControllers = new IndexControllers();
