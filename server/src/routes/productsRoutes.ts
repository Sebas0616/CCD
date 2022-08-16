import { Router } from 'express';

import productsController from '../controllers/productController'

class ProductsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config() {
        this.router.get('/', productsController.list);
        this.router.get('/:id', productsController.listById);
        this.router.post('/', productsController.create);
        this.router.put('/:id', productsController.update)
        this.router.delete('/:id', productsController.delete);
    }
}

const productsRoutes = new ProductsRoutes()
export default productsRoutes.router;