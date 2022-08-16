import { Request, Response } from 'express';

import db from '../database';

class ProductsController {

    public async list (req: Request, res: Response) {
        const products = await db.query('SELECT * FROM producto');
        res.json(products[0]);
        console.log(products[0]);
    }

    public async listById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const products = await db.query('SELECT * FROM producto WHERE Id = ?', [id]);
        if (products.length > 0){
            return res.json(products[0][0]);
        }
        else{
            return res.status(404).json({text: 'El producto no existe'});
        }
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO producto set ?', [req.body]);
        res.json({message: 'Producto creado'});

    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE producto set ? WHERE Id = ?', [req.body, id]);
        res.json({message: 'Producto modificado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM producto WHERE Id = ?', [id])
        res.json({message: 'Producto eliminado'});
    }

}

const productsController = new ProductsController();
export default productsController;