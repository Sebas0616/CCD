"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controllers/orderController"));
class OrderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', orderController_1.default.list);
        this.router.get('/:id', orderController_1.default.listById);
        this.router.post('/', orderController_1.default.create);
        this.router.put('/:id', orderController_1.default.update);
        this.router.delete('/:id', orderController_1.default.delete);
    }
}
const orderRoutes = new OrderRoutes();
exports.default = orderRoutes.router;
