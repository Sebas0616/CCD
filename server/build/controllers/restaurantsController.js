"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class RestaurantsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurants = yield database_1.default.query('SELECT * FROM restaurante');
            res.json(restaurants[0]);
            console.log(restaurants[0]);
        });
    }
    listById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const restaurants = yield database_1.default.query('SELECT * FROM restaurante WHERE Id = ?', [id]);
            if (restaurants.length > 0) {
                return res.json(restaurants[0][0]);
            }
            else {
                return res.status(404).json({ text: 'El restaurante no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO restaurante set ?', [req.body]);
            res.json({ message: 'Restaurante creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE restaurante set ? WHERE Id = ?', [req.body, id]);
            res.json({ message: 'Restaurante modificado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM restaurante WHERE Id = ?', [id]);
            res.json({ message: 'Restaurante eliminado' });
        });
    }
}
const restaurantsController = new RestaurantsController();
exports.default = restaurantsController;
