"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuController_1 = __importDefault(require("../controllers/menuController"));
class MenuRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', menuController_1.default.list);
        this.router.get('/:id', menuController_1.default.listById);
        this.router.post('/', menuController_1.default.create);
        this.router.put('/:id', menuController_1.default.update);
        this.router.delete('/:id', menuController_1.default.delete);
    }
}
const menuRoutes = new MenuRoutes();
exports.default = menuRoutes.router;
