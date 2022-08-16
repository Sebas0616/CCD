"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurantsController_1 = __importDefault(require("../controllers/restaurantsController"));
class RestaurantsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', restaurantsController_1.default.list);
        this.router.get('/:id', restaurantsController_1.default.listById);
        this.router.post('/', restaurantsController_1.default.create);
        this.router.put('/:id', restaurantsController_1.default.update);
        this.router.delete('/:id', restaurantsController_1.default.delete);
    }
}
const restaurantsRoutes = new RestaurantsRoutes();
exports.default = restaurantsRoutes.router;
