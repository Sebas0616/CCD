import { Router } from 'express';

import restaurantsController from '../controllers/restaurantsController'

class RestaurantsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config() {
        this.router.get('/', restaurantsController.list);
        this.router.get('/:id', restaurantsController.listById);
        this.router.post('/', restaurantsController.create);
        this.router.put('/:id', restaurantsController.update)
        this.router.delete('/:id', restaurantsController.delete);
    }
}

const restaurantsRoutes = new RestaurantsRoutes()
export default restaurantsRoutes.router;