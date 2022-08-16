import { Request, Response } from 'express';

import db from '../database';

class OrderController {

    public async list (req: Request, res: Response) {
        const order = await db.query('SELECT * FROM pedido');
        res.json(order[0]);
        console.log(order[0]);
    }

    public async listById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const order = await db.query('SELECT * FROM pedido WHERE Id = ?', [id]);
        if (order.length > 0){
            return res.json(order[0][0]);
        }
        else{
            return res.status(404).json({text: 'El pedido no existe'});
        }
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO pedido set ?', [req.body]);
        res.json({message: 'Pedido creado'});

    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE pedido set ? WHERE Id = ?', [req.body, id]);
        res.json({message: 'Pedido modificado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM pedido WHERE Id = ?', [id])
        res.json({message: 'Pedido eliminado'});
    }

}

const orderController = new OrderController();
export default orderController;