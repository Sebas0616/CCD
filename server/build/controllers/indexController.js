"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API está en /api/restaurantes' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
