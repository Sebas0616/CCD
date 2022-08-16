import { Router } from 'express';

import orderController from '../controllers/orderController'

class OrderRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config() {
        this.router.get('/', orderController.list);
        this.router.get('/:id', orderController.listById);
        this.router.post('/', orderController.create);
        this.router.put('/:id', orderController.update)
        this.router.delete('/:id', orderController.delete);
    }
}

const orderRoutes = new OrderRoutes()
export default orderRoutes.router;