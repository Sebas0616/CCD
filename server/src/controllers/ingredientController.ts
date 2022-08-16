import { Request, Response } from 'express';

import db from '../database';

class IngredientController {

    public async list (req: Request, res: Response) {
        const ingredients = await db.query('SELECT * FROM ingrediente');
        res.json(ingredients[0]);
        console.log(ingredients[0]);
    }

    public async listById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ingredients = await db.query('SELECT * FROM ingrediente WHERE Id = ?', [id]);
        if (ingredients.length > 0){
            return res.json(ingredients[0][0]);
        }
        else{
            return res.status(404).json({text: 'El ingrediente no existe'});
        }
        
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO ingrediente set ?', [req.body]);
        res.json({message: 'Ingrediente creado'});

    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE ingrediente set ? WHERE Id = ?', [req.body, id]);
        res.json({message: 'Ingrediente modificado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM ingrediente WHERE Id = ?', [id])
        res.json({message: 'Ingrediente eliminado'});
    }

}

const ingredientsController = new IngredientController();
export default ingredientsController;