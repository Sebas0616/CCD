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
class MenuController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query('SELECT * FROM menu');
            res.json(menu[0]);
            console.log(menu[0]);
        });
    }
    listById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const menu = yield database_1.default.query('SELECT * FROM menu WHERE Id = ?', [id]);
            if (menu.length > 0) {
                return res.json(menu[0][0]);
            }
            else {
                return res.status(404).json({ text: 'El menú no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO menu set ?', [req.body]);
            res.json({ message: 'Menú creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE menu set ? WHERE Id = ?', [req.body, id]);
            res.json({ message: 'Menú modificado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM menu WHERE Id = ?', [id]);
            res.json({ message: 'Menú eliminado' });
        });
    }
}
const menuController = new MenuController();
exports.default = menuController;
