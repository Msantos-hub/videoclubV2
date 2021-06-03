import {        Request, Response} from 'express';

import pool from "../database";

class PelisController{

    public async list (req:Request, res:Response): Promise<void>{
       const pelis = await pool.query('SELECT * FROM peliculas');
       res.json(pelis);
    }

    public async getOne (req:Request, res:Response): Promise<any>{
       const { id } = req.params;
       const pelis = await pool.query('SELECT * FROM peliculas WHERE codPelicula = ?', [id]);
        console.log(pelis.length);
       if(pelis.length > 0 ){
           return res.json(pelis[0]);
       }
       res.status(404).json({ text: 'Pelicula no encontrada'});
    }

    public async create (req:Request, res:Response): Promise<void>{
        const result = await pool.query('INSERT INTO peliculas set ?',[req.body]);
        res.json({message: 'pelicula guardada'});
    }

    public async delete (req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM peliculas WHERE codPelicula = ?', [id])
        res.json({message: 'pelicula eliminada'});
    }

    public async update (req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        const oldPeli = req.body;
        await pool.query('UPDATE peliculas set ? WHERE id= ?', [req.body, id]);
        res.json({message: 'La pelicula fue actualizada'});
    }

}

const pelisController = new PelisController();
export default pelisController;
