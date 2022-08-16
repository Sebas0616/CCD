import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import restaurantRoutes from './routes/restaurantsRoutes';
import ingredientRoutes from './routes/ingredientRoutes';
import productsRoutes from './routes/productsRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes'

class Server{

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/restaurantes', restaurantRoutes);
        this.app.use('/api/ingredientes', ingredientRoutes);
        this.app.use('/api/productos', productsRoutes);
        this.app.use('/api/menu', menuRoutes);
        this.app.use('/api/pedidos', orderRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();