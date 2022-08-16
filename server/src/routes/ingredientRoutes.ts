import { Router } from 'express';

import ingredientsController from '../controllers/ingredientController'

class IngredientsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config() {
        this.router.get('/', ingredientsController.list);
        this.router.get('/:id', ingredientsController.listById);
        this.router.post('/', ingredientsController.create);
        this.router.put('/:id', ingredientsController.update)
        this.router.delete('/:id', ingredientsController.delete);
    }
}

const ingredientsRoutes = new IngredientsRoutes()
export default ingredientsRoutes.router;