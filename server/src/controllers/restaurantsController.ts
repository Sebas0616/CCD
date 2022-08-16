import { Request, Response } from 'express';

import db from '../database';

class RestaurantsController {

    public async list (req: Request, res: Response) {
        const restaurants = await db.query('SELECT * FROM restaurante');
        res.json(restaurants[0]);
        console.log(restaurants[0]);
    }

    public async listById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const restaurants = await db.query('SELECT * FROM restaurante WHERE Id = ?', [id]);
        if (restaurants.length > 0){
            return res.json(restaurants[0][0]);
        }
        else{
            return res.status(404).json({text: 'El restaurante no existe'});
        }
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO restaurante set ?', [req.body]);
        res.json({message: 'Restaurante creado'});

    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE restaurante set ? WHERE Id = ?', [req.body, id]);
        res.json({message: 'Restaurante modificado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM restaurante WHERE Id = ?', [id])
        res.json({message: 'Restaurante eliminado'});
    }

}

const restaurantsController = new RestaurantsController();
export default restaurantsController;