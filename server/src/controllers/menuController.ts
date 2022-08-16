import { Request, Response } from 'express';

import db from '../database';

class MenuController {

    public async list (req: Request, res: Response) {
        const menu = await db.query('SELECT * FROM menu');
        res.json(menu[0]);
        console.log(menu[0]);
    }

    public async listById (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const menu = await db.query('SELECT * FROM menu WHERE Id = ?', [id]);
        if (menu.length > 0){
            return res.json(menu[0][0]);
        }
        else{
            return res.status(404).json({text: 'El menú no existe'});
        }
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO menu set ?', [req.body]);
        res.json({message: 'Menú creado'});

    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE menu set ? WHERE Id = ?', [req.body, id]);
        res.json({message: 'Menú modificado'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM menu WHERE Id = ?', [id])
        res.json({message: 'Menú eliminado'});
    }

}

const menuController = new MenuController();
export default menuController;