"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const restaurantsRoutes_1 = __importDefault(require("./routes/restaurantsRoutes"));
const ingredientRoutes_1 = __importDefault(require("./routes/ingredientRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/restaurantes', restaurantsRoutes_1.default);
        this.app.use('/api/ingredientes', ingredientRoutes_1.default);
        this.app.use('/api/productos', productsRoutes_1.default);
        this.app.use('/api/menu', menuRoutes_1.default);
        this.app.use('/api/pedidos', orderRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
