"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingredientController_1 = __importDefault(require("../controllers/ingredientController"));
class IngredientsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingredientController_1.default.list);
        this.router.get('/:id', ingredientController_1.default.listById);
        this.router.post('/', ingredientController_1.default.create);
        this.router.put('/:id', ingredientController_1.default.update);
        this.router.delete('/:id', ingredientController_1.default.delete);
    }
}
const ingredientsRoutes = new IngredientsRoutes();
exports.default = ingredientsRoutes.router;
